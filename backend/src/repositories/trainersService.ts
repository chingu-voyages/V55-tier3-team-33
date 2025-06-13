import { RowDataPacket } from 'mysql2';
import { Trainers, Trainer } from '../types/trainer.js';
import { makeDb } from '../db/db.js';

// TODO : add pagination, handle errors
export const getTrainers = async (): Promise<Trainers> => {
  const db = await makeDb();
  const [rows] = await db.query<RowDataPacket[]>(`
    SELECT 
      p.id AS id,
      p.given_name,
      p.surname,
      p.phone,
      t.city,
      GROUP_CONCAT(d.name ORDER BY d.name SEPARATOR ', ') AS disciplines,
      GROUP_CONCAT(l.name ORDER BY l.name SEPARATOR ', ') AS languages
    FROM trainer t
    JOIN person p ON t.person_id = p.id
    LEFT JOIN trainer_discipline td ON t.person_id = td.trainer_id
    LEFT JOIN discipline d ON td.discipline_id = d.id
    LEFT JOIN trainer_lang tl ON t.person_id = tl.trainer_id
    LEFT JOIN lang l ON tl.lang_id = l.id
    GROUP BY p.id, p.given_name, p.surname, p.phone, t.city
  `);

  return rows.map(
    (row: RowDataPacket): Trainer => ({
      id: row.id,
      given_name: row.given_name,
      surname: row.surname,
      email: row.email,
      phone: row.phone ?? null,
      city: row.city,
      disciplines: row.disciplines
        ? row.disciplines.split(', ').filter(Boolean)
        : [],
      languages: row.languages ? row.languages.split(', ').filter(Boolean) : [],
    })
  ) as Trainers;
};

export const getTrainerById = async (id: string): Promise<Trainer> => {
  const db = await makeDb();
  const [rows] = await db.query<Array<Trainer & RowDataPacket>>(
    `
    SELECT 
      p.id AS id,
      p.given_name,
      p.surname,
      p.email,
      p.phone,
      p.email_verified,
      p.created_at,
      t.city,
      GROUP_CONCAT(DISTINCT d.name ORDER BY d.name SEPARATOR ', ') AS disciplines,
      GROUP_CONCAT(DISTINCT l.name ORDER BY l.name SEPARATOR ', ') AS languages
    FROM trainer t
    JOIN person p ON t.person_id = p.id
    LEFT JOIN trainer_discipline td ON t.person_id = td.trainer_id
    LEFT JOIN discipline d ON td.discipline_id = d.id
    LEFT JOIN trainer_lang tl ON t.person_id = tl.trainer_id
    LEFT JOIN lang l ON tl.lang_id = l.id
    WHERE p.id = ?
    GROUP BY p.id, p.given_name, p.surname, p.phone, p.created_at, t.city
    `,
    [id]
  );

  return rows.map(
    (row: RowDataPacket): Trainer => ({
      id: row.id,
      given_name: row.given_name,
      surname: row.surname,
      email: row.email,
      phone: row.phone ?? null,
      city: row.city,
      disciplines: row.disciplines
        ? row.disciplines.split(', ').filter(Boolean)
        : [],
      languages: row.languages ? row.languages.split(', ').filter(Boolean) : [],
    })
  )[0] as Trainer;
};

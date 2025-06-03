import { Trainers, Trainer } from '../models/trainerModel.js';
import { makeDb } from '../db/db.js';

// TODO : add pagination, handle errors
export const getTrainers = async (): Promise<Trainers> => {
  const db = await makeDb();
  const [rows] = await db.query(`
    SELECT 
      p.id AS trainer_id,
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
    GROUP BY p.id, p.given_name, p.surname, p.email, p.phone, p.email_verified, p.created_at, t.city
  `);

  return rows as Trainers;
};

export const getTrainerById = async (id: string): Promise<Trainer> => {
  const db = await makeDb();
  const [rows] = await db.query(
    `
    SELECT 
      p.id AS trainer_id,
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
    GROUP BY p.id, p.given_name, p.surname, p.email, p.phone, p.email_verified, p.created_at, t.city
    `,
    [id]
  );

  // TODO : remove the any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (rows as any[])[0] as Trainer;
};

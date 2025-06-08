import { RowDataPacket } from 'mysql2';
import { makeDb } from '../db/db.js';

// eslint-disable-next-line jsdoc/require-jsdoc
export async function saveClient({
  id,
  email,
  password,
  name,
  surname,
  phone,
}: {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string | undefined;
}) {
  const pool = await makeDb();

  await pool.query(
    'INSERT INTO person (id, email, pwd, given_name, surname, phone) VALUES (?, ?, ?, ?, ?, ?)',
    [id, email, password, name, surname, phone || null]
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
export async function saveTrainer({
  id,
  email,
  password,
  name,
  surname,
  phone,
  city,
  disciplines,
}: {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string | undefined;
  city: string;
  disciplines: string[];
}) {
  const pool = await makeDb();

  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [rows] = await conn.query<Array<{ id: number } & RowDataPacket>>(
      `SELECT id FROM discipline WHERE name in (${disciplines.map(() => '?').join(', ')})`,
      disciplines
    );
    const disciplineIds = rows.map((row) => row.id);

    // insert into person, trainer, and trainer_discipline
    await Promise.all([
      conn.query(
        'INSERT INTO person (id, email, pwd, given_name, surname, phone) VALUES (?, ?, ?, ?, ?, ?)',
        [id, email, password, name, surname, phone || null]
      ),
      conn.query('INSERT INTO trainer (person_id, city) VALUES (?, ?)', [
        id,
        city,
      ]),
      ...disciplineIds.map((disciplineId) =>
        conn.query('INSERT INTO trainer_discipline VALUES (?, ?)', [
          id,
          disciplineId,
        ])
      ),
    ]);

    await conn.commit();
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

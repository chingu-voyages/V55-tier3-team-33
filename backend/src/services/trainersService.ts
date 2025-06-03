import { Trainers } from '../models/trainerModel.js';
import { User } from '../models/userModel.js';
import { makeDb } from '../db/db.js';

const mapTrainers = (users: User[]): Trainers => {
  return users
    .filter(
      (user): user is User & { disciplines: string[]; languages: string[] } =>
        user.role === 'trainer'
    )
    .map((user) => ({
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone ?? null,
      disciplines: user.disciplines ?? [],
      languages: user.languages ?? [],
    }));
};

export const getTrainers = async (): Promise<Trainers> => {
  const db = await makeDb();
  const [rows] = await db.query('SELECT * FROM person WHERE trainer = 1');
  const users = rows as User[];

  const trainers: Trainers = mapTrainers(users);
  return trainers;
};

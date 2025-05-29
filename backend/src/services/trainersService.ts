import { Trainers } from '../models/trainerModel.js';
// mocks
import { users, User } from './MOCK_users.js';

const mapTrainers = (users: User[]): Trainers => {
  // do we want mandatory properties?
  return {
    trainers: users
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
      })),
  };
};

export const getTrainers = async (): Promise<Trainers> => {
  // connect to database and get trainers

  const trainers: Trainers = mapTrainers(users);
  return trainers;
};

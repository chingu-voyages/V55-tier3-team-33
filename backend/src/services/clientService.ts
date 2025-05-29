import { Clients } from '../models/clientModel.js';
import { Users } from '../models/userModel.js';
// mocks
import { users } from './MOCK_users.js';

const mapClients = (users: Users): Clients => {
  // do we want mandatory properties?
  return users
    .filter((user) => user.role === 'client')
    .map((user) => ({
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone ?? null,
      languages: user.languages ?? [],
    }));
};

export const getClients = async (): Promise<Clients> => {
  // connect to database and get clients

  const clients: Clients = mapClients(users);
  return clients;
};

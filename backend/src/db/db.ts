import { createPool } from 'mysql2/promise';
import { createId as createCuid, isCuid } from '@paralleldrive/cuid2';

import type { Pool } from 'mysql2/promise';
let pool: Pool;

export default { isValidId, makeDb, makeId };

// making it asynchronous to mimick all the other db operations
// eslint-disable-next-line
export async function makeDb(): Promise<Pool> {
  if (!process.env.DB_URI) {
    throw new Error('DB_URI not set. Please check your env vars');
  }

  if (!pool) {
    try {
      console.info('creating a connection pool for the database...');
      pool = createPool(process.env.DB_URI);
    } catch (err) {
      console.error('pool creation failed.');
      throw err;
    }
  }

  console.info('db connection established');
  return Promise.resolve(pool);
}

// eslint-disable-next-line
export function makeId(): string {
  return createCuid();
}

// eslint-disable-next-line
export function isValidId(id: string): boolean {
  return isCuid(id);
}

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, URL } from 'node:url';
import { makeDb } from './db.js';

import type { Pool } from 'mysql2/promise';

const filename = process.argv[2];
const SQL_FILES_DIRNAME = fileURLToPath(
  new URL('./sql_scripts', import.meta.url)
);

if (!filename || !['init.sql', 'seed.sql'].includes(filename)) {
  // @ts-expect-error: ts error type needs to update to include error.cause
  throw new Error('no valid sql filename provided', {
    cause: { arg: { expected: 'existing sql_file_name', actual: filename } },
  });
}

console.info(`> executing ${filename}...`);
const pool = await execSqlFile(filename);
console.info(`> ${filename} executed`);

await pool.end();
console.info(`> all pool connections closed`);

export async function execSqlFile(filename: string): Promise<Pool> {
  const contents = await fs.readFile(path.join(SQL_FILES_DIRNAME, filename), {
    encoding: 'utf8',
  });

  let queries = contents.split(';').map((str) => str.trim());
  // last array element will be empty if the last sql query ends with ;
  if (!queries[queries.length - 1]) {
    queries = queries.slice(0, -1);
  }

  const pool = await makeDb();

  const connection = await pool.getConnection();
  await Promise.all(queries.map((query) => connection.query(query)));
  connection.release();

  return pool;
}

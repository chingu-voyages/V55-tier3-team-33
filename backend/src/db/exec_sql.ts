import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, URL } from 'node:url';
import { makeDb } from './db.js';

const filename = process.argv[2];
const SQL_FILES_DIRNAME = fileURLToPath(
  new URL('./sql_scripts', import.meta.url)
);

if (filename !== 'init.sql') {
  // @ts-expect-error: ts error type needs to update to include error.cause
  throw new Error('no valid sql filename provided', {
    cause: { arg: { expected: 'existing sql_file_name', actual: filename } },
  });
}

await execSqlFile(filename);

// command hangs, need to investigate if there's a different fix
// eslint-disable-next-line n/no-process-exit
process.exit(0);

export async function execSqlFile(filename: string): Promise<void> {
  const pool = await makeDb();

  const contents = await fs.readFile(path.join(SQL_FILES_DIRNAME, filename), {
    encoding: 'utf8',
  });

  let queries = contents.split(';').map((str) => str.trim());
  // last array element will be empty if the last sql query ends with ;
  if (!queries[queries.length - 1]) {
    queries = queries.slice(0, -1);
  }

  console.info(`executing ${filename}'s queries...`);
  for (const query of queries) {
    await pool.query(query);
  }

  console.info('execution complete')
}

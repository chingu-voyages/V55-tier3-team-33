import app from './app.js';
import { makeDb } from './db/db.js';

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error('PORT not set. Please check your env vars');
}

app.listen(PORT, async () => {
  await makeDb();
  console.info(`Server running on http://localhost:${PORT}`);
});

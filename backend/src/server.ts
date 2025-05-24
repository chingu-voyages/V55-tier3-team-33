import app from './app.js';
import { makeDb } from './db/db.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await makeDb();
  console.log(`Server running on http://localhost:${PORT}`);
});

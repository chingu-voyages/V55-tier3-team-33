import app from './app.js';
import { config } from '@dotenvx/dotenvx';

config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

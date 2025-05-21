import express, { Application, Request, Response } from 'express';
import routes from './routes/index.js';

const app: Application = express();

app.use(express.json());
app.use('/', routes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;

import { Request, Response } from 'express';

export const home = (req: Request, res: Response): void => {
  res.json({ message: 'Hello from your Node.js backend!' });
};

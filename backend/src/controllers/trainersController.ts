import { Request, Response } from 'express';

export const trainers = (req: Request, res: Response): void => {
    res.json([{ id: '1', name: 'Ash Ketchum' }]);
};

import { type Request, type Response } from 'express';
import { getTrainers } from '../services/trainersService.js';

export const trainers = async (req: Request, res: Response): Promise<void> => {
  try {
    const trainers = await getTrainers();
    res.status(200).json(trainers);
  } catch (error) {
    console.error('Error fetching trainers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

import { type Request, type Response } from 'express';
import { getTrainers, getTrainerById } from '../services/trainersService.js';

export const trainers = async (req: Request, res: Response): Promise<void> => {
  try {
    const trainers = await getTrainers();
    res.status(200).json(trainers);
  } catch (error) {
    console.error('Error fetching trainers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const trainerById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  try {
    const trainer = await getTrainerById(req.params.id);
    if (!trainer) {
      res.status(404).json({ message: 'Trainer not found' });
      return;
    } else {
      res.status(200).json(trainer);
    }
  } catch (error) {
    console.error(`Error fetching trainer ${id}:`, error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

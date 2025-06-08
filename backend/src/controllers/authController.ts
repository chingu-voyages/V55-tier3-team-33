import { createJWT } from '../utils/jwt.js';
import { makeClient, makeTrainer } from '../entities/User.js';
import type { Request, Response } from 'express';

// eslint-disable-next-line jsdoc/require-jsdoc
export async function register(req: Request, res: Response) {
  const { isTrainer, ...userDetails } = req.body;

  if (typeof isTrainer != 'boolean') {
    res.status(400).json({ message: 'invalid role specified!' });
    return;
  }

  const makeUser = isTrainer ? makeTrainer : makeClient;

  let user;
  try {
    user = await makeUser(userDetails);
  } catch (err) {
    console.error(err);
    const { message, cause } = err as Error;
    res.status(400).json({ message, fields: cause });
    return;
  }

  try {
    await user.save();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'an error happened on the server' });
    return;
  }

  const { id, name, surname } = user;
  const accessToken = createJWT({ id, name, surname, isTrainer });

  res.status(201).json({ accessToken });
}

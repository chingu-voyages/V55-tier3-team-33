import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createJWT } from '../utils/jwt.js';
import { insert, findByEmail } from '../db/db.js';

// @types/bcrypt @types/express -D
type ValidationErrors = {
  email?: string;
  password?: string;
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password, role } = req.body;

  if (!['client', 'trainer'].includes(role)) {
    res.status(400).json({ errors: { role: 'no role specified!' } });
    return;
  }

  const errors: ValidationErrors = {};
  // validate that everything is correct
  /// validate that the email has the correct form
  const regex = /^[A-Z0-9._-]{3,64}@[A-Z0-9-]{3,64}\.[A-Z]{2,32}$/gi;
  const isEmailValid = regex.test(email);
  if (!isEmailValid) {
    errors.email = 'email is malformed.';
  }

  /// validate that the password passes our rules
  const isPasswordValid = password.length >= 8;
  if (!isPasswordValid) {
    errors.password = 'password should be more than 8 characters';
  }

  if (Object.keys(errors).length > 0) {
    res.status(400).json({ errors });
    return;
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // save in the db
  // TODO: IMPLEMENT THIS
  const isStored = await insert({ email, password: hashedPassword }, 'Users');
  if (!isStored) {
    res.status(500).send();
    return;
  }

  // login flow
  /// create a JWT token
  const accessToken = createJWT({ role });

  /// send it back
  res.json({ accessToken });
};

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  {
    const errors: ValidationErrors = {};
    // validate that everything is correct
    const regex = /^[A-Z0-9._-]{3,64}@[A-Z0-9-]{3,64}\.[A-Z]{2,32}$/gi;
    const isEmailValid = regex.test(email);
    if (!isEmailValid) {
      errors.email = 'email is malformed.';
    }

    const isPasswordValid = password.length >= 8;
    if (!isPasswordValid) {
      errors.password = 'password should be more than 8 characters';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({ errors });
      return;
    }
  }

  // verify the credentials
  // find the user using email
  const user = await findByEmail(email, 'Users');

  if (!user) {
    res.status(401).json({ message: 'invalid email or password' });
    return;
  }

  const storedPassword = user.password;

  const isValid = await bcrypt.compare(password, storedPassword);
  // compare
  if (!isValid) {
    res
      .status(401)
      .json({ message: 'INVALID COMPARISON - invalid email or password' });
    return;
  }

  // create and return the jwt
  const accessToken = createJWT({ role: user.role });

  /// send it back
  res.json({ accessToken });
}

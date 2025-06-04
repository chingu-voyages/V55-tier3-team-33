import bcrypt from 'bcrypt';
import { makeId, isValidId } from '../db/db.js';
import { saveClient, saveTrainer } from '../repositories/UserRepository.js';

type ClientDetails = {
  id?: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  phone?: string;
};
type Client = ClientDetails & {
  id: string;
  phone: string | undefined;
  save: () => Promise<void>;
};

type TrainerDetails = ClientDetails & { city: string; disciplines: string[] };
type Trainer = TrainerDetails & {
  id: string;
  phone: string | undefined;
  save: () => Promise<void>;
};

type ValidationErrors<T> = { [Property in keyof T]?: T[Property] };

export default { makeClient, makeTrainer };

/* eslint-disable-next-line jsdoc/require-jsdoc */
export async function makeClient({
  id = makeId(),
  email,
  password,
  name,
  surname,
  phone,
}: ClientDetails): Promise<Client> {
  const erroneousFields: ValidationErrors<ClientDetails> = {};

  if (!isValidId(id)) {
    erroneousFields.id = id;
  }

  const emailRegex = /^[A-Z0-9._-]{3,64}@[A-Z0-9-]{3,64}\.[A-Z]{2,32}$/gi;
  if (!email || !emailRegex.test(email)) {
    erroneousFields.email = email;
  }

  // uppercase, lowercase, numbers, and special chars
  const charTypeRegexes = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/];
  if (
    !password ||
    password.length < 8 ||
    charTypeRegexes.some((regex) => !regex.test(password))
  ) {
    erroneousFields.password = password;
  }

  if (!name || name.length < 3) {
    erroneousFields.name = name;
  }

  if (!surname || surname.length < 3) {
    erroneousFields.surname = surname;
  }

  // TODO: use a library to validate phone numbers, e.g google's libphonenumber
  // if (phone && !isValidPhone(phone)) {
  //   throw new Error(...)
  // }

  if (Object.keys(erroneousFields).length > 0) {
    throw new Error(
      `Validation failed for ${Object.keys(erroneousFields).join(', ')}`,
      { cause: erroneousFields }
    );
  }

  // todo: sanitize and further normalize values
  // expose business/domain related methods here
  return Object.freeze({
    id,
    email: email.toLowerCase(),
    password: await bcrypt.hash(password, 12),
    name: name.toLowerCase(),
    surname: surname.toLowerCase(),
    phone,
    save() {
      return saveClient(this);
    },
  });
}

/* eslint-disable-next-line jsdoc/require-jsdoc */
export async function makeTrainer({
  city,
  disciplines,
  ...clientDetails
}: TrainerDetails): Promise<Trainer> {
  const erroneousFields: ValidationErrors<TrainerDetails> = {};

  // TODO: improve validation by using a library to validate cities
  if (!city) {
    erroneousFields.city = city;
  }

  // TODO: improve validation by expecting a list of disciplines. maybe a service provides it?
  if (
    disciplines.length < 1 ||
    disciplines.some((discipline) => typeof discipline != 'string')
  ) {
    erroneousFields.disciplines = disciplines;
  }

  let client;
  try {
    client = await makeClient(clientDetails);
  } catch (err) {
    // typescript being typescript...
    const { cause } = err as Error;
    Object.assign(erroneousFields, cause);
  }

  if (Object.keys(erroneousFields).length > 0) {
    throw new Error(
      `Validation failed for ${Object.keys(erroneousFields).join(', ')}`,
      { cause: erroneousFields }
    );
  }

  // TODO: Sanitize and further normalize values.
  // expose business/domain related methods here
  return Object.freeze({
    ...client,
    city: city.toLowerCase(),
    disciplines: disciplines.map((d) => d.toLowerCase()),
    async save() {
      return saveTrainer(this);
    },
  } as Trainer);
}

export type Trainers = Trainer[];

export interface Trainer {
  id: string;
  given_name: string;
  surname: string;
  email: string;
  phone: string | null;
  city: string;
  disciplines: string[];
  languages: string[];
}

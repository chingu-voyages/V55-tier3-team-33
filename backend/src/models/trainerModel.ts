export type Trainers = Trainer[];

export interface Trainer {
  id: string;
  fullname: string;
  email: string;
  phone: string | null;
  disciplines: string[];
  languages: string[];
}

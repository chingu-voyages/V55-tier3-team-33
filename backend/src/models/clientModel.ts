export type Clients = Client[];

export interface Client {
  id: string;
  fullname: string;
  email: string;
  phone: string | null;
  languages: string[];
}

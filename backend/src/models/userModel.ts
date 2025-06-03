export type Users = User[];

export interface User {
  id: string;
  given_name: string;
  surname: string;
  email: string;
  phone: string;
  role: boolean;
  created_at: string;
}

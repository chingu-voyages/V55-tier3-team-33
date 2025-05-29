// needed common types?
export type Users = User[];

export interface User {
  id: string;
  fullname: string;
  email: string;
  phone: string | null;
  role: 'trainer' | 'client'; // set an ENUM or too much?
  created_at: string;
  disciplines?: string[];
  languages?: string[];
}

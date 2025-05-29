// needed common types?
export interface User {
  id: string;
  fullname: string;
  email: string;
  phone: string | null;
  role: 'trainer' | 'client';
  created_at: string;
  disciplines?: string[];
  languages?: string[];
}

// mocks
export const users: User[] = [
  {
    id: '7f1d254e-dcf4-45a5-9311-0d52e0f9a112',
    fullname: 'Emma Johnson',
    email: 'emma@fitpro.com',
    phone: '+15551234567',
    role: 'trainer',
    created_at: 'current_timestamp',
  },
  {
    id: '8d9bbd13-8ed5-4c74-b5ab-643a8dbdef12',
    fullname: 'Carlos Ruiz',
    email: 'carlos@fitpro.com',
    phone: '+15552345678',
    role: 'trainer',
    created_at: 'current_timestamp',
  },
  {
    id: '67a058b4-1ad4-4bc1-8d30-52f13c9f07c5',
    fullname: 'Sophie Martin',
    email: 'sophie@fitpro.com',
    phone: '+15553456789',
    role: 'trainer',
    created_at: 'current_timestamp',
  },
  {
    id: 'a5e4cc6d-8586-49a4-b9ea-679c43ac2442',
    fullname: 'James Wilson',
    email: 'james@fitpro.com',
    phone: '+15554567890',
    role: 'trainer',
    created_at: 'current_timestamp',
  },
  {
    id: '343eb3c4-7347-42eb-a499-b34f98a8a86d',
    fullname: 'Ling Chen',
    email: 'ling@fitpro.com',
    phone: '+15555678901',
    role: 'trainer',
    created_at: 'current_timestamp',
  },
  {
    id: '528a82a1-4866-4d17-9c4a-0b4b24f8f8c9',
    fullname: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1234567890',
    role: 'trainer',
    created_at: 'current_timestamp',
    disciplines: ['Yoga', 'Boxing', 'HIIT'],
    languages: ['English', 'Spanish'],
  },
  {
    id: 'd4e3fd55-d760-44aa-b0ec-905763b3a024',
    fullname: 'Maya Lopez',
    email: 'maya.lopez@example.com',
    phone: '+1987654321',
    role: 'trainer',
    created_at: 'current_timestamp',
    disciplines: ['Pilates', 'Swimming', 'Martial Arts'],
    languages: ['Spanish', 'Mandarin'],
  },
  {
    id: 'f8d7cc45-d3b1-4010-9319-5b0ea3e7ab29',
    fullname: 'Chris Evans',
    email: 'chris.evans@example.com',
    phone: null,
    role: 'trainer',
    created_at: 'current_timestamp',
    disciplines: ['CrossFit', 'Boxing', 'Weightlifting'],
    languages: ['English', 'French'],
  },
  {
    id: 'af40a09e-6d62-4f8a-ae62-fb872d9330d7',
    fullname: 'Luna Rivera',
    email: 'luna.rivera@example.com',
    phone: null,
    role: 'client',
    created_at: 'current_timestamp',
  },
  {
    id: 'c8cb68c9-d887-4dd4-b4d5-99320e76e71b',
    fullname: 'David Kim',
    email: 'david.kim@example.com',
    phone: null,
    role: 'client',
    created_at: 'current_timestamp',
  },
  {
    id: '3950cc4a-202b-499b-bc18-3d3544b1f679',
    fullname: 'Sara Novak',
    email: 'sara.novak@example.com',
    phone: '+447700900123',
    role: 'client',
    created_at: 'current_timestamp',
  },
  {
    id: 'b38dc46f-f6f5-4df0-8148-23d37e10f47c',
    fullname: 'Alex Turner',
    email: 'alex@client.com',
    phone: null,
    role: 'client',
    created_at: 'current_timestamp',
  },
  {
    id: '22e69ad5-c20f-4c14-bad4-17d219a87d3e',
    fullname: 'Priya Patel',
    email: 'priya@client.com',
    phone: '+15556789012',
    role: 'client',
    created_at: 'current_timestamp',
  },
  {
    id: 'e140cb6d-4d94-4de3-9a86-4f7cc00e6e37',
    fullname: 'Mohammed Al-Farsi',
    email: 'mohammed@client.com',
    phone: '+15557890123',
    role: 'client',
    created_at: 'current_timestamp',
  },
  {
    id: '90e38296-324c-4141-b826-3a5ac0f0132e',
    fullname: 'Olivia Brown',
    email: 'olivia@client.com',
    phone: null,
    role: 'client',
    created_at: 'current_timestamp',
  },
  {
    id: '711b5a6d-2fc2-4133-b999-0c511e7adbd8',
    fullname: 'Thomas Müller',
    email: 'thomas@client.com',
    phone: '+15558901234',
    role: 'client',
    created_at: 'current_timestamp',
  },
];

type User = {
  id: Number;
  email: string;
  password: string;
};

type Db = {
  [key: string]: Array<User>;
};

let db: Db = {};

export async function makeDb(): Promise<Db> {
  console.log('initializing db!');
  return Promise.resolve(db);
}

export async function insert(
  obj: Object,
  collectionName: string
): Promise<Boolean> {
  if (!db[collectionName]) {
    createCollection(collectionName);
  }

  db[collectionName].push({ id: makeId(), ...obj } as User);
  console.log(db[collectionName]);
  return true;
}

export async function findByEmail(
  email: string,
  collectionName: string
): Promise<User | undefined> {
  console.log(db[collectionName]);
  return Promise.resolve(
    db[collectionName].find((element) => element.email === email)
  );
}

let id = 0;
function makeId(): Number {
  // autoincrement id
  return ++id;
}

function createCollection(collectionName: string): Db {
  db[collectionName] = [];
  return db;
}

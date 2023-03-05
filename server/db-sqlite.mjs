import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDB() {
  const db = await open({
    filename: './db.sqlite',
    verbose: true,
    driver: sqlite3.Database,
  });
  await db.migrate();
  return db;
}

const dbConnect = openDB();

export async function getUser(id) {
  const db = await dbConnect;
  return db.get('SELECT * FROM user_profile WHERE id = ?', id);
}

// the user email is the primary key

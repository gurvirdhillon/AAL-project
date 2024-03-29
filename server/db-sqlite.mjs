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

export async function getUser(user_id) {
  const db = await dbConnect;
  return db.get('SELECT * FROM user WHERE user_id = ?', user_id);
}

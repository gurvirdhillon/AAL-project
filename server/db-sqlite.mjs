import { sqlite3 } from "sqlite3";
import { open } from "sqlite";

export async function openDB() {
    return open({
        filename: "./db.sqlite",
        verbose: true,
        driver: sqlite3.Database,
    });
    await db.migrate();
    return db;
}

const dbConn = await openDB();

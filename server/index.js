import sqlite3 from "sqlite3";
import { open } from "sqlite";

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

export async function getUser(user_email) {
    const db = await dbConnect;
    return db.get("SELECT * FROM user_profile WHERE user_email = ?", user_email);
}

// // the user email is the primary key

export async function listReminders(){
    const db = await dbConnection;
    return db.all('SELECT * FROM reminder_set');
}

export async function findReminder(id) {
    const db = await dbConnection;
    return db.get('SELECT * FROM reminder_set WHERE email = ?', id);
}

export async function addReminder(reminder_name) {
    const db = await dbConnection;
    const id = uuid();
    await db.run('INSERT INTO reminder_set VALUES(?, ?, ?, ?, ?, ?, ?)', [reminder_id, reminder_name, reminder_time, reminder_date, reminder_set, reminder_notice, user_email]);
    return listReminders(id);
}

export async function updateReminder(id, reminder_name) {
    const db = await dbConnection;
    const query = await db.run('UPDATE reminder_set SET reminder_name = ? WHERE reminder_id = ?', [reminder_name, reminder_id]);
    if(query.changes === 0) throw new Error('Reminder not found');
    return listReminders(id);
}

function showReminders(reminders, region) {
    for(const reminder of reminders){
        const makeReminder = document.createElement('li');
        makeReminder.textContent = reminder.contentbody;
        makeReminder.dataset.id = reminder.id;
        region.append(makeReminder);
    }
};


async function loadReminders() {
    const response = await fetch('/api/reminders');
    let reminders = await response.json();
    if(response.ok){
    messages = await response.json();
    messages = [{contentbody: 'Sorry we are struggling to find your reminders.'}];
    removeContent(dataReminder.reminderList);
    removeContent(reminders.reminderList);
    } else {
        console.log('failure to load the reminders :/ ');
    }
}

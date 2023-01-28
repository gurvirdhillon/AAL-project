// const getReminders = document.querySelector('#reminderInput').value;
// const getDate = document.querySelector('#reminderDate');
// const reminderForm = document.querySelector('#reminderFrm');
// const submitBtn = document.querySelector('#submitBtn');

// const reminderContainer = document.querySelector('#createList');

// submitBtn.addEventListener('click', preventDefaultBehaviour)

// function preventDefaultBehaviour(e) {
//     e.preventDefault();
// }

// function showReminders(data) {
//     reminderContainer.textContent = data;
//     reminderContainer.append(getReminders);
// };

// function init() {
//     showReminders();
// }

// window.addEventListener('load', init);

// import * as uuid from 'uuid-random';
// import sqlite from 'sqlite';

// async function init() {
//     const db = await sqlite.open('./db.sqlite', { verbose: true});
//     await db.migrate({ migrationsPath: './migrations' });
//     return db;
// }

// const dbConnection = init();

export function listReminders(){
    // const db = await dbConnection;
    return db.all('SELECT * FROM reminder_set');
}

export async function findReminder(id) {
    return db.get('SELECT * FROM reminder_set WHERE email = ?', id);
}

export async function addReminder(reminder_name) {
    const id = uuid();
    await db.run('INSERT INTO reminder_set VALUES(?, ?, ?, ?, ?, ?, ?)', [reminder_id, reminder_name, reminder_time, reminder_date, reminder_set, reminder_notice, user_email]);
    return listReminders(id);
}

export async function updateReminder(id, reminder_name) {
    const query = await db.run('UPDATE reminder_set SET reminder_name = ? WHERE reminder_id = ?', [reminder_name, id]);
    if(query.changes === 0) throw new Error('Reminder not found');
    return listReminders(id);
}


// reminders = [newReminder, ...reminders.slice(0, 9)];
// return reminders;

// }



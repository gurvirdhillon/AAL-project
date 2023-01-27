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

import * as uuid from 'uuid';

export function listReminders(){
    return reminders;
}

export function findReminder(id) {
    for(const reminder of reminders) {
        if(reminder.id === id) {
            return reminder;
        }
    }
    return null;
}

export function addReminder(reminder){
    const newReminder = [
        {
    id: "",
    reminder: "",
    date: ""
    },
];

reminders = [newReminder, ...reminders.slice(0, 9)];
return reminders;

}



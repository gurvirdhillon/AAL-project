const getReminders = document.querySelector('#reminderInput');
const getDate = document.querySelector('#reminderDate');
const reminderForm = document.querySelector('#reminderFrm');
const submitBtn = document.querySelector('#submitBtn');

const reminderContainer = document.querySelector('#createList');

function showReminders(reminder, date) {
    const reminderElem = document.createElement('div');
    reminderElem.textContent = reminder;
    reminderElem.textContent = date;
    reminderContainer.append(reminderElem);
}


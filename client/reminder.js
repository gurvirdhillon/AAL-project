const getReminders = document.querySelector('#reminderInput');
const getDate = document.querySelector('#reminderDate');
const reminderForm = document.querySelector('#reminderFrm');
const submitBtn = document.querySelector('#submitBtn');

const reminderContainer = document.querySelector('#createList');

function showReminders(data) {
    getReminders.value = data;
    reminderContainer.textContent = data;
    reminderContainer.append(getReminders);
};

function init() {
    showReminders();
}

window.addEventListener('load', init);

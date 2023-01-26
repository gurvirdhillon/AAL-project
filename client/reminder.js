const getReminders = document.querySelector('#reminderInput').value;
const getDate = document.querySelector('#reminderDate');
const reminderForm = document.querySelector('#reminderFrm');
const submitBtn = document.querySelector('#submitBtn');

const reminderContainer = document.querySelector('#createList');

submitBtn.addEventListener('click', preventDefaultBehaviour)

function preventDefaultBehaviour(e) {
    e.preventDefault();
}

function showReminders(data) {
    reminderContainer.textContent = data;
    reminderContainer.append(getReminders);
};

function init() {
    showReminders();
}

window.addEventListener('load', init);

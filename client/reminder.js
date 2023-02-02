const dataReminder = {};

function removeContent(content) {
    content.textContent = '';
}

function grabSelectors() {
    // grab the query selectors for the right things
    dataReminder.reminderList = document.querySelector('#totalList');
    dataReminder.reminder = document.querySelector('#reminderInput');
    dataReminder.send = document.querySelector('#submitBtn');
}

function triggerEventListeners(){
    dataReminder.send.addEventListener('click', sendReminder);
};

function pageLoaded() {
    grabSelectors();
    triggerEventListeners();
    loadReminders();
}

window.addEventListener('load', pageLoaded);  

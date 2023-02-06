const dataReminder = {};

// removes the content from the input field
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

// just putting the list on the page

const getReminder = document.querySelector('#reminder');
const reminderTemplate = document.querySelector('');
const getList = document.querySelector('#totalList');

getReminder.addEventListener('click', function(){
    const templateContent = reminderTemplate.content.cloneNode(true);
    getList.appendChild(templateContent);
    
    const getForm = document.querySelector('#reminderFrm');
    const input = document.querySelector('#reminderInput');
    const makeList = document.querySelector('#totalList');

    if(form){
        form.addEventListener('submit', function(event) {
          event.preventDefault();
          const value = input.value;
          if (!value) {
            return;
          }
            const item = document.createElement('li');
            item.textContent = value;
            list.appendChild(item);
              input.value = '';
        });
    }
});


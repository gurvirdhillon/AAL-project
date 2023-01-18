const createList = document.querySelector('#createList');
const reminderDate = document.querySelector('#reminderDate');
const handleSubmitBtn = document.querySelector('#submitBtn');

handleSubmitBtn.addEventListener('click', dateValidator);

// find the list of reminders for that day and add those reminders

function dateValidator(){
    const inputDate = new Date(document.querySelector('#reminderDate').value);
    const today = new Date();
    if(inputDate < today){
        return false
    } else {
        return true
    }
}


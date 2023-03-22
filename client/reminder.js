document.addEventListener('DOMContentLoaded', () => {
  const readReminder = document.querySelector('#readReminders');
  readReminder.addEventListener('click', () => {
    const synthesis = window.speechSynthesis;
    const getReminder = document.querySelector('#yellowStickyNote');
    const vocal = new SpeechSynthesisUtterance(getReminder.textContent);
    synthesis.speak(vocal);
  });
});

function reminderIcon() {
  const readQuestionMark = document.querySelector('#reminderHelperIcon');
  readQuestionMark.addEventListener('click', () => {
    const reminderTemplate = document.querySelector('#reminderTemplate');
    const reminderContext = document.querySelector('.reminderContext');
    if (reminderContext) {
      reminderContext.innerHTML = reminderTemplate.innerHTML;
    }
  });
}

window.addEventListener('load', reminderIcon);

function reminderFeature() {
  const getInput = document.querySelector('#reminderInput');
  const reminderDate = document.querySelector('#reminderDate');
  const getSubmit = document.querySelector('#submitBtn');
  const getTime = document.querySelector('#reminderTime');
  const targetContent = document.querySelector('#createList');
  const getForm = document.querySelector('#reminderFrm');

  let savedReminders = localStorage.getItem('reminders');
  if (savedReminders) {
    targetContent.innerHTML = savedReminders;
  }

  if (getForm) {
    getForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const context = getInput.value;
      const date = reminderDate.value;
      const time = getTime.value;
      reminderInput.value = '';
      reminderDate.value = '';

      const giveList = document.createElement('li');
      giveList.className = 'list-group-item';
      giveList.textContent = `Reminder to: ${context} at ${date} at ${time}`;
      targetContent.appendChild(giveList);
      const getDate = document.createElement('span');
      getDate.classList.add('reminderDate');
      giveList.appendChild(getDate);
      localStorage.setItem('reminders', targetContent.innerHTML);
      const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
      reminders.push({
        reminder: context,
        date: date,
        time: time
      });
      const del = document.createElement('button');
      del.classList.add('delete');
      del.textContent = '-';
      giveList.appendChild(del);
      del.addEventListener('click', (e) => {
        e.target.parentNode.remove();
        localStorage.setItem('reminders', targetContent.innerHTML);
      });
    });
  }  
}

window.addEventListener('load', reminderFeature);


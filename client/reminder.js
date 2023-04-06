export function reminder() {
  const readReminder = document.querySelector('#readReminders');
  readReminder.addEventListener('click', () => {
    const synthesis = window.speechSynthesis;
    const getReminder = document.querySelector('#yellowStickyNote');
    const vocal = new SpeechSynthesisUtterance(getReminder.textContent);
    synthesis.speak(vocal);
  });
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', reminder);
}

// function reminderIcon() {
//   const readQuestionMark = document.querySelector('#reminderHelperIcon');
//   readQuestionMark.addEventListener('click', () => {
//     const reminderTemplate = document.querySelector('#reminderTemplate');
//     const reminderContext = document.querySelector('.reminderContext');
//     if (reminderContext) {
//       reminderContext.innerHTML = reminderTemplate.innerHTML;
//     }
//   });
// }

// window.addEventListener('load', reminderIcon);

// function reminderFeature() {
//   const getInput = document.querySelector('#reminderInput');
//   const reminderDate = document.querySelector('#reminderDate');
//   const getSubmit = document.querySelector('#submitBtn');
//   const getTime = document.querySelector('#reminderTime');
//   const targetContent = document.querySelector('#createList');
//   const getForm = document.querySelector('#reminderFrm');

//   const savedReminders = localStorage.getItem('reminders');
//   if (savedReminders) {
//     targetContent.innerHTML = savedReminders;
//   }

//   if (getForm) {
//     getForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const context = getInput.value;
//       const date = reminderDate.value;
//       const time = getTime.value;
//       getInput.value = '';
//       reminderDate.value = '';

//       const giveList = document.createElement('li');
//       giveList.className = 'list-group-item';
//       giveList.textContent = `Reminder to: ${context} at ${date} at ${time}`;
//       // add notifications
//       if (Notification.permission !== 'granted') {
//         Notification.requestPermission();
//       }
//       setTimeout(function () {
//         new Notification(`Reminder to: ${context} at ${date} at ${time}`);
//       }, time - new Date());
//       targetContent.appendChild(giveList);
//       const getDate = document.createElement('span');
//       getDate.classList.add('reminderDate');
//       giveList.appendChild(getDate);
//       localStorage.setItem('reminders', targetContent.innerHTML);
//       const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
//       reminders.push({
//         reminder: context,
//         date: date,
//         time: time,
//       });
//       // make a delete all reminders button which removes all the reminders
//       const deleteAll = document.createElement('button');
//       deleteAll.classlist.add('deleteAll');
//       deleteAll.textContent = 'Delete All';
//       giveList.appendChild(deleteAll);
//       deleteAll.addEventListener('click', () => {
//         giveList.remove();
//         localStorage.setItem('reminders', targetContent.innerHTML);
//       });
//     });
//   }
// }

// window.addEventListener('load', reminderFeature);

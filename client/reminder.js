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

document.addEventListener('DOMContentLoaded', () => {
  const readReminder = document.querySelector('#readReminders');
  readReminder.addEventListener('click', () => {
    const synthesis = window.speechSynthesis;
    const getReminder = document.querySelector('#yellowStickyNote');
    const vocal = new SpeechSynthesisUtterance(getReminder.textContent);
    synthesis.speak(vocal);
  });
});



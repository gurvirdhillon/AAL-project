const selectMedDosage = document.querySelector('#medDosage');

// only allow for numbers to be entered

// getting a notification

async function notify(medicationName) {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    const reg = await navigator.serviceWorker.getRegistration();
    reg.showNotification('Medication Reminder', +medicationName);
  }
}

export async function getMedication() {
  const medication = await fetch('/api/medication');
  const medicationJson = await medication.json();
  return medicationJson;
}

async function initialise() {
  await notify('Medication Reminder');
}

window.addEventListener('load', initialise);

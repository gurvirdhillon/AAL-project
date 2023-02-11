const input = document.querySelector('#medicationInput');
const form = document.querySelector('#medicationFrm');
const dosage = document.querySelector('#medicationDosage');
const strength = document.querySelector('#medicationStrength');

const medicationList = document.querySelector('#medicationList');

if(form){
form.addEventListener('submit', function(event){
    event.preventDefault();
    const value = input.value;
    if(!value){
        return;
    }
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.push({
        medication: value,
        dosage: dosage.value,
        strength: strength.value,
        time: document.querySelector('#medicationTime').value
    });
    localStorage.setItem('medicationInput', value);
    localStorage.setItem('medicationDosage', dosage.value);
    localStorage.setItem('medicationStrength', strength.value);
    const medTime = document.querySelector('#medicationTime').value;
    const time = new Date();
    time.setHours(medTime.split(':')[0]);
    time.setMinutes(medTime.split(':')[1]);
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
    setTimeout(function(){
        new Notification(value +  " medication reminder");
    }, 
    time - new Date());
    const makeList = document.createElement('li');
    makeList.textContent = "medication reminder: " + value + ' to be consumed at ' + document.querySelector('#medicationTime').value;
    medicationList.appendChild(makeList);
    input.value = '';

  });
};

window.addEventListener('load', function () {
  input.value = localStorage.getItem('medicationInput') || ' ';
  dosage.value = localStorage.getItem('medicationDosage') || ' ';
  strength.value = localStorage.getItem('medicationStrength') || ' ';
  // stores the users reminders in local storage
  // stores the id of medication list in local storage

  const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
  reminders.forEach(function(reminder){
    const item = document.createElement('li');
    item.textContent = reminder.medication + ' at ' + reminder.time;
    medicationList.appendChild(item);
    localStorage.setItem('medicationList', medicationList.id);
  });
});

const input = document.querySelector('#medicationInput');
const form = document.querySelector('#medicationFrm');
const dosage = document.querySelector('#medicationDosage');
const strength = document.querySelector('#medicationStrength');

const medicationList = document.querySelector('#medicationList');

if(form){
form.addEventListener('submit', function(event){
    event.preventDefault();
    const list = document.querySelector('#medicationList');
    const value = input.value;
    if(!value){
        return;
      }
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
    makeList.textContent = value + ' at ' + document.querySelector('#medicationTime').value;
    list.appendChild(makeList);
    input.value = '';
  });
};

window.addEventListener('load', function () {
  input.value = localStorage.getItem('medicationInput') || ' ';
  dosage.value = localStorage.getItem('medicationDosage') || ' ';
  strength.value = localStorage.getItem('medicationStrength') || ' ';
});


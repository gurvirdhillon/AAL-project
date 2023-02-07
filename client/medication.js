const form = document.querySelector('#medicationFrm');
const input = document.querySelector('#medicationInput');
const list = document.querySelector('#medicationList');

if(form){
form.addEventListener('submit', function(event){
    event.preventDefault();
    const value = input.value;
    if(!value){
        return;
      }
    const medicationTime = document.querySelector('#medicationTime').value;
    const time = new Date();
    time.setHours(medicationTime.split(':')[0]);
    time.setMinutes(medicationTime.split(':')[1]);

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
    setTimeout(function(){
        new Notification(value + " reminder");
    }, 
    time - new Date());
    const item = document.createElement('li');
    item.textContent = value + ' at ' + document.querySelector('#medicationTime').value;
    list.appendChild(item);
    input.value = '';
  });
};

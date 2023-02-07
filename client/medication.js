const form = document.querySelector('#medicationFrm');

if(form){
form.addEventListener('submit', function(event){
    event.preventDefault();
    const input = document.querySelector('#medicationInput');
    const list = document.querySelector('#medicationList');
    const value = input.value;
    if(!value){
        return;
      }
    const medTime = document.querySelector('#medicationTime').value;
    const time = new Date();
    time.setHours(medTime.split(':')[0]);
    time.setMinutes(medTime.split(':')[1]);
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
    setTimeout(function(){
        new Notification(value + " reminder");
    }, 
    time - new Date());
    const makeList = document.createElement('li');
    makeList.textContent = value + ' at ' + document.querySelector('#medicationTime').value;
    list.appendChild(makeList);
    input.value = '';
  });
};

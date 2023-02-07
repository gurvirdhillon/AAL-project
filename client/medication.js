const form = document.querySelector('#medForm');
const input = document.querySelector('#medName');
const list = document.querySelector('#medicationList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    if(!value){
        return;
    }
    const medTime = document.querySelector('#medTime').value;
    const time = new Date();
    time.setHours(medTime.split(':')[0]);
    time.setMinutes(medTime.split(':')[1]);
    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }
    setTimeout(function(){
        new Notification(value + " reminder");
    }, time - new Date());
    const item = document.createElement('li');
    item.textContent = value + ' at ' + document.querySelector('#medTime').value;
    list.appendChild(item);
    input.value = '';
});

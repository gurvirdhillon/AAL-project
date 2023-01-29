const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk4MjYiLCJzdWIiOiJCREhSWVkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3c2xlIHd0ZW0gd3dlaSB3ZWNnIHdjZiB3c2V0IHdhY3Qgd294eSB3cmVzIiwiZXhwIjoxNjczODQyNjI0LCJpYXQiOjE2NzM4MTM4MjR9.ge4JfNNpvXN55qznom5gOUbpilZRse1XupZ-2KMpa-8";

fetch('https://api.fitbit.com//1/user/-/profile.json', {
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json())
.then(json => console.log(json));

// fetch('https://api.fitbit.com/1/user/-/br/date/2021-10-04.json', {
//     method: "GET",
//     headers: {"Authorization": "Bearer " + access_token}
// })
// .then(response => response.json())
// .then(json => console.log(json));

// fetch('https://api.fitbit.com/1/user/-/devices.json', {
//     method: "GET",
//     headers: {"Authorization": "Bearer " + access_token}
// })
// .then(response => response.json())
// .then(json => console.log(json));

const getReminders = document.querySelector('#reminderInput');
const reminderForm = document.querySelector('#reminderFrm');
const getDate = document.querySelector('#reminderDate');
const getAllReminders = document.querySelector('#totalReminders');

reminderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const getRmndrs = getReminders.value;
    const getDte = getDate.value;
    const createPin  = document.createElement('li');
    createPin.classList.add('reminder-list');
    const reminderText = document.createTextNode(getRmndrs);
    const dateText = document.createTextNode(getDte);
    createPin.appendChild(dateText);
    getAllReminders.appendChild(reminderText);
});


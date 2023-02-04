// import { io } from 'socket.io';

// const socket = io('http://localhost:8080');

// socket.on('message', data => {
//     console.log(data);
// });

let socket = io.connect('http://localhost:3000');

const form = document.querySelector('#chat-form');
const chatDisplay = document.querySelector('#chatDisplay');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // e stands for event
    const input = document.querySelector('#inputMsg');
    socket.emit('message', input.value);
    input.value = '';
})

socket.on('message', function (msg) {
    let msgElem = document.createElement('p');
    msgElem.textContent = msg;
    chatDisplay.appendChild(msgElem);
});

import { io } from 'socket.io';

const socket = io('http://localhost:8080');

socket.on('message', data => {
    console.log(data);
});

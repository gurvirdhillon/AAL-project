import io from 'socket.io-client';
const socket = io('http://localhost:8080');


window.addEventListener('click', function(){
    const getbtn = document.querySelector('#txtOpen');
    const template = document.querySelector('#openChat');
    const divHolder = document.querySelector('#PutChatHere');
    if(getbtn){
        getbtn.addEventListener('click', function(){
            // open the chat window
            divHolder.innerHTML = template.innerHTML;
        });
    }
});


// start the chat by getting the input, pressing the send button then it displays it as a message on the page

socket.on('message', data => {
    console.log(data);
});

const grabDisplay = document.querySelector('#chatDisplay');
const grabInputBar = document.querySelector('#inputMsg');
const grabSendBtn = document.querySelector('#chatSendBtn');

function handleMsg() {
    
}

function init() {
    
}



(async () => {
    const io = await import('socket.io');
    const socket = io('http://localhost:8080');

window.addEventListener('click', function () {
  const getbtn = document.querySelector('#txtOpen');
  const template = document.querySelector('#openChat');
  const divHolder = document.querySelector('#PutChatHere');
  if (getbtn) {
    getbtn.addEventListener('click', function () {
      console.log('button clicked');
      // open the chat window
      divHolder.innerHTML = template.innerHTML;
    });
  }
});

// start the chat by getting the input, pressing the send button then it displays it as a message on the page

const grabDisplay = document.querySelector('#chatDisplay');
const grabInputBar = document.querySelector('#inputMsg');
const grabSendBtn = document.querySelector('#chatSendBtn');
const grabFrm = document.querySelector('#MsgForm');

grabFrm.addEventListener('submit', function(e){
    e.preventDefault();
    const msg = grabInputBar.value;
    socket.emit('send-message', msg);
    grabInputBar.value = '';
});

socket.on('chat-message', data => {
    console.log("Message received: " + data);
});

function handleMsg() {

function handleChat() {
  const message = grabInput.value;
  getChatDisplay.textContent = message;
}

if (grabSend) {
  grabSend.addEventListener('click', handleChat);
}

function initialising() {
  handleChat();
}

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

const grabDisplay = document.querySelector('#chatDisplay');
const grabInputBar = document.querySelector('#inputMsg');
const chatDisplay = document.querySelector('#chatDisplay');

const grabSendBtn = document.querySelector('#chatSendBtn');

if (grabSendBtn) {
  grabSendBtn.addEventListener('click', displayMsg);
}

function displayMsg(e) {
  e.preventDefault();
  const grabInputBar = document.querySelector('#grabInputBar');
  const chatDisplay = document.querySelector('#chatDisplay');
  
  const newMsg = document.createElement('p');
  newMsg.innerHTML = grabInputBar.value;
  chatDisplay.appendChild(newMsg);
}

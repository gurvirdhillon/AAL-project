// add event listener to the button

window.addEventListener('click', function(){
    const getbtn = document.querySelector('#txtOpen');
    const template = document.querySelector('#openChat');
    const divHolder = document.querySelector('#PutChatHere');
    if(getbtn){
        getbtn.addEventListener('click', function(){
            console.log("button clicked");
            // open the chat window
            divHolder.innerHTML = template.innerHTML;
        });
    }
});


// start the chat by getting the input, pressing the send button then it displays it as a message on the page

const getChatDisplay = document.querySelector('#PutChatHere');
const grabSend = document.querySelector('#chatSendBtn');
const grabInput = document.querySelector('#inputMsg');

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

window.addEventListener('load', initialising);

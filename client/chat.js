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

const grabSendBtn = document.querySelector('#chatSendBtn');
// grabSendBtn.addEventListener('click', handleMsg);


// function handleMsg(e) {
//     e.preventDefault();
// }

// function init() {
//     handleMsg();
// }

// window.addEventListener('load', init);


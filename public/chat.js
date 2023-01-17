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


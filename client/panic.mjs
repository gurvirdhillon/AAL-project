// window.addEventListener('load', function(){
//     const getPanicBtn = document.querySelector('#panicBtn');
//     getPanicBtn.addEventListener('click', panicTrigger);
// });

// // find out how post requests work

// function panicTrigger() {
//     // alert("are you in trouble?");
    
// }

const panicBtn = document.querySelector('#panicBtn');
panicBtn.addEventListener('click', () => {
    fetch('/send-message', {method: 'POST'});
});


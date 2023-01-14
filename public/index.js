// prepare page when the buttons are pressed
function prepareHeaders() {
    const reminderBtn = document.querySelector('#reminder');
    const article = document.getElementsByTagName('article')[0];
    const template = document.querySelector('#remindTab');
    reminderBtn.addEventListener('click', function() {
        article.innerHTML = template.innerHTML;
    const removeImg = document.querySelector('#startingImg');
    removeImg.remove();
    })
    const medicationBtn = document.querySelector('#meds');
    medicationBtn.addEventListener('click', function(){
        const template2 = document.querySelector('#medicationTab');
        article.innerHTML = template2.innerHTML;
        const removeImg = document.querySelector('#startingImg');
        removeImg.remove();
    })
    const userActivityBtn = document.querySelector('#UA');
    userActivityBtn.addEventListener('click', function(){
        const template3 = document.querySelector('#UserActivityTab');
        article.innerHTML = template3.innerHTML
        const removeImg = document.querySelector('#startingImg');
        removeImg.remove();
    })
    const settingsBtn = document.querySelector('#settings');
    settingsBtn.addEventListener('click', function(){
        const template4 = document.querySelector('#settingsTab');
        article.innerHTML = template4.innerHTML
        const removeImg = document.querySelector('#startingImg');
        removeImg.remove();
    })
    ;
}

window.addEventListener('load', prepareHeaders);

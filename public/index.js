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

async function fetchAuthConfig() {
    const response = await fetch('/auth-config');
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
}

let auth0 = null;

async function initialiseAuth0Client() {
    const config = await fetchAuthConfig();
    auth0 = await createAuth0Client({
      domain: config.domain,
      client_id: config.clientId,
    });
}

async function initialise() {
    await initialiseAuth0Client();
    console.log('auth0 initialized');
    console.log({ auth0 });
}
  
window.addEventListener('load', initialise);

// reference
// Auth0: Secure access for everyone. But not just anyone.. Auth0. (2013). Retrieved 15 January 2023, from https://auth0.com/.
// GitHub - portsoc/auth0-example. GitHub. (2021). Retrieved 15 January 2023, from https://github.com/portsoc/auth0-example.


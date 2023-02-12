// prepare page when the buttons are pressed
function prepareHeaders() {
  const reminderBtn = document.querySelector('#reminder');
  const article = document.getElementsByTagName('article')[0];
  const template = document.querySelector('#remindTab');
  reminderBtn.addEventListener('click', function () {
    article.innerHTML = template.innerHTML;
    // window.location.href = './reminder.html';
    const removeImg = document.querySelector('#startingPage');
    removeImg.remove();
    })
    const medicationBtn = document.querySelector('#meds');
    medicationBtn.addEventListener('click', function(){
        const template2 = document.querySelector('#medicationTab');
        article.innerHTML = template2.innerHTML;
        const removeImg = document.querySelector('#startingPage');
        removeImg.remove();
    })
    const userActivityBtn = document.querySelector('#UA');
    userActivityBtn.addEventListener('click', function(){
        const template3 = document.querySelector('#UserActivityTab');
        article.innerHTML = template3.innerHTML
        const removeImg = document.querySelector('#startingPage');
        removeImg.remove();
    })
    const settingsBtn = document.querySelector('#settings');
    settingsBtn.addEventListener('click', function(){
        const template4 = document.querySelector('#settingsTab');
        if(template4){
          article.innerHTML = template4.innerHTML
          const removeImg = document.querySelector('#startingPage');
          removeImg.remove();
        }
    });
}

// if(article){
//   const settingsBtn = document.querySelector('#settings');
//   settingsBtn.addEventListener('click', function(){
//       const template4 = document.querySelector('#settingsTab');
//       article.innerHTML = template4.innerHTML
//       const removeImg = document.querySelector('#startingPage');
//       removeImg.remove();
//   })
//   ;
// }

window.addEventListener('load', prepareHeaders);

const searchEngine = document.querySelector('#searchEngine');
const searchSubmit = document.querySelector('#searchSubmit');

// when someone types in reminder and clicks the submit it will take them over to the reminder template page
if(searchSubmit){
searchSubmit.addEventListener('click', function () {
  const search = searchEngine.value;
  if (search === 'reminder') {
    const template = document.querySelector('#remindTab');
    const article = document.getElementsByTagName('article')[0];
    article.innerHTML = template.innerHTML;
    const removeImg = document.querySelector('#startingPage');
    removeImg.remove(); 
  }
});
};

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

async function updateAuthenticatedUI() {
  const isAuthenticated = await auth0.isAuthenticated();
  document.getElementById('login').disabled = isAuthenticated;
  document.getElementById('logout').disabled = !isAuthenticated;
  console.log({ isAuthenticated });
  if (isAuthenticated) {
    const user = await auth0.getUser();
    const getTag = document.querySelector('#greeting');
    getTag.textContent = `Welcome ${user.name}!`;
  }
}

async function login() {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin,
  });
}

function logout() {
  auth0.logout({
    returnTo: window.location.origin,
  });
}

async function handleRedirectCallback() {
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) return;
  const query = window.location.search;
  if (query.includes('state=')) {
    try {
      await auth0.handleRedirectCallback();
    } catch (e) {
      window.alert(e.message || 'Sorry we can not log you in :/ ');
      logout();
    }
    window.history.replaceState({}, document.title, '/');
    await updateAuthenticatedUI();
  }
}

function handleCalls() {
  document.getElementById('login').addEventListener('click', login);
  document.getElementById('logout').addEventListener('click', logout);
}

async function initialise() {
  await initialiseAuth0Client();
  await handleCalls();
  await handleRedirectCallback();
  await updateAuthenticatedUI();
}

window.addEventListener('load', initialise);

// reference
// Auth0: Secure access for everyone. But not just anyone.. Auth0. (2013). Retrieved 15 January 2023, from https://auth0.com/.
// GitHub - portsoc/auth0-example. GitHub. (2021). Retrieved 15 January 2023, from https://github.com/portsoc/auth0-example.

// Dhillon, G. (2022, April 29). Gurvirdhillon/Legoworkstation-CW. GitHub. Retrieved from https://github.com/gurvirdhillon/LegoWorkStation-CW

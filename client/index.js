function prepareHeaders() {
  // all the buttons on the header bar
  const reminderBtn = document.querySelector('#reminder');
  const medicationBtn = document.querySelector('#meds');
  const userActivityBtn = document.querySelector('#UA');
  const chatBtn = document.querySelector('#chatSystem');
  const settingsBtn = document.querySelector('#settings');
  // open the template on click for the reminder button
  const grabPageStart = document.querySelector('#pageStart');
  reminderBtn.addEventListener('click', function () {
    const template = document.querySelector('#remindTab');
    const article = document.getElementsByTagName('article')[0];
    article.innerHTML = template.innerHTML;
    const removeImg = document.querySelector('#startingPage');
    // grabPageStart.remove();
    removeImg.remove();
  });
  // open the template on click for the medication button
  medicationBtn.addEventListener('click', function () {
    const template = document.querySelector('#medTab');
    const article = document.getElementsByTagName('article')[0];
    const removeImg = document.querySelector('#startingPage');
    // if (grabPageStart === null) {
    //   const addForm = document.querySelector('#medForm');
    //   addForm.innerHTML = template.innerHTML;
    //   article.appendChild(addForm);
    // }
    article.innerHTML = template.innerHTML;
    removeImg.remove();
  });
  // open the template on click for the user activity button
  userActivityBtn.addEventListener('click', function () {
    const template = document.querySelector('#user-activity');
    const article = document.getElementsByTagName('article')[0];
    article.innerHTML = template.innerHTML;
    const removeImg = document.querySelector('#startingPage');
    // grabPageStart.remove();
    removeImg.remove();
  });
  // open the template on click for the chat button
  chatBtn.addEventListener('click', function () {
    const template = document.querySelector('#chat');
    const article = document.getElementsByTagName('article')[0];
    article.innerHTML = template.innerHTML;
    const removeImg = document.querySelector('#startingPage');
    // grabPageStart.remove();
    removeImg.remove();
  });
  // open the template on click for the settings button
  settingsBtn.addEventListener('click', function () {
    const template = document.querySelector('#settingsTab');
    const article = document.getElementsByTagName('article')[0];
    article.innerHTML = template.innerHTML;
    const removeImg = document.querySelector('#startingPage');
    removeImg.remove();
  });
}


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

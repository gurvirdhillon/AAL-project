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

function searchBar() {
  const searchInput = document.querySelector('#searchInput');
  const searchSubmit = document.querySelector('#searchSubmit');
  searchSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue = searchInput.value;
    console.log(searchValue);
    if (searchValue === 'medication' || searchValue === 'meds' || searchValue === 'med' || searchValue === 'tablets' || searchValue === 'pills') {
      window.location.href = '/medication'
    } else if (searchValue === 'user activity' || searchValue === 'fitness') {
      window.location.href = '/activity';
    } else if (searchValue === 'chat') {
      window.location.href = '/chat';
    } else if (searchValue === 'settings' || searchValue === 'setting') {
      window.location.href = '/settings';
    } else if (searchValue === 'appearance' || searchValue === 'preferences' || searchValue === 'preference') {
      window.location.href = '/appearance';
    }
  });
}

window.addEventListener('load', searchBar);

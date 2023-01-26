async function generateServiceWorker() {
  try {
    await navigator.serviceWorker.register('/worker.js');
  } catch (e) {
    console.error('Sorry, this service is not available at the moment.', e);
  }
}


async function init() {
  await generateServiceWorker();
  setInterval(1000);
}

window.addEventListener('load', init);

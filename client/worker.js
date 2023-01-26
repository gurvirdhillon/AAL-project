async function fetchFromCache(request) {
  const cache = await caches.open('AAL');
  const data = await cache.match(request);
  if (data) {
    return data;
  } else {
    console.log('Fetching from network', request.url);
    // await cache.add(request);
    return await cache.match(request);
  }
}

function interceptFetch(e) {
  e.respondWith(fetchFromCache(e.request));
}

function getServiceWorker() {
  console.log('Service worker registered');
}

self.addEventListener('fetch', interceptFetch);
self.addEventListener('install', getServiceWorker);

async function fetchFromCache(request) {
  const cache = await caches.open('AAL');
  const res = await cache.match(request);
  if (res) {
    return res;
  } else {
    console.log('Fetching from network', request.url);
    await cache.add(request);
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

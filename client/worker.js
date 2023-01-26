const CACHE = 'AAL';
const filesHandler = [
  '/index.html',
  '/index.js',
  '/index.css',
  '/worker.js',
  '/offline.js',
  '/manifest.json',
  '/img/elderly-technology.png',
];

async function fetchFromCache(request) {
  const cache = await caches.open('cacheName');
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

async function getServiceWorker() {
  try {
    const c = await caches.open(CACHE);
    await c.addAll(filesHandler);
    console.log('Service worker registered');
  } catch (e) {
    console.log('cache failed, sorry ', e);
  }
}

self.addEventListener('install', getServiceWorker);
self.addEventListener('fetch', interceptFetch);

// Kopecky, J., &amp; Boakes, R. (2021, May 27). Portsoc/deadline: A deadline countdown. GitHub. Retrieved from https://github.com/portsoc/deadline

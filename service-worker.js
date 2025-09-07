self.addEventListener('install', event => {
  console.log('Service worker installato');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('dj-pin-v1').then(cache=>cache.addAll([
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-512.png'
  ])));
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request))
  );
});
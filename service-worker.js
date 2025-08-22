
const CACHE = 'dj-pin-v2';
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([
    './',
    './index.html?v2',
    './manifest.webmanifest?v2',
    './icon-512.png'
  ])));
});
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});

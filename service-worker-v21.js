
const CACHE = 'dj-pin-v21';
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([
    './',
    './index.html?v=2.1',
    './manifest.webmanifest?v=2.1',
    './icon-512.png'
  ])));
});
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});

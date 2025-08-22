const CACHE = 'dj-nopin-v3';
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([
    './',
    './index.html?v=v3',
    './manifest.webmanifest?v=v3',
    './icon-512.png'
  ])));
});
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
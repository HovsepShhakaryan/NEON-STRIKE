/* NEON STRIKE offline-first game shell. Does not intercept Firebase/Supabase calls. */
const CACHE_NAME='neon-strike-android-install-v18';
const GAME_FILES=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(GAME_FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('neon-strike-')&&k!==CACHE_NAME).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{
 const request=event.request; if(request.method!=='GET')return;
 const url=new URL(request.url);if(url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){
   event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy)).catch(()=>{})}return response}).catch(()=>caches.match('./index.html')));return;
 }
 if(!GAME_FILES.some(p=>new URL(p,self.registration.scope).pathname===url.pathname))return;
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(request,copy)).catch(()=>{})}return response})));
});

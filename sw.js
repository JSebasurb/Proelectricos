// Service worker: guarda la página para abrirla sin conexión. Sube VERSION al publicar cambios.
const VERSION="proelectricos-v16";
const SHELL=["./","index.html","css/style.css","js/icons.js","js/data.js","js/search.js","js/lens.js","js/asistente.js","js/guia.js","js/fuentes.js","js/lista.js","js/articulos.js","js/app.js","js/smart.js","js/extras.js","js/v10.js","js/posts.js","js/catalogo-ui.js","js/blog.js","js/repuestos.js","js/router.js","assets/logo.svg","assets/icon.svg","assets/icon-192.png","favicon.ico"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET"||new URL(r.url).origin!==location.origin) return;
  if(r.mode==="navigate"){ e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(VERSION).then(k=>k.put(r,c));return x}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html")))); return; }
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>{const c=x.clone();caches.open(VERSION).then(k=>k.put(r,c));return x})));
});

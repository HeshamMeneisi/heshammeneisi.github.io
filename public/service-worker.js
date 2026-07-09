// The site no longer uses a service worker. This stub exists only so that
// browsers which cached the old Create React App worker unregister it and
// purge stale caches instead of continuing to serve the outdated site.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      if (self.caches) {
        const keys = await caches.keys();
        await Promise.all(keys.map(function (k) { return caches.delete(k); }));
      }
      await self.registration.unregister();
      const clients = await self.clients.matchAll();
      clients.forEach(function (c) { c.navigate(c.url); });
    })()
  );
});

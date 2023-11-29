/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "./index.html")
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.

//Gestion de mise a jour
// const CACHE_NAME = "my-pwa-cache-v1";

// self.addEventListener('install', (event) => {
//   console.log("[Service Worker] Install Event processing...");
//   event.waitUntil(
//     caches.open("my-pwa-cache-v1")
//       .then((cache) => {
//         return cache.addAll([
//           '/',
//           './index.html',
//           '/app.js',
//           '/styles.css',
//           '/favicon.ico',
//           '/logo192..png',
//           '/logo192.png',
//           '/logo512..png',
//           '/logo512.png',
//         ]);
//       })
//   );
// });

// self.addEventListener("activate", (event) => {
//   console.log("[ServiceWorker] Activate event processed!");
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== CACHE_NAME) {
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   if (event.request.url.startsWith("https")) {
//     // Do not attempt to cache Chrome extension resources
//     return;
//   }
//   if (event.request.url.startsWith("http")) {
//     // Do not attempt to cache Chrome extension resources
//     return;
//   }

//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       if (cachedResponse) {
//         return cachedResponse;
//       }
//       // Fetch and cache non-extension resources
//       return fetch(event.request)
//         .then((response) => {
         
//             return caches.open(CACHE_NAME).then((cache) => {
//               cache.put(event.request, response.clone());
//               return response;
//             });
          
//         })
//         .catch(() => {
//           // Handle fetch failure
//         });
//     })
//   );
// });

// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     // Forcer le service worker à s'activer immédiatement pour prendre en charge la nouvelle version.
//     self.skipWaiting();
//   }
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     (async function () {
//       try {
//         return await fetch(event.request);
//       } catch (err) {
//         return caches.match(event.request);
//       }
//     })()
//   );
// }); 


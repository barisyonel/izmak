const CACHE_NAME = 'izmak-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.png',
  '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return Promise.allSettled(
          urlsToCache.map(url => 
            cache.add(url).catch(err => {
              console.log(`Failed to cache ${url}:`, err);
              return null;
            })
          )
        );
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  // Skip API requests and let them go directly to network
  if (event.request.url.includes('/api/')) {
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Only cache static assets, not API responses
            if (event.request.destination === 'document' || 
                event.request.destination === 'script' || 
                event.request.destination === 'style' ||
                event.request.destination === 'image') {
              // Clone the response
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            
            return response;
          })
          .catch(error => {
            console.log('Fetch failed:', error);
            // If both cache and network fail, return a fallback
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
            // Return a proper error response
            return new Response('Network error', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
      .catch(error => {
        console.log('Cache match failed:', error);
        // Return a proper error response
        return new Response('Cache error', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 
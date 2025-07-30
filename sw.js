// Service Worker for Wedding Website
// This enables caching for better performance and offline functionality

const CACHE_NAME = 'wedding-site-v1';
const STATIC_CACHE_URLS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching static assets');
                return cache.addAll(STATIC_CACHE_URLS);
            })
            .catch((error) => {
                console.log('Service Worker: Caching failed', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached version if available
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                // Otherwise, fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response for caching
                        const responseToCache = response.clone();

                        // Cache images and other assets
                        if (event.request.destination === 'image' || 
                            event.request.url.includes('.jpg') || 
                            event.request.url.includes('.jpeg') || 
                            event.request.url.includes('.png') || 
                            event.request.url.includes('.webp')) {
                            
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });
                        }

                        return response;
                    })
                    .catch(() => {
                        // Return a fallback for images if offline
                        if (event.request.destination === 'image') {
                            return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f0f0f0"/><text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="14" fill="#666">Image not available offline</text></svg>', {
                                headers: { 'Content-Type': 'image/svg+xml' }
                            });
                        }
                        
                        // Return a fallback HTML page for navigation
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
    if (event.tag === 'rsvp-submit') {
        event.waitUntil(
            // Handle offline form submissions when back online
            handleOfflineFormSubmissions()
        );
    }
});

// Handle offline form submissions
async function handleOfflineFormSubmissions() {
    try {
        const formData = await getStoredFormData();
        if (formData) {
            // Send stored form data to server
            const response = await fetch('/submit-rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Clear stored data after successful submission
                await clearStoredFormData();
                console.log('Offline form data submitted successfully');
            }
        }
    } catch (error) {
        console.error('Failed to submit offline form data:', error);
    }
}

// Helper functions for offline form storage
async function getStoredFormData() {
    const cache = await caches.open('form-data');
    const response = await cache.match('/offline-form-data');
    if (response) {
        return await response.json();
    }
    return null;
}

async function clearStoredFormData() {
    const cache = await caches.open('form-data');
    await cache.delete('/offline-form-data');
}

// Push notification handling (for future enhancements)
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/images/wedding-icon.png',
            badge: '/images/wedding-badge.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: data.primaryKey
            },
            actions: [
                {
                    action: 'explore',
                    title: 'View Website',
                    icon: '/images/checkmark.png'
                },
                {
                    action: 'close',
                    title: 'Close',
                    icon: '/images/xmark.png'
                }
            ]
        };

        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

console.log('Service Worker: Registered successfully');

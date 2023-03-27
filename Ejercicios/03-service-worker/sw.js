self.addEventListener('install', event => {
    // Download necessary Assets and Create Cache
    console.log('Installing ServiceWorker...');

    const install = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('Install ending');
            self.skipWaiting()
            res()
        }, 1);
    })
    event.waitUntil(install)
})

self.addEventListener('activate', event => {
    // Delete old cache
    console.log('Activating ServiceWorker'); 
})

self.addEventListener('fetch', event => {
    // Cache strategies are applied here
    console.log(event.request.url);        
    // if (event.request.url.includes('https://reqres.in/')) event.respondWith(new Response(`{ok: false, mensaje: Hahahaha :v/}`))

})

self.addEventListener('sync', event => {
    // Execute tasks when we recover the Internet connection
    console.log('We have connection');
    console.log(event.tag);
})

self.addEventListener('push', event => {
    // Push notification management for users,
    // They can be global or under certain criteria according to
    // users or data of the same
    console.log('Notification received');
})
self.addEventListener('fetch', event => {

    const offlineResp = fetch('pages/offline.html')
    const resp = fetch(event.request)
        .catch(() => offlineResp)
    event.respondWith(resp)
})

if ('serviceWorker' in navigator)
    console.log('Porting service worker');

if (navigator.serviceWorker)
    navigator.serviceWorker.register('/sw.js')
    // console.log('Service worker');

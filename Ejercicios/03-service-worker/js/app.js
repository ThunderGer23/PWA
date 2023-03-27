// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker )
    navigator.serviceWorker.register('/sw.js').then( reg => {
        setTimeout(() => { reg.sync.register('post-kittens')
            console.log('Photos of kittens to server are sent');
        }, 3000)
            Notification.requestPermission().then(res => reg.showNotification('Yolo :v'))
    })

// fetch('https://reqres.in/api/users')
//     .then( resp => resp.text())
//     .then(console.log)
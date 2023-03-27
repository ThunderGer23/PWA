self.addEventListener('fetch', event => {
    
    // Podemos validar la carga de distintos archivos mediante el event
    // Más o menos como se muestra a continuación
    // if (event.request.url.includes('.jpg')){
    //     console.log(event.request.url)

    //     // let PhoReq = fetch('img/main.jpg')
    //     // let PhoReq = fetch(event.request.url)
    //     let PhoReq = fetch(event.request)
    //     event.respondWith(PhoReq)
    // }

    // if (event.request.url.includes('style.css')) {
    //     let resp = new Response(`
    //         body{
    //             background-color: red !important;
    //             color: pink;
    //         }
    //     `, {
    //         headers: {
    //             'Content-Type': 'text/css'
    //         }
    //     })
    //     event.respondWith(resp)
    // }
    if (event.request.url.includes('.jpg')) event.respondWith(fetch('img/main-patas-arriba.jpg'))
})

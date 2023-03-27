console.log('Hola mundo')

let sumOne = (num, callback) => {
    setTimeout(() => {
        callback(num + 1)
    }, 800)
}

sumOne(6, (newValue) => {
    sumOne(newValue, (newValue2) => {
        console.log(newValue2)
    })
})
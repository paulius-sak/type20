// Promises: Užduotys


// 5 sec
// LENGVAS
 

// Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Resolve – iššoka alert yes, it works! Pažado aprašyme panaudoti setTimeOut.





// Tikimybė
// VIDUTINIS

// Papildykite pirmąjį pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

const myPromise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 5) + 1
    
    setTimeout(() => {
        if(random === 1) {
            reject()
        } else {
            resolve()
        }
    }, 5000)
})


myPromise
.then(() => "this is a message")
.then((message) => alert(message))
.catch(() => alert('promise rejected!'))








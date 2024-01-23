// 1. Susikurti kreipimasi į funkcija su Vardu, Slaptažodžiu.
// 2. Iškvietus funkciją po 3sek mes gauname Promisą (resolvinta arba rejectinta).


const login = (userName, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userName && password) {
                return resolve("Prisijungimas sekmingas")
            } else {
                return reject("Prisijungti nepavyko")
            }
        }, 3000)
    })
}
const task4 = document.createElement('div')
task4.id = "message"
document.body.appendChild(task4)
const loginOutcome = (outcome, color) => {
    const loginElement = document.getElementById("message")
    loginElement.textContent = outcome
    loginElement.style.color = color
}


login("Tadas", "12345678")
.then((res) => {
    loginOutcome(res, "green")
    console.log(res)
})
.catch((err) => {
    loginOutcome(err, "red")
    console.log(err)
})


// 3. Jeigu siunčiamas vardas yra "Tadas" ir slaptazodis "12345678" tuomet resolve grazina, kad jus prisijungete sekmingai, kitu atveju gražiname reject su žinute, kad prisijungimas nepavyko.
 
// // naudoti DOM komandas
// 4. Žinutė turi but išvedama i ekraną, sėkminga žinutė - žalia spalva, nesėkminga - raudona.



// 5. Prisijungus sekmingai - į consolej atvaizduojam grazinta response.
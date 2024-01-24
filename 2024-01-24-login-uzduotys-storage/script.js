// 1. Sukurti localstorage info (userId);
localStorage.setItem("userId", '123456')

// 2. Atvaizduot concolėj informaciją iš localsorage;
console.log(localStorage.getItem("userId"))
// 3. Parašyt scriptą kuris ištrina informaciją iš userId localstorage;

localStorage.removeItem("userId")

// 4. Sukurt customerId cookie.
document.cookie = "customerId=1111"

// 5. Atvaizduot ekrane customer cookie;

console.log(document.cookie)

// 6. Sukurt product objektą su keliais properties. Objektą įdėt į loclastorage;
const productObj = [
    {
    name: "bananas",
    kaina: '1.00',
    'galioja iki' : '2024-01-25',
}
]

localStorage.setItem("productObj", JSON.stringify(productObj))


// 7. Objektą išsitraukt iš localstorage bei jį atvaizduot (objekto pavidalu);
const productObj1 = localStorage.getItem('productObj')
console.log(JSON.parse(productObj1))

// 8. Sukurti formą su 2 inputais (username, password) bei buttoną;

// 9. Paspaudus button reikia consolėj atspauzdinti tiek username tiek password;

// 10. Padaryt validaciją, jei nėra nurodyta username ar password consolėj turi atsirast ne duomenis, o informacinė žinutė prašanti įvesti duomenis;

const button = document.getElementById('buttonLogin')
button.addEventListener('click', () => {
    
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value

    const errorMessage = document.getElementById('errorMessage')
    const successMessage = document.getElementById('successMessage')


    if (userName && password && userName.length >= 3 ) {
        localStorage.setItem("userName", userName)
        errorMessage.textContent = ''
        successMessage.textContent = 'Success!'
    } else {
        successMessage.textContent = ''
        errorMessage.textContent = 'Invalid data!'
    }
    
    
})



// 11. Sėkmės atveju į ekraną išvesti žalią tekstą su sekmės žinute, neturint duomenų - raudoną tekstą su informacine žinute;
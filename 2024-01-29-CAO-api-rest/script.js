const image = document.getElementById("image")
const name = document.getElementById("name")
const surname = document.getElementById("surname")
const age = document.getElementById("age")
const email = document.getElementById("email")

fetch("https://randomuser.me/api/")

.then((response) => {
    return response.json()
})
.then((secondResponse) => {
    console.log(secondResponse.results[0])
    
    image.src = secondResponse.results[0].picture.large
    name.innerText = secondResponse.results[0].name.first
    surname.innerText = secondResponse.results[0].name.last
    age.innerText = secondResponse.results[0].dob.age
    email.innerText = secondResponse.results[0].email

})
.catch((error) => {
    console.log(error)
})
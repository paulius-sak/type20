let word = "telefonas"
let englishWord = "phone"
let lives = 3

const wordToGuess = document.getElementById("wordToGuess")
const wordInput = document.getElementById("wordInput")
const wordInputForm = document.getElementById("wordInputForm")
const button = document.getElementById("submit-btn")
const message = document.getElementById("message")
const livesLeft = document.getElementById("lives-left")


wordToGuess.innerText = word

livesLeft.innerText =`Gyvybės: ${lives}`

wordInputForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if(wordInput.value.toLowerCase() === englishWord) {
        message.innerText = "Teisingai!"
        message.style.color = "green"
    } else {
        lives--
        livesLeft.innerText =`Gyvybės: ${lives}`
        message.innerText = "Neteisingai, bandyk dar kartą."
        message.style.color = "red"
    } if(lives <=0) {
        message.innerText = `Pralaimėjai. Teisingas zodis: ${englishWord}`
        message.style.color = "red"
    }

    wordInput.value = ""
})
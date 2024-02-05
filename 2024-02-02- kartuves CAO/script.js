const word = "OBUOLYS";

let lives = 6;

let guessedLettersList = []

const form = document.getElementById('guessForm')
const letterInput = document.getElementById('letterInput')
const wordToGuess = document.getElementById('wordToGuess')
const result = document.getElementById('result')
const guessedLetters = document.getElementById('guessedLetters')
const guessesLeftElement = document.getElementById('guessesLeft')
const button = document.getElementById('submitButton')

const letters = word.split("").map((letter) => {

  return { letter: letter, isRevealed: false };
});


function updateDisplayedWord() {
    let displayedWord = "";
    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i]
      const isGuessed = letters.find((letter) => letter.letter === currentLetter && letter.isRevealed)
      displayedWord += isGuessed ? currentLetter : "_"
    }
    wordToGuess.textContent = displayedWord;
    guessedLetters.textContent = guessedLettersList.join(', ')
    guessesLeftElement.textContent = lives;
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const guessedLetter = letterInput.value.toUpperCase();
  
    const foundIndex = letters.findIndex((letter) => !letter.isRevealed && letter.letter === guessedLetter);
  
    if (foundIndex !== -1) {
      letters[foundIndex].isRevealed = true;
      updateDisplayedWord();

      const displayedWord = wordToGuess.textContent.split(' ').join('')
      if (displayedWord === word) {
        result.textContent = "You won!";
        result.style.color = "green";
        letterInput.disabled = true; 
      } else {
        result.textContent = "Correct";
        result.style.color = "green";
      }
  } else {
    lives--
    guessedLettersList.push(guessedLetter)

    if (lives <= 0) {
        updateDisplayedWord()
        result.textContent = `Game Over. Correct Word was ${word}`
        result.style.color = "red"
    } else {
        updateDisplayedWord()
        result.textContent = "incorrect"
        result.style.color = "red"
    }
  }

  console.log("Word:", word);
  console.log("Letters:", letters);
  console.log("Guessed Letters List:", guessedLettersList);
  console.log("Lives:", lives);
  console.log("Is Disabled:", letterInput.disabled);
  console.log("Result Text:", result.textContent);

  letterInput.value = ""
});
updateDisplayedWord()
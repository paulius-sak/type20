let charactersSorted
const wrapper = document.getElementById("wrapper")





const fetchRickMorty = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")

    const characters = await response.json()
    console.log(characters.results)

    charactersSorted = [...characters.results].sort((a, b) => a.name > b.name ? 1: -1).slice(0, 10)
    console.log(charactersSorted)


    charactersSorted.forEach((character) => {

        const card = document.createElement("div")
        card.classList.add("card")

        

        const charName = document.createElement("h1")
        charName.classList.add("charName")
        charName.innerText = character.name
        
        const image = document.createElement("img")
        image.classList.add("image")
        image.src = character.image
    
        const species = document.createElement("h3")
        species.classList.add("species")
        species.innerText = `Species: ${character.species}`

        const origin = document.createElement("h4")
        origin.classList.add("origin")
  
        const isOriginUnknown = character.origin.name === "unknown" ? "-" : character.origin.name;
        origin.innerText =  `Origin: ${isOriginUnknown}`;


        card.append(charName)
        card.append(image)
        card.append(species)
        card.append(origin)
        wrapper.append(card)

    })
    wrapper.addEventListener("click", (event) => {
        const cardElement = event.target.closest(".card")
        if (cardElement) {
            const charNameElement = cardElement.querySelector(".charName")
            if (charNameElement) {
                const characterName = charNameElement.innerText
    
                const character = charactersSorted.find((char) => char.name === characterName)
                if (character) {
                    localStorage.setItem("selectedCharacter", JSON.stringify(character))
                    console.log(`Character: ${characterName}`)
                }
            }
        }
    })
    
}

fetchRickMorty()
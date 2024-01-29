const title = document.getElementById("title")
const instructions = document.getElementById("instructions")
const image = document.getElementById("image")
const alcoholIndicator = document.getElementById("alcohol-indicator")
const clickEvent = document.getElementById("wrapper")

clickEvent.addEventListener("click", () => {
    console.log(title.innerText)
})
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then((response) => {
    return response.json()
})
.then((secondResponse) => {
    console.log(secondResponse.drinks[0])
    
    title.innerText = secondResponse.drinks[0].strDrink
    
    instructions.innerText = secondResponse.drinks[0].strInstructions

    image.src = secondResponse.drinks[0].strDrinkThumb

    const isAlcoholic = secondResponse.drinks[0].strAlcoholic === "Alcoholic" ? true : false

    const indicatorStyle = isAlcoholic ? "alcoholic" : "non-alcoholic"
    alcoholIndicator.classList.add(indicatorStyle)

})
.catch((error) => {
    alert("error", error)
})


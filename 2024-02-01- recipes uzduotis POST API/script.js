const wrapper = document.getElementById("wrapper")

const fetchAnimals = async () => {
    const response = await fetch("https://65bb5cf452189914b5bbdaa2.mockapi.io/recipes")

    const recipes = await response.json()
    console.log(recipes)

    recipes.forEach((recipe) => {
        const card = document.createElement("a")
        card.href = "./recipe/recipe.html"

        card.addEventListener("click", () => {
            localStorage.setItem("recipeId", recipe.id)
        })

        card.setAttribute("class", "card")
        const title = document.createElement("h1")
        const description = document.createElement("p")
        const instructions = document.createElement("p")
        const ingredients = document.createElement("p")
        const recipeImg = document.createElement("img")

        title.innerText = recipe.title
        description.innerText = recipe.description
        instructions.innerText = recipe.instructions
        ingredients.innerText =`Reikes: ${recipe.ingredients}`
        recipeImg.src = recipe.recipeImg


        card.append(title)
        card.append(description)
        card.append(instructions)
        card.append(ingredients)
        card.append(recipeImg)

        wrapper.append(card)
    })
}

fetchAnimals()
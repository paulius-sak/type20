const recipeId = localStorage.getItem("recipeId")

const title = document.getElementById("title")
const description = document.getElementById("description")
const instructions = document.getElementById("instructions")
const ingredients = document.getElementById("ingredients")
const img = document.getElementById("img")
const deleteRecipeButton = document.getElementById("delete-recipe-btn")
const message = document.getElementById("message")

const fetchRecipe = async () => {
const response = await fetch(`https://65bb5cf452189914b5bbdaa2.mockapi.io/recipes/${recipeId}`)


const recipe = await response.json()

console.log(recipe)

title.innerText = recipe.title
description.innerText = recipe.description
instructions.innerText = recipe.instructions
ingredients.innerText = recipe.ingredients

img.src = recipe.recipeImg
}

fetchRecipe()

deleteRecipeButton.addEventListener("click", async () => {
        const response = await fetch(`https://65bb5cf452189914b5bbdaa2.mockapi.io/recipes/${recipeId}`, 
        {
            method: "DELETE",
        }
    )

    const recipe = await response.json()

    message.innerHTML = "Recipe was deleted successfully";

    setTimeout(() => {
      window.location.assign("../index.html");
    }, 1000);
})
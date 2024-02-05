const button = document.getElementById("btn")

const message = document.getElementById("message")
message.setAttribute("class", "message")

const title = document.getElementById("title")
const description = document.getElementById("description")
const instructions = document.getElementById("instructions")
const ingredients = document.getElementById("ingredients")
const recipeImg = document.getElementById("recipeImg")

button.addEventListener("click", async () => {
  if(!title.value || !description.value || !instructions.value || !ingredients.value || !recipeImg.value) {
    return
  }
    const recipeData = {
        title: title.value,
        description: description.value,
        instructions: instructions.value,
        ingredients: ingredients.value,
        recipeImg: recipeImg.value,
    }
    console.log(recipeData)


    const response = await fetch("https://65bb5cf452189914b5bbdaa2.mockapi.io/recipes", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
    }
    )

    const addedRecipe = await response.json()

    message.innerHTML = "Recipe was added successfully";

    setTimeout(() => {
      window.location.assign("./index.html");
    }, 3000);
  

})
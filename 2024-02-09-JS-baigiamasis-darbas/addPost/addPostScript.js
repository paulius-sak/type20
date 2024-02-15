const addPostButton = document.getElementById("addPostButton")

const statusMessage = document.getElementById("statusMessage")

const newPostImage = document.getElementById("postImg")
const newPostTitle = document.getElementById("postTitle")
const newPostPrice = document.getElementById("postPrice")
const newPostDescription = document.getElementById("postDescription")
const newPostCity = document.getElementById("postCity")

const burgerButton = document.getElementById("burger-btn")
const mobileMenu = document.getElementById("mobile-menu")

addPostButton.addEventListener("click", async (event) => {
    event.preventDefault()
    if (
        !newPostImage.value ||
        !newPostTitle.value ||
        !newPostPrice.value ||
        isNaN(newPostPrice.value) || 
        parseFloat(newPostPrice.value) <= 0 ||
        !newPostDescription.value ||
        !newPostCity.value
    ) {
        statusMessage.innerText = "Užpildykite Visus Laukelius Teisingai."
        statusMessage.style.color = 'red';
        return;
    }
      const postData = {
          postUrl: newPostImage.value,
          title: newPostTitle.value,
          price: newPostPrice.value,
          description: newPostDescription.value,
          location: newPostCity.value,
      }
      console.log(postData)
  
  
      const response = await fetch("https://65c603d9e5b94dfca2e0c57d.mockapi.io/posts", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
      }
      )
  
      const addedPost = await response.json()
      console.log(addedPost)
      statusMessage.innerText = "Skelbimas Patalpintas Sėkmingai.";


      setTimeout(() => {
        window.location.assign("../index.html")
      }, 5000)
  
})

burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
})


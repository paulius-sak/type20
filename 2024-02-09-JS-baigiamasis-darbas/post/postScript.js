const postId = localStorage.getItem("postId")

const postImg = document.getElementById("img")
const postTitle = document.getElementById("post-title")
const postPrice = document.getElementById("post-price")
const postDescription = document.getElementById("description")
const postLocation = document.getElementById("location")
const postDeleteButton = document.getElementById("delete-post-btn")
const postMessage = document.getElementById("message")


const burgerButton = document.getElementById("burger-btn")
const mobileMenu = document.getElementById("mobile-menu")

const fetchPost = async () => {
    const response = await fetch(`https://65c603d9e5b94dfca2e0c57d.mockapi.io/posts/${postId}`)
    
    const post = await response.json()
    
    console.log(post)
    
    postImg.src = post.postUrl
    postTitle.innerText = post.title
    postPrice.innerText = `${post.price} €`
    postDescription.innerText = post.description
    postLocation.innerText = `🚩 ${post.location}`
    }
    
fetchPost()

postDeleteButton.addEventListener("click", async () => {
    const response = await fetch(`https://65c603d9e5b94dfca2e0c57d.mockapi.io/posts/${postId}`, 
    {
        method: "DELETE",
    })

    const post = await response.json()

    postMessage.innerText = "Skelbimas Ištrintas"

     setTimeout(() => {
      window.location.assign("../index.html")
    }, 5000)
  
})

burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
})
const wrapper = document.getElementById("posts-wrapper")

const burgerButton = document.getElementById("burger-btn")
const mobileMenu = document.getElementById("mobile-menu")

const fetchPosts = async () => {
    const response = await fetch("https://65c603d9e5b94dfca2e0c57d.mockapi.io/posts")

    const posts = await response.json()
    console.log(posts)

    const postsSorted = posts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))

    postsSorted.forEach((post) => {
        const card = document.createElement("a")
        card.href = "./post/post.html"

        card.addEventListener("click", () => {
            localStorage.setItem("postId", post.id)
        })

        card.setAttribute("class", "card")
        const postImg = document.createElement("img")
        postImg.setAttribute("class", "post-img")
        const title = document.createElement("h4")
        title.setAttribute("class", "card-title")
        const price = document.createElement("p")
        price.setAttribute("class", "price")
        const contentBlock = document.createElement("div")
        contentBlock.setAttribute("class", "contentBlock")

        postImg.src = post.postUrl
        title.innerText = post.title
        price.innerText = `${post.price} €`
    

        card.append(postImg)
        card.append(contentBlock)
        contentBlock.append(title, price)
        wrapper.append(card)
    })
}

fetchPosts()

burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
})
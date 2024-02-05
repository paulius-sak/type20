const button = document.getElementById("btn")

const message = document.getElementById("message")
message.setAttribute("class", "message")

const image = document.getElementById("productImg")
const title = document.getElementById("title")
const price = document.getElementById("price")


button.addEventListener("click", async () => {
  if(!image.value || !title.value || !price.value) {
    return
  }
    const productData = {
        price: price.value,
        image: image.value,
        title: title.value,
    }
    console.log(productData)


    const response = await fetch("https://sophisticated-humane-dandelion.glitch.me", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    }
    )

    const addedProduct = await response.json()
    console.log(addedProduct)
    message.innerHTML = "Product was added successfully";

    // setTimeout(() => {
    //   window.location.assign("./index.html");
    // }, 3000);
  

})
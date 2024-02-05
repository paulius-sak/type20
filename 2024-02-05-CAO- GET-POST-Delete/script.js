const wrapper = document.getElementById("wrapper");

const fetchProducts = async () => {
    const response = await fetch("https://sophisticated-humane-dandelion.glitch.me");

    const products = await response.json();
    console.log(products);

    products.forEach((product) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const productImg = document.createElement("img");
        const title = document.createElement("h4");
        const price = document.createElement("h2");
        const deleteButton = document.createElement("button");

        title.innerText = product.title;
        price.innerText = `${product.price} €`;
        price.style.color = "red";
        productImg.src = product.image;
        deleteButton.innerText = "delete";

        card.append(productImg);
        card.append(title);
        card.append(price);
        card.append(deleteButton);

        wrapper.append(card);

        deleteButton.addEventListener("click", async () => {
            try {
                const deleteResponse = await fetch(`https://sophisticated-humane-dandelion.glitch.me/${product.id}`, {
                    method: "DELETE",
                });

                if (deleteResponse.ok) {
                    // Remove the card from the DOM after successful deletion
                    card.remove();
                } else {
                    console.error("Failed to delete product");
                }
            } catch (error) {
                console.error("Error during delete request:", error);
            }
        });
    });
};

fetchProducts();
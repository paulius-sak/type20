


const fetchCoins = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets?limit=20")

    const coins = await response.json()
    console.log(coins.data)

    const sortedCoins = coins.data.sort((a, b) => a.id.localeCompare(b.id))

    sortedCoins.forEach((coin) => {
        const card = document.createElement("div")
        card.classList.add("card", parseFloat(coin.priceUsd) > 100 ? "card-golden" : "card-silver" )
        

        const title = document.createElement("h1")
        title.innerText = coin.id

        const price = document.createElement("h3")
        price.innerText = `${coin.priceUsd} USD`
        

        card.append(title)
        card.append(price)
        document.body.appendChild(card)

        card.addEventListener("click", () => {
            console.log(coin.id)
        })

    });


}

fetchCoins()

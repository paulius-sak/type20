const addCar = (element) => {
    const carBrands = ["BMW", "VW", "AUDI", "MB"]
    const carListItems = carBrands.map((brand) => `<li>${brand}</li>`)
    const carListHtml = `<ul>${carListItems.join("")}</ul>`
    element.innerHTML += carListHtml
}



export {addCar}
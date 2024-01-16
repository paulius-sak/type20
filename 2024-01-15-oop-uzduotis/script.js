// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPrice priklausomai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.
// 3. Pridėti funkciją 'getDiscount', kuri, kaip argumentą, priima nuolaidos dydį ir grąžina kainą su nuolaida.
// 4. Pridėti property 'mileage' ir papildyti automobilių objektus pridedant jų ridą.
// 5. Pakoreguoti kainų funkcijas:
//        5.1. Jeigu rida daugiau nei 0, tai kaina sumažėja 10%.
//        5.2. Jeigu rida daugiau nei 20000, tai kaina sumažėja 15%.
//        5.3. Jeigu rida daugiau nei 50000, tai kaina sumažėja 20%.
//        5.4. Jeigu rida daugiau nei 100000, tai kaina sumažėja 30%.
//        5.5. Jeigu rida daugiau nei 400000, tai kaina sumažėja 50%.

// 6. Pridėti property 'baseColors'. Tai bus masyvas su bazinėmis spalvomis (juoda, raudona, mėlyna, sidabrinė, balta, 'special blue'). Jų pakeisti negalima, nes yra sukuriamos tiesiogiai klasės constructor funkcijoje.
//        6.1. Pridėti property 'color', kuria galima papildyti kuriant automobilio objektą pagal klasę. Jeigu kuriant objektą, spalva nėra nurodoma, tai pagal nutylėjimą ji bus juoda.
//        6.2. Jeigu nurodyta spalva yra 'special blue', tai automobilio kaina turi padidėti 500.
//        6.3. Jeigu nurodytos spalvos nėra tarp bazinių spalvų, tai automobilio kaina turėtų padidėti 3000.

class Cars {
  constructor(brand, model, engine, basePrice, mileage, color = 'juoda') {
    this.brand = brand
    this.model = model
    this.engine = engine
    this.basePrice = basePrice
    this.mileage = mileage
    this.baseColors = ['juoda', 'raudona', 'mėlyna', 'sidabrinė', 'balta', 'special blue']
    this.color = color
    // this.finalPrice = basePrice
  }
  getPriceText() {
    return `Final price for ${this.brand} ${this.model} with ${this.engine} engine ${this.mileage} mileage and color ${this.color} is: ${this.getPrice()}`
  }
  turnOn() {
    alert('vroom!')
  }
  getPrice() {
    let finalPrice = this.basePrice
    switch (this.engine.toLowerCase()) {
        case 'electric':
            finalPrice += 10000
            break;
        case 'diesel':
            finalPrice += 5000
            break;
    }

    if(this.mileage > 0) {
      finalPrice *= 0.9
    }

    if(this.mileage > 20000) {
      finalPrice *= 0.85
    }

    if(this.mileage > 50000) {
      finalPrice *= 0.8
    }

    if(this.mileage > 100000) {
      finalPrice *= 0.7
    }

    if(this.mileage > 400000) {
      finalPrice *= 0.5
    }

    if(this.color.toLowerCase() === 'special blue') {
      finalPrice += 500
    }

    if(!this.baseColors.includes(this.color.toLowerCase())) {
      finalPrice += 3000
    }

    // console.log(`Final price for ${this.brand} ${this.model} with ${this.engine} engine ${this.mileage} mileage and color ${this.color} is: ${finalPrice}`)
    return finalPrice
  }
  getDiscount(discount) {
    let discountAmount = this.getPrice() * discount
    let discountedPrice = this.getPrice() - discountAmount

    return discountedPrice
  }
} 

const car1 = new Cars('VW', 'Golf', 'electric', 2000, 100000, 'mėlyna')
const car2 = new Cars('Audi', 'A6', 'diesel', 5000, 400000, 'special blue')
console.log(car1)
// car1.turnOn()
console.log(car2)
car1.getPriceText()
// car2.getPrice()
// console.log(car2.getDiscount(0))
console.log(car1.getPriceText())
console.log(car1.getDiscount(0))


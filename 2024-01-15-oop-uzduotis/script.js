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
  constructor(brand, model, engine, basePrice, mileage) {
    this.brand = brand
    this.model = model
    this.engine = engine
    this.basePrice = basePrice
    this.mileage = mileage
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
    console.log(`Final price for ${this.brand} ${this.model} with ${this.engine} engine is: ${finalPrice}`)
    return finalPrice
  }
  getDiscount(discount) {
    let discountAmount = this.getPrice() * discount
    let discountedPrice = this.getPrice() - discountAmount

    return discountedPrice
  }
} 

const car1 = new Cars('VW', 'Golf', 'electric', 2000, 100000)
const car2 = new Cars('Audi', 'A6', 'diesel', 5000, 400000)
console.log(car1)
// car1.turnOn()
console.log(car2)
car1.getPrice()
car2.getPrice()
console.log(car1.getDiscount(0.1))
console.log(car2.getDiscount(0.1))


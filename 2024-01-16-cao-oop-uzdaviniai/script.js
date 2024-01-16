// Automobilis
// LENGVAS
 

// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą turnOn – kuris alert’ins vrooom. Sukurkite du objektus ir patikrinkite ar veikia tesingai 🚗. 


// Automobilio kaina
// VIDUTINIS
 

// Pakoreguokite šį car konstruktorių.

// Pridėkite papildomą property basePrice ir metodą getPrice. 

// basePrice propertį įsirašys sukuriant objektą, tačiau getPrice, priklausomai nuo variklio, išmes kokia yra galutinė kaina. 

// Jei variklis electric – kaina bus +10,000

// Jei diesel +5,000

// Jei petrol – kaina tokia kokia ir basePrice

// class Car{
//     constructor(brand, model, engine, basePrice) {
//         this.brand = brand
//         this.model = model
//         this.engine = engine
//         this.basePrice = basePrice
//     }
//     turnOn() {
//         alert('vrooom')
//     }
//     getPrice() {
//         let finalPrice = this.basePrice
//         switch (this.engine.toLowerCase()) {
//             case 'electric':
//                 finalPrice += 10000
//                 break;
//             case 'diesel':
//                 finalPrice += 5000
//                 break;
//         }
//         return finalPrice
//     }
// }

// const car1 = new Car('VW', 'Golf', 'electric', 2000)
// const car2 = new Car('BMW', 'X3', 'petrol', 10000)
// const car3 = new Car('BMW', 'X3', 'diesel', 10000)

// // car1.turnOn()
// console.log(car1)
// console.log(car2)
// console.log(car1.getPrice())
// console.log(car2.getPrice())
// console.log(car3.getPrice())









// Banko sąskaitos klasė
// VIDUTINIS
 

// Sukurkite klasę BankAccount, kuri turi savybes ownerName ir balance. Klasė taip pat turėtų turėti metodus deposit(amount) ir withdraw(amount), kurie atitinkamai didina arba mažina balance.

// class BankAccount{
//     constructor(ownerName, balance = 0) {
//         this.ownerName = ownerName
//         this.balance = balance
//     }
//     deposit(amount) {
//         this.balance += amount
        
//     }

//     withdraw(amount) {
//         this.balance -= amount
//     }
// }

// const account = new BankAccount("Paulius");
// account.deposit(100);
// account.deposit(100);
// account.withdraw(30);
// account.withdraw(30);
// console.log(account.balance);





// Transporto priemonių paveldėjimas
// SUDĖTINGAS
 

// Sukurkite bazinę klasę Vehicle su savybėmis brand ir model. Taip pat sukurkite išvestines klases Car ir Bicycle. Car turi papildomą savybę engineType, o Bicycle - hasEngine. Kiekviena klasė turėtų turėti metodą information, kuris atspausdina visą turimą informaciją apie transporto priemonę.

// class Vehicle{
//     constructor(brand, model) {
//         this.brand = brand
//         this.model = model
//     }
//     information() {
//         return `Brand: ${this.brand}, Model: ${this.model}`
//     }

// }

// class Car extends Vehicle {
//     constructor(brand, model, engineType) {
//         super(brand, model)
//         this.engineType = engineType
//     }
//     information() {
//         return `${super.information()}, Engine Type: ${this.engineType}`
//     }
// }

// class Bycicle extends Vehicle {
//     constructor(brand, model, hasEngine) {
//         super(brand, model)
//         this.hasEngine = hasEngine
//     }
//     information() {
//         return `${super.information()}, Has engine: ${this.hasEngine}`
//     }
// }

// const car = new Car("Toyota", "Corolla", "Petrol");
// console.log(car.information()); // "Brand: Toyota, Model: Corolla, Engine Type: Petrol"

// const bicycle = new Bycicle("Trek", "Marlin", true);
// console.log(bicycle.information()); // "Brand: Trek, Model: Marlin, Has Engine: true"
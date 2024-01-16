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







// Knygos klasė
// LENGVAS

// Sukurkite Book klasę su savybėmis title, author ir year. Pridėkite metodą getSummary(), kuris grąžina santrauką apie knygą.

// Inicializacijos ir naudojimo pavyzdys:


// class Book{
//     constructor(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//     }

//     getSummary() {
//         return `${this.title} by ${this.author} published in ${this.year}`
//     }
// }

// const book1 = new Book("Hobbit", "J.R.R.Tolkien", "1986");
// console.log(book1.getSummary()); // Hobbit by J.R.R.Tolkien published in 1986






// Muzikos studentas
// LENGVAS

// Sukurkite klasę MusicStudent, kuri saugo informaciją apie muzikos mokyklos studentus. Studentas turi name (vardas), instrument (muzikos instrumentas, kurį jis mokosi groti) ir level (lygis, pvz., pradedantysis, pažengęs). Pridėkite metodą practice, kuris didina studento lygį. Pagal nutylėjimas studento lygis turėtų būti "beginner".


// class MusicStudent{
//     constructor(name, instrument, level = 'beginner') {
//         this.name = name
//         this.instrument = instrument
//         this.level = level
//     }

//     practice() {
//         if (this.level === "beginner") {
//             this.level = "intermediate";
//         } else if (this.level === "intermediate") {
//             this.level = "advanced";
//         }
//     }
// }

// const student = new MusicStudent("Anna", "piano")
// student.practice()
// console.log(`${student.name}, ${student.instrument}, ${student.level}`)






// Prekių krepšelis
// VIDUTINIS

// Sukurkite ShoppingCart klasę, kuri gali pridėti prekes (addItem), pašalinti prekes (removeItem) ir apskaičiuoti bendrą kainą (calculateTotal). Prekės yra objektai su savybėmis name ir price.


// class ShoppingCart{
//     constructor() {
//         this.items = []
//     }

//     addItem(item) {
//         this.items.push(item)
//     }
//     removeItem(itemName) {
//         this.items = this.items.filter(item => item.name !== itemName)
//     }
//     calculateTotal() {
//         return this.items.reduce((total, item) => total + item.price, 0)
//     }

// }

// const cart = new ShoppingCart()
// cart.addItem({ name: "Apple", price: 0.99 })
// cart.addItem({ name: "Bread", price: 1.29 })
// console.log(cart.calculateTotal()) // 2.28
// cart.removeItem("Apple");
// console.log(cart.calculateTotal()) // 1.29






// Kino teatro vietų rezervavimas
// SUDĖTINGAS

// Sukurkite MovieTheater klasę, skirtą valdyti kino teatro sėdimų vietų rezervacijoms. Klasė turi turėti šias savybes: rows (eilučių skaičius) ir seatsPerRow (vietų skaičius eilutėje). Vietos turi būti saugomos dvimačiame masyve, kur kiekviena vieta gali būti true (užimta) arba false (laisva). Taip pat klasėje turi būti šie metodai:

// bookSeat(row, seat) - metodas vietos rezervavimui. Jei vieta jau užimta, turi būti grąžinamas pranešimas apie tai.

// cancelBooking(row, seat) - metodas rezervacijos atšaukimui. Jei vieta nebuvo rezervuota, turi būti grąžinamas atitinkamas pranešimas.

// checkAvailability(row, seat) - metodas, grąžinantis true arba false, priklausomai nuo to, ar vieta yra laisva.

// class MovieTheater {
//     constructor(rows, seatsPerRow) {
//         this.seats = Array.from({ length: rows }, () => Array(seatsPerRow).fill(false));
//     }

//     bookSeat(row, seat) {
//         if (!this.seats[row][seat]) {
//             this.seats[row][seat] = true;
//             console.log(`Seat booked at row ${row}, seat ${seat}`);
//         } else {
//             console.log("Seat already booked");
//         }
//     }

//     cancelBooking(row, seat) {
//         if (this.seats[row][seat]) {
//             this.seats[row][seat] = false;
//             console.log(`Booking canceled at row ${row}, seat ${seat}`);
//         } else {
//             console.log("Seat not booked");
//         }
//     }

//     checkAvailability(row, seat) {
//         return !this.seats[row][seat];
//     }
// }

// const theater = new MovieTheater(5, 5);
// theater.bookSeat(2, 3);
// console.log(theater.checkAvailability(2, 3)); // false
// theater.cancelBooking(2, 3);
// console.log(theater.checkAvailability(2, 3)); // true








// Bibliotekos Valdymo Sistema
// SUDĖTINGAS

// Jūs turite sukurti dvi klases: Book ir Library. 

// Book klasė atstovauja knygą ir turi savybes title (pavadinimas), author (autorius), ir year (išleidimo metai). Gali panaudoti iš pirmos užduoties. 

// Library klasė valdo knygų kolekciją ir skolinimo procesą. Ji turi šias funkcijas:

// addBook(book): Prideda naują Book objektą į bibliotekos kolekciją.

// lendBook(bookTitle, userName): Išduoda knygą vartotojui, jei ji yra prieinama. Saugo informaciją apie skolininką.

// returnBook(bookTitle): Grąžina knygą į biblioteką.

// listAvailableBooks(): Atspausdina sąrašą visų prieinamų knygų.




class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
    getSummary() {
        return `${this.title} by ${this.author} published in ${this.year}`;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.lentBooks = new Map();
    }

    addBook(book) {
        this.books.push(book);
    }

    lendBook(bookTitle, userName) {
        const book = this.books.find(book => book.title === bookTitle);
        if (book) {
            this.books = this.books.filter(b => b !== book);
            this.lentBooks.set(book, userName);
        } else {
            console.log("Book not available");
        }
    }

    returnBook(bookTitle) {
        const book = [...this.lentBooks.keys()].find(book => book.title === bookTitle);
        if (book) {
            this.books.push(book);
            this.lentBooks.delete(book);
        }
    }

    listAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach(book => console.log(book.getSummary()));
    }
}


const library = new Library();
library.addBook(new Book("Book1", "Author1", "2020"));
library.addBook(new Book("Book2", "Author2", "2021"));
library.lendBook("Book1", "User1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021"
library.returnBook("Book1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021", "Book1 by Author1 published in 2020"
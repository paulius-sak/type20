// Asmuo
// LENGVAS

// Parašykite funkciją createPerson, kuri sukuria objektą su savybėmis: name, lastname ir age. Funkcija turi priimti šias savybes kaip argumentus ir grąžinti sukurtą objektą.


// const createPerson = (name, lastName, age) => {
//     return {
//         name,
//         lastName,
//         age,
//     }
// }
// createPerson()
// console.log(createPerson("Jonas", "Jonaitis", 30))





// Mašinos informacija
// LENGVAS

// Sukurkite funkciją printCarInfo, kuri atspausdina visą automobilio informaciją. Automobilis yra objektas su savybėmis: brand (markė), model (modelis), ir year (metai). Funkcija turi grąžinti eilutę su visomis automobilio savybėmis.


// const printCarInfo = car => {
//     return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`
// }
// console.log(printCarInfo({ brand: "Toyota", model: "Corolla", year: 2020 }))








// Darbuotojų ataskaita
// LENGVAS

// Sukurkite funkciją printEmployeeInfo, kuri priima objektą, kuriame yra darbuotojų vardai kaip raktai ir jų pareigos kaip reikšmės. Funkcija turi atspausdinti kiekvieno darbuotojo vardą ir pareigas.

// const printEmployeeInfo = employees => {
//     const names = Object.keys(employees)
//     names.forEach(name => {
//         console.log(`Name: ${name}, Position: ${employees[name]}`)
//     })
// }
// printEmployeeInfo({ "Jonas": "Engineer", "Petras": "Manager","Kazys": "Ceo" });








// Knygų paieška
// VIDUTINIS

// Parašykite funkciją surastiKnygasPagalPavadinima, kuri ieško visų knygų, kurių pavadinimai atitinka (arba dalinai atitinka) nurodytą paieškos terminą. Paieška taip pat turėtų būti case-insensitive. Knygos yra pateiktos kaip objektų masyvas su savybėmis title ir author. Funkcija priima knygos pavadinimo paieškos terminą kaip argumentą ir grąžina visas atitinkamas knygas.

// const findBook = (books, searchQuery) => books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

// console.log(findBook([{ title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" }, { title: "Hobitas", author: "J.R.R. Tolkien" }], "Poteris"));




// Studentų grupių balai
// VIDUTINIS

// Jūsų užduotis - sukurti funkciją countAverages, kuri priima objektą, turintį studentų grupių pavadinimus kaip raktus ir studentų egzaminų balų masyvus kaip reikšmes. Funkcija turėtų grąžinti naują objektą su kiekvienos grupės vidurkiu.


// const countAverages = (studentGroups) => {
//     const averages = {}
//     for (const group in studentGroups) {
//         const average = studentGroups[group].reduce((sum, score) => sum + score, 0) / studentGroups[group].length
//         averages[group] = average
//     }
//     return averages
// }

// console.log(countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] }));
// // { "Group A": 90, "Group B": 80 }






// Inventoriaus valdymas
// SUDĖTINGAS

// Sukurkite funkciją updateInventory, kuri priima esamą inventoriaus objektą ir pakeitimų masyvą. Kiekvienas pakeitimas yra objektas su item (prekės pavadinimu), change (kaitos kiekiu; gali būti neigiamas, jei prekė yra šalinama) ir action ("add" arba "remove"). Funkcija turėtų atnaujinti inventorių pagal pateiktus pakeitimus.

const updateInventory = (inventory, changes) => {
    changes.forEach(change => {
        if (change.action === "add") {
            inventory[change.item] = (inventory[change.item] || 0) + change.change;
        } else if (change.action === "remove") {
            inventory[change.item] = (inventory[change.item] || 0) - change.change;
        }
    });
    return inventory;
};


console.log(updateInventory({ "apples": 5, "bananas": 8 }, [{ item: "apples", change: 3, action: "add" }, { item: "bananas", change: 2, action: "remove" }]));
// { "apples": 8, "bananas": 6 }
// Vardai
// LENGVAS

// Pasirašykite sąrašą su draugų vardais. Išrikiuokite A-Z tvarka. 

// let arr = ['John', 'Paul', 'Jimbo', 'Rex']

// console.log(arr.sort())




// Z-A
// VIDUTINIS

// Pakoreguokite pirmame pratime esantį sort, kad išrikiuotumėte Z-A tvarka.

// const friends = ['John', 'Paul', 'Jimbo', 'Rex']

// friends.sort((a, b) => b > a ? 1 : -1)

// console.log(friends)




// Mažėjimo tvarka
// VIDUTINIS

// Nusikopijuokite seką [5, 10, 20, 11, 12, 1, 0, 14, 25] ir su JS surūšiuokite ją mažėjimo tvarka (nuo didžiausio iki mažiausio).

// let arr = [5, 10, 20, 11, 12, 1, 0, 14, 25]

// arr.sort((a, b) => b - a)

// console.log(arr)







// Didžiausias
// VIDUTINIS

// Nusikopijuokite seką [10, 5, 20, 4] ir grąžinkite didžiausią skaičių (vieną skaičių).



// let arr = [10, 5, 20, 4]

// arr.sort((a, b) => b - a)
// console.log(arr[0])





// 1. Pilnamečiai
// LENGVAS

// Prafiltruokite masyvą, kad rodytų tik pilnamečius. 

// const people = [
//     {
//       name: "Petras",
//       age: "18"
//     },
//     {
//       name: "Jonas",
//       age: 15
//     },
//     {
//       name: "Antanas",
//       age: 20
//     },
//     {
//       name: "Urtė",
//       age: 10
//     },
//     {
//       name: "Diana",
//       age: 25
//     },
//     {
//       name: "Ieva",
//       age: 16
//     }
// ];



// console.log(people.filter(x => x.age >= 18))






// // 2. Tik pilnamečių vardai
// // VIDUTINIS

// // Pakoreguokite aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Rezultatas turi būti: ["Petras", "Antanas", "Diana"].


// console.log(people.filter(x => x.age >= 18).map(person => person.name))





// // 3. Tvarka
// // LENGVAS

// // Antro pratimo array išrikiuokite A-Z tvarka. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

// console.log(people.filter(x => x.age >= 18).map(person => person.name).sort())






// const drinks = [
//     { name: "lemonade", price: 50 },
//     { name: "lime", price: 10 }
// ]

// function price(items) {
//     items.sort((a, b) => a.price - b.price)
//     return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
// }

// console.log(price(drinks))
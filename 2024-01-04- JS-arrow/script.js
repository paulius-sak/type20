// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

// let myName = (name) => {alert(name)}

// myName('Paulius')





// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.


// let random = () => Math.floor(Math.random() * 5) + 1
// console.log(random())






// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).


// let nameSum = (name, surname) => name.length + surname.length
// console.log(nameSum('Paulius', 'Sakalys'))




// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// let letterByIndex = index => {
//     let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//     return alphabet[index]
// }
// console.log(letterByIndex(2))




// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// let calculate = ( n1, n2, operator) => {
//     switch (operator) {
//         case 'sum':
//             return n1 + n2
//         case 'sub':
//             return n1 - n2
//         case 'div':
//             return n1 / n2
//         case 'multi':
//             return n1 * n2
//         default:
//             throw new Error('error')
//     }
// }
// console.log(calculate(1, 2, 'sum'))






// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

// let random = () => Math.floor(Math.random() * 10) + 1


// let squareNumber = number => Math.pow(number, 2)


// console.log(squareNumber(random()))




// Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.


// let convertMStoKMH = speedMS => speedMS * 3.6 

// console.log(convertMStoKMH(1))




// Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.


// let compareNumber = (n1, n2) => {
//     if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//         return "error, not a number"
//     }
//     if (n1 === n2) {
//         return "equal"
//     }
//     return n1 > n2 ? n1 : n2
// }

// console.log(compareNumber(1, 1))





// Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.



// const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// console.log(isLeapYear(2024))






// Parašykite funkciją findMaxInArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.



// let findMaxInArray = (arr) => {
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findMaxInArray([1, 3, 2, 5, 4]))







// Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.


// let sumArray = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumArray([1, 2, 3, 4, 5]))






// Sukurkite funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.



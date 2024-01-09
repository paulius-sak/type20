// Elementų pridėjimas
// LENGVAS

// Parašykite funkciją addElement, kuri naudoja push() metodą, kad pridėtų naują elementą į masyvą.





// let addElement = (arr, element) => {
// arr.push(element)
// return arr
// }
// console.log(addElement([1, 2, 3], 4))






// Sujunkite du masyvus į vieną
// LENGVAS

// Sukurkite funkciją mergeArrays, kuri sujungia du masyvus į vieną.



// let mergeArrays = (arr1, arr2) => [...arr1, ...arr2]

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))







// Kelių elementų pridėjimas
// LENGVAS

// Parašykite funkciją addMultipleElements, kuri naudoja spread operatorių ..., kad pridėtų kelis elementus į masyvą. 



// const addMultipleElements = (arr, ...elements) => [...arr, ...elements];
// console.log(addMultipleElements([1, 2, 3,], 4, 5, 6))






// Masyvo elementų modifikavimas
// LENGVAS
 

// Parašykite funkciją doubleNumbers, kuri naudoja map() metodą, kad padvigubintų kiekvieną masyvo elementą.


// let doubleNumbers = (arr) => arr.map(number => number * 2)

// console.log(doubleNumbers([1, 2, 3]))





// Unikalūs elementai
// VIDUTINIS

// Parašykite funkciją findUnique, kuri grąžina unikalius elementus iš masyvo.


// const findUnique = (arr) => [...new Set(arr)]

// console.log(findUnique([1, 2, 2, 3, 4, 4, 5]))





// Kelionės maršruto planavimas
// VIDUTINIS

// Jūsų užduotis - sukurti funkciją planTrip, kuri nustato, ar galima atlikti kelionę neperkraunant transporto priemonės. Transporto priemonė gali pavežti iki 200 kg. Funkcija priima masyvą su daiktų svoriais ir nustato, ar bendras svoris neviršija leistinos ribos.

// const planTrip = (items) => items.reduce((total, item) => total + item, 0) <= 200

// console.log(planTrip([30, 70, 90])); // true
// console.log(planTrip([100, 85, 60])); // false






// Aptarnavimo eilės optimizavimas
// VIDUTINIS

// Jūs dirbate restorane ir turite optimizuoti užsakymų aptarnavimo eilę. Sukurkite funkciją optimizeQueue, kuri surikiuoja užsakymus pagal jų dydį (mažiausi pirmi). Kiekvienas užsakymas yra objektas, turintis id ir size savybes. Funkcija grąžina masyvą su surikiuotais užsakymų ID.


// const optimizeQueue = (orders) => orders.sort((a, b) => a.size - b.size).map(order => order.id)

// console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }])) // [2, 1, 3]








// Dažniausiai pasikartojantis
// SUDĖTINGAS

// Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.


// const findMostFrequent = (arr) => {
//     const counts = {}
//     let maxCount = 0
//     let mostFrequent

//     arr.forEach((item) => {
//         counts[item] = (counts[item] || 0) + 1
//         if (counts[item] > maxCount) {
//             maxCount = counts[item]
//             mostFrequent = item
//         }
//     })

//     return mostFrequent
// }


// console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1




// Rasti trūkstamą skaičių
// SUDĖTINGAS

// Sukurkite funkciją findMissingNumber, kuri randa trūkstamą skaičių iš eilės. Funkcija priima masyvą su skaičiais nuo 1 iki n. Jeigu masyve truksta bent vieno skaičiaus, funckija grąžina pirmą skaičių kurio trūksta eilėje. Jeigu visi skaičiai surašyti iš eilės, grąžina koks turėtų būti sekantis.




// const findMissingNumber = (arr) => {
//     const n = arr.length + 1;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
//     return expectedSum - actualSum;
// };

// console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
// console.log(findMissingNumber([1, 2, 3, 4, 5, 6])); // 7








// Šachmatų lentos generatorius
// SUDĖTINGAS

// Sukurkite funkciją generateChessBoard, kuri generuoja n x n šachmatų lentą kaip dvimatį masyvą, kur kiekvienas elementas yra arba 'B' (juoda), arba 'W' (balta). Pavyzdžiui, 3x3 lenta turėtų atrodyti: 

// const generateChessBoard = (size) => {
//     const board = [];
//     for (let i = 0; i < size; i++) {
//         const row = [];
//         for (let j = 0; j < size; j++) {
//             row.push((i + j) % 2 === 0 ? 'W' : 'B');
//         }
//         board.push(row);
//     }
//     return board;
// };
// console.log(generateChessBoard(3)); // [['W', 'B', 'W'], ['B', 'W', 'B'], ['W', 'B', 'W']]
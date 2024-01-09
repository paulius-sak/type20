// STRING


// Parašykite funkciją convertToUpperCase, kuri pakeičia visus teksto simbolius į didžiąsias raides (pvz. labas pakeitų į LABAS).


// let text = 'labas'
// let convert = text.toUpperCase()
// console.log(convert)


// const convertToUpperCase = (text) => text.toUpperCase()
// console.log(convertToUpperCase('labas'))









// Teksto iškarpa
// LENGVAS

// Sukurkite funkciją extractSubstring, kuri grąžina iškarpos, pradedant nuo 3 iki 7 simbolio, tekstą.


// let extractSubstring = (text) => text.substring(2, 7)
// console.log(extractSubstring("Sveikas pasauli"))

// veikia ir slice metodas 








// Iš didžiosios raidės
// VIDUTINIS

// Sukurkite funkciją capitalizeFirstLetter, kuri pavertimas pirmąją kiekvieno žodžio raidę tekste į didžiąją.


// let capitalizeFirstLetter = (text) => {
//     let words = text.split(' ')
//     let result = ''

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i]
//         if(word) {
//             result += word.charAt(0).toUpperCase() + word.slice(1)
//         }
//         if (i < words.length -1) {
//             result += " "
//         }
//     } 
//     return result
// }

// console.log(capitalizeFirstLetter("labas rytas, pasauli!"))







// Nepadorių žodžių cenzūra
// SUDĖTINGAS

// Parašykite funkciją censorCurseWords, kuri tekste pakeičia nurodytus nepadorius žodžius į "****". Sprendimas turi nenaudoti reguliariųjų išraiškų (angl. Regular expression).

// Rezultatas ir funkcijos kvietimas turėtų atrodyti taip:


// let censorCurseWords = (text, curseWords) => {
//     let censoredText = text
//     for (let i = 0; i < curseWords.length; i++) {
//         let curseWord = curseWords[i]
//         while (censoredText.includes(curseWord)) {
//             censoredText = censoredText.replace(curseWord, '*****')
//         }
//     }
//     return censoredText
// }

// console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); // "This is a **** and another ****."





// NUMBER 

// Milk price
// LENGVAS
 

// Sukurkite kintamąjį milkPrice. Su JS patikrinkite ir išveskite vartotojui alert() ar jam reikės pasiimti smulkių centų, ar nereikės (t.y. ar skaičius sveikas ar ne). 

// let milkPrice = 3.23

// if (Number.isInteger(milkPrice)) {
//     console.log("Centu nereikia")
// } else {
//     console.log("Reikia centu")
// }






// Skaičiai po kablelio
// LENGVAS

// Papildykite pirmą pratimą, kad alert() taip pat išvestų kainą su dviem skaičias po kablelio (t.y. 3.49, 3.00).


// let milkPrice = 3.233

// if (Number.isInteger(milkPrice)) {
//     console.log("Centu nereikia")
// } else {
//     console.log("Reikia centu")
// }

// console.log(milkPrice.toFixed(2))






// Maksimalus skaičius
// VIDUTINIS

// Sukurkite funkciją findMax, kuri grąžina didžiausią skaičių iš pateiktų argumentų naudojant Math.max().

// let arr = [1, 2, 3000, 4, 5, 100]
// console.log(arr)
// let findMax = (...arr) => Math.max(...arr)
// console.log(findMax(...arr))





// BOOLEAN

// Legal age
// LENGVAS
 
// Pasirašykite kintamąjį isLegalAge, kurį priskirkite true arba false. 
// Console.log'e atvaizduokite šį kintamąjį. 
// Sukurkite antrą console.log, kuriame atvaizduokite šį kintamąjį su toString() metodu. Turėtų skirtis spalva teksto. 


// let age = 18
// let isLegalAge = ( age >= 18 )  ? true : false

// console.log(isLegalAge)
// console.log(isLegalAge.toString())
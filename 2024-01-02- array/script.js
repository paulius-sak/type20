// let arr = [2, 3, 4]
// arr.unshift(1)

// console.log(arr)






// kodas kuris skaiciuoja kiek yra skirtingu elementu masyve

// let arr = [1, 2, 2, 3, 3, 3, 4]

// let uniqueElements = []
// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueElements.includes(arr[i])) {
//         uniqueElements.push(arr[i])
//     }
// }
// console.log(uniqueElements.length)





//funkcija kuri grazina teigiamus skaicius is masyvo

// function keepPositive(arr) {
//     let positiveNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positiveNumbers.push(arr[i]);
//         }
//     }
//     return positiveNumbers;
    
// }
// console.log(keepPositive([-3, 1, -2, 4, -5, 6]))






// funkcija ar skaicius yra pasikartojatis elementas ar ne.

// function doesRepeat(arr, element) {
//     return arr.indexOf(element) !== arr.lastIndexOf(element)
// }
// console.log(doesRepeat([1, 2, 3, 4, 3, 5], 3))
// console.log(doesRepeat([1, 2, 3, 4, 5], 3))








// funkciją , kuri pakeičia kiekvieną masyvo skaičių: jei skaičius yra lyginis, jį padalina iš dviejų; jei nelyginis, padaugina iš trijų.


// function transformuotiSkaicius(arr) {
//     let transformed = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             transformed.push(arr[i] / 2)
//         }   else { 
//             transformed.push(arr[i] * 3)
//         }
//     }
//     return transformed
// }
// console.log(transformuotiSkaicius([1, 2, 3, 4, 5]))

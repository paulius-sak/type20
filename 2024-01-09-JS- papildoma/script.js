// 1. Sukurti JS'o funkcijos flat analogą. Pačios flat funkcijos naudoti čia negalima. Ši funkcija priima masyvą ir jeigu masyvo nariai yra masyvai, juos "suploja" į vieną masyvą, pvz.:
// Jeigu funkcijai paduodame masyvą [1, [2], [3, [[4]]],[5,6]], tai funkcija jį turėtų grąžinti kaip [1, 2, 3, 4, 5, 6] 



// let arr = [1, [2], [3, [[4]]],[5,6]]

// function flatArr(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 newArr = newArr.concat(flatArr(arr[i]))
//         } else {
//         newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// let result = flatArr(arr)

// console.log(result)







// 2. Sukurti funkciją, kuri priima masyvą su skaičių masyvais ir grąžina nuo didžiausio iki mažiausio skaičiaus surūšiuotą naują masyvą be pasikartojančių skaičių.
// Pavyzdžiui funkcija priima masyvą su skaičių masyvais: [[5, 1, 15], [3, 5, 1], [5, 100, 1]]
// Ir grąžina naują masyvą be pasikartojančių skaičių ir surūšiuotą nuo mažiausio iki didžiausio skaičiaus: [1, 3, 5, 15, 100]


// let arr = [[5, 1, 15], [3, 5, 1], [5, 100, 1]]

// function sortedArr(arr) {
//     let flattenedArray = arr.flat().filter((value, index, self) => self.indexOf(value)  === index)
//     let minMax = flattenedArray.sort((a, b) => a - b)
//     return minMax
// }
// let result = sortedArr(arr)

// console.log(result)

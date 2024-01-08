// 1. Sukurti funkciją, kuri į masyvo pabaigą įdeda naują narį.
// Ši funkcija priima du parametrus: duomenų masyvą ir naują narį.
// Ši funkciją grąžina naują masyvą, kuriame į pradinių duomenų masyvo pabaigą, jau įdėtas ir naujas narys.
// Šioje funkcijoje negalima naudoti metodų push ar splice, kurie leistų tiesiogiai įdėti narį į masyvo pabaigą.

// function newItem(arr, item) {
//     let newItemAdded = arr.concat(item) 
//     return newItemAdded
// }

// let arr = [1, 2, 3]
// let item = [4]
// let result = newItem(arr, item)
// console.log(result)










// 2. Sukurti funkciją, kuri į masyvo pradžią įdeda naują narį.
// Ši funkcija priima du parametrus: duomenų masyvą ir naują narį.
// Ši funkciją grąžina naują masyvą, kuriame į pradinių duomenų masyvo pradžią, jau įdėtas ir naujas narys.
// Šioje funkcijoje negalima naudoti metodų unshift ar splice, kurie leistų tiesiogiai įdėti narį į masyvo pradžią. 
// Užuomina: reikės leisti ciklą per masyvą ir visus masyvo narius perkelti per vieną poziciją į dešinę pusę, tam kad nulinis indeksas liktų tuščias ir galėtume į jį įdėti naują narį.



// function newItemInStart(arr, item) {
//     let newArr = [item]
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// let arr = [1, 2, 3]
// let item = 4
// let result = newItemInStart(arr, item)

// console.log(result)







// 3. Sukurti funkciją, kuri yra analogišką antrąjai funkcijai, tačiau ji priima dar vieną parametrą - indeksą, į kurią masyvo vietą reikia pridėti naują narį.


// function newItemInIndex(arr, item, index) {
//     let newArr = []
//     for (let i = 0; i < index; i++) {
//         newArr.push(arr[i])
//     }
//     newArr.push(item)
//     for (let i = index; i < arr.length; i++){
//         newArr.push(arr[i])
//     }

//     return newArr
// }

// let arr = [1, 2, 3]
// let item = 4
// let index = 2
// let result = newItemInIndex(arr, item, index)

// console.log(result)
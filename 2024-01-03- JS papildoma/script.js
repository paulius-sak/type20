// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
 
// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
// 1.2. Pašalinti paskutinį masyvo narį.
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// 1.4. Pašalinti priešpaskutinį masyvo narį.
// 1.5. Pašalinti antrą masyvo narį.
// 1.6. Pašalinti 7 ir 8 masyvo narius.
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// 1.16. Į masyvo vidurį pridėti skaičių 0.
// 1.17. Pašalinti pirmą masyvo narį.
// 1.18. Pašalinti paskutinį masyvo narį.
// 1.19. Į masyvo pradžią pridėti žodį "start".
// 1.20. Į masyvo pabaigą pridėti žodį "end".
 
// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
 

let arr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

let task1 = arr.shift()

let task2 = arr.pop()

let middleIndex = Math.floor(arr.length / 2)
let task3 = arr.splice(middleIndex, 1)

let task4 = arr.splice(arr.length -2, 1)

let task5 = arr.splice(1, 1)

let task6 = arr.splice(6, 2)

let task7 = arr.splice(arr.length -6, 3)

let task8 = arr.splice(2, 1, 888)

let task9 = arr.splice(9, 1, 33, 789, 6543)

let task10 = arr.splice(arr.length -1, 1, 321, 654, 987)

let task11 = arr.splice(1, 0, 11)

let task12 = arr.splice(13, 0, 1)

let task13 = arr.splice(arr.length -1, 0, -1)

let task14 = arr.unshift(1, 2, 3)

let task15 = arr.push(-333, -321, -312)

let middle = Math.floor(arr.length / 2)
let task16 = arr.splice(middle, 0, 0)

let task17 = arr.shift()

let task18 = arr.pop()

let task19 = arr.unshift("start")

let task20 = arr.push("end")

console.log(arr)


// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
 
 
// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
// 2.2. Gauti paskutinį masyvo narį.
// 2.3. Gauti antrą masyvo narį.
// 2.4. Gauti priešpaskutinį masyvo narį.
// 2.5. Gauti aštuntą masyvo narį.
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
// 2.7. Gauti vidurinį masyvo narį.
// 2.8. Gauti pirmus tris masyvo narius.
// 2.9. Gauti paskutinius tris masyvo narius.
// 2.10. Gauti pirmus 10 masyvo narius.
// 2.11. Gauti paskutinius 10 masyvo narius.
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.



let arr2 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

let slisedArr21 = arr2.slice(0, 1)
console.log(slisedArr21)

let slisedArr22 = arr2.slice(-1,)
console.log(slisedArr22)

let slisedArr23 = arr2.slice(1, 2)
console.log(slisedArr23)

let slisedArr24 = arr2.slice(-2, -1)
console.log(slisedArr24)

let slisedArr25 = arr2.slice(7, 8)
console.log(slisedArr25)

let slisedArr26 = arr2.slice(-9, -8)
console.log(slisedArr26)


let middle2 = Math.floor(arr2.length / 2)
let slisedArr27 = arr2.slice(middle2, middle2 + 1)
console.log(slisedArr27)

let slisedArr28 = arr2.slice(0, 3)
console.log(slisedArr28)

let slisedArr29 = arr2.slice(-3)
console.log(slisedArr29)

let slisedArr210 = arr2.slice(0, 10)
console.log(slisedArr210)

let slisedArr211 = arr2.slice(-10)
console.log(slisedArr211)

let slisedArr212 = arr2.slice(2, 8)
console.log(slisedArr212)

let slisedArr213 = arr2.slice(-9, -4)
console.log(slisedArr213)

let slisedArr214 = arr2.slice(10, 19)
console.log(slisedArr214)

let slisedArr215 = arr2.slice(-17, -8)
console.log(slisedArr215)

let slisedArr216 = arr2.slice(1)
console.log(slisedArr216)

let slisedArr217 = arr2.slice(0, 26)
console.log(slisedArr217)

let slisedArr218 = arr2.slice(5)
console.log(slisedArr218)

let slisedArr219 = arr2.slice(0, -5)
console.log(slisedArr219)

let slisedArr220 = arr2.slice(0, middle2)
console.log(slisedArr220)

let slisedArr221 = arr2.slice(middle2 + 1)
console.log(slisedArr221)

let slisedArr222 = arr2.slice(1, -1)
console.log(slisedArr222)

let slisedArr223 = arr2.slice(5, -3)
console.log(slisedArr223)

let slisedArr224 = arr2.slice(1, -8)
console.log(slisedArr224)

let slisedArr225 = arr2.slice(7, -1)
console.log(slisedArr225)

let slisedArr226 = arr2.slice(9, -12)
console.log(slisedArr226)

let slisedArr227 = arr2.slice(10, 10 + 9)
console.log(slisedArr227)

let slisedArr228 = arr2.slice(7, 7 + 12)
console.log(slisedArr228)

let slisedArr229 = arr2.slice(0, 5,)
let slisedArr2291 = arr2.slice(-6)
console.log(slisedArr229)
console.log(slisedArr2291)

let newArr = [slisedArr229, slisedArr2291]

// let newArr = [...slisedArr229, ...slisedArr2291]
// console.log(newArr)

console.log(newArr.flat())

let slisedArr230 = arr2.slice(2, 5)
let slisedArr2301 = arr2.slice(14, 17)
console.log(slisedArr230)
console.log(slisedArr2301)

let newArr2 = [slisedArr230, slisedArr2301]
console.log(newArr2.flat())

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

console.log('-----------------------------------------------------------------------------')
// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
// 3.1. Gauti tik teigiamus skaičius.
// 3.2. Gauti tik neigiamus skaičius.
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.

let arr3 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr3)


let filteredNums31 = arr3.filter(num => num > 0)
console.log(filteredNums31)

let filteredNums32 = arr3.filter(num => num < 0)
console.log(filteredNums32)

let filteredNums33 = arr3.filter(num => num % 2 === 0)
console.log(filteredNums33)

let filteredNums34 = arr3.filter(num => num % 3 === 0)
console.log(filteredNums34)

let filteredNums35 = arr3.filter(num => num % 5 === 0)
console.log(filteredNums35)

let filteredNums36 = arr3.filter(num => num % 11 === 0)
console.log(filteredNums36)

let filteredNums37 = arr3.filter(num => num % 31 === 0)
console.log(filteredNums37)

let filteredNums38 = arr3.filter(num => num % 3 === 0 && num % 2 === 0)
console.log(filteredNums38)

let filteredNums39 = arr3.filter(num => num % 3 === 0 && num % 7 === 0)
console.log(filteredNums39)

let filteredNums310 = arr3.filter(num => num % 5 === 0 && num % 9 === 0)
console.log(filteredNums310)

let filteredNums311 = arr3.filter(num => num % 5 === 0 && num % 11 === 0)
console.log(filteredNums311)

let filteredNums312 = arr3.filter(num => num % 2 === 0 && num % 8 === 0 && num % 12 === 0)
console.log(filteredNums312)

let filteredNums313 = arr3.filter(num => num % 3 === 0 || num % 2 === 0)
console.log(filteredNums313)

let filteredNums314 = arr3.filter(num => num % 3 === 0 || num % 5 === 0)
console.log(filteredNums314)

let filteredNums315 = arr3.filter(num => num % 5 === 0 || num % 6 === 0)
console.log(filteredNums315)

let filteredNums316 = arr3.filter(num => num % 7 === 0 || num % 8 === 0)
console.log(filteredNums316)

let filteredNums317 = arr3.filter(num => num % 9 === 0 || num % 13 === 0)
console.log(filteredNums317)

let filteredNums318 = arr3.filter(num => num % 2 === 0 || num % 3 === 0 || num % 5 === 0)
console.log(filteredNums318)

let filteredNums319 = arr3.filter(num => num % 7 === 0 || num % 9 === 0 || num % 5 === 0)
console.log(filteredNums319)

let filteredNums320 = arr3.filter(num => num % 7 === 0 || num % 8 === 0 || num % 11 === 0)
console.log(filteredNums320)


let filteredNums321 = arr3.filter(num => num % 9 === 0 || num % 12 === 0 || num % 13 === 0)
console.log(filteredNums321)

let filteredNums322 = arr3.filter(num => num > 100)
console.log(filteredNums322)

let filteredNums323 = arr3.filter(num => num > 555)
console.log(filteredNums323)

let filteredNums324 = arr3.filter(num => num >= 888)
console.log(filteredNums324)

let filteredNums325 = arr3.filter(num => num >= 6789)
console.log(filteredNums325)


let filteredNums326 = arr3.filter(num => num < 50)
console.log(filteredNums326)

let filteredNums327 = arr3.filter(num => num < 1000)
console.log(filteredNums327)

let filteredNums328 = arr3.filter(num => num <= -1)
console.log(filteredNums328)

let filteredNums329 = arr3.filter(num => num <= -5564)
console.log(filteredNums329)

let filteredNums330 = arr3.filter(num => num < 1000 && num > 500)
console.log(filteredNums330)

let filteredNums331 = arr3.filter(num => num < 100 && num > 0)
console.log(filteredNums331)

let filteredNums332 = arr3.filter(num => num < 0 && num > -50)
console.log(filteredNums332)

let filteredNums333 = arr3.filter(num => num <= 0 && num > -100)
console.log(filteredNums333)

let filteredNums334 = arr3.filter(num => num >= 0 && num < 55)
console.log(filteredNums334)

let filteredNums335 = arr3.filter(num => num >= 444 && num <= 654)
console.log(filteredNums335)

let filteredNums336 = arr3.filter(num => num > 0 && num % 2 === 0)
console.log(filteredNums336)

let filteredNums337 = arr3.filter(num => num > 0 && num % 3 === 0)
console.log(filteredNums337)

let filteredNums338 = arr3.filter(num => num > 0 && num % 4 === 0)
console.log(filteredNums338)

let filteredNums339 = arr3.filter(num => num > 0 && num % 111 === 0)
console.log(filteredNums339)

let filteredNums340 = arr3.filter(num => num > 500 && num % 2 === 0)
console.log(filteredNums340)

let filteredNums341 = arr3.filter(num => num > 1000 && num % 3 === 0)
console.log(filteredNums341)

let filteredNums342 = arr3.filter(num => num < 1000 && num % 9 === 0)
console.log(filteredNums342)

let filteredNums343 = arr3.filter(num => num < 500 && num % 2 === 0)
console.log(filteredNums343)

let filteredNums344 = arr3.filter(num => num >= 33 && num % 3 === 0)
console.log(filteredNums344)

let filteredNums345 = arr3.filter(num => num >= 444 && num % 12 === 0)
console.log(filteredNums345)

let filteredNums346 = arr3.filter(num => num <= 155  && num % 5 === 0)
console.log(filteredNums346)

let filteredNums347 = arr3.filter(num => num <= -333  && num % 9 === 0)
console.log(filteredNums347)

let filteredNums348 = arr3.filter(num => num > 100  && num < 500  && num % 5 === 0)
console.log(filteredNums348)

let filteredNums349 = arr3.filter(num => num >= 888  && num < 1000  && num % 2 === 0)
console.log(filteredNums349)

let filteredNums350 = arr3.filter(num => num <= 888  && num >= -333  && num % 3 === 0 && num !== 0)
console.log(filteredNums350)
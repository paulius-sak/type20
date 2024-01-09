// Sukurkite dvi funkcijas: 

// alertName

// consoleName

// Abi funkcijos turės vieną parametrą – vardą. Jos bus callback funkcijos. Pirmoji funkcija vardą alertins, antroji – console.log'ins. 

// Susikurkite pagrindę funkciją (coreFunction). Ši funkcija – paims pirmą raidę, ją padarys didžiąja ir prijungs kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia vieną iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).


// function alertName (text) {
//     alert(text)
// }

// function consoleName (text) {
//     console.log(text)
// }


// function coreFunction(name, callback) {
//     let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//     callback(capitalizedName)
// }

// coreFunction('paUlius', consoleName)






// Nusikopijuokite array const cars = ["BMW", "VW", "Audi"] ir, naudojant forEach, atspausdinkite kiekvieną elementą (automobilio reikšmę). 


// const cars = ["BMW", "VW", "Audi"]

// cars.forEach((v) => console.log(v))




// Pakoreguokite pirmą pratimą, kad atspausdintumėte index: value (pvz: 0: BMW, 1: VW ir t.t.).

// const cars = ["BMW", "VW", "Audi"]
// cars.forEach((v, i) => console.log(i + ': ' + v))






// Sukurkite masyvą pavadinimu names su savo draugų vardais, raidžių kapitalizaciją pamiksuokite (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padarykite, kad susikurtų naujas array (ir jį atspausdinkite), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" -> "Petras").


// let names = ['paulius', 'jonas', 'petras']

// let newNames = names.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())

// console.log(newNames)









// Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.

// const ages = [1, 20, 5, 10, 22, 50, 40, 39]

// let filteredAges = ages.filter((x) => x >= 18)

// console.log(filteredAges)






// Sukurkite array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find – suraskite bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

// const cities = ["Vilnius", "Kaunas", "Klaipeda"]

// let filteredCities = cities.find(v => v.charAt(0) === 'K')

// console.log(filteredCities)





// Penktame pratime esantį sprendimą pakoreguokite ir patikrinkite su some ar bent vienas miestas prasideda iš mažosios.


// const cities = ["Vilnius", "Kaunas", "klaipeda"]

// let filteredCities = cities.every(v => v.charAt(0) === v.charAt(0).toUpperCase())

// console.log(filteredCities)

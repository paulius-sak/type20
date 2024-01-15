// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.



// const company1 = {}

// // 2 UZDUOTIS 
// let companyName = 'company name'
// company1['companyName'] = 'CodeAcademy'

// company1.opened = '1993'

// company1.companyCode = 'LT1231234123'

// company1.emplyees = '15'

// company1.ceo = 'Petras Petrauskas'

// company1.nvo = true

// company1.workingLocations = ['Lietuva', 'Latvija']

// company1.activityAreas = ['Mentoring', 'Lectures']

// company1.contacts = {}
// company1.contacts.phone = '+3706123456'
// company1.contacts.email = 'company@gmail.com'

// company1.contacts.address = {}
// company1.contacts.address.country = 'Lietuva'
// company1.contacts.address.city = 'Vilnius'
// company1.contacts.address.street = 'Santariskiu st. 1'
// company1.contacts.address.apartment = '1'

// // 5 UZDUOTIS

// company1.getFullAddress = function() {
    
//     return `${this.contacts.address.street} - ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`
// }

// // 6 UZDUOTIS
// company1.setNvoStatus = function() {
//     this.nvo = false
//     return this.nvo
// }

// company1.setNvoStatus = function() {
//     this.nvo = true
//     return this.nvo
// }


// company1.nvoStatus = function() {
//     this.nvo = !this.nvo
//     return this.nvo
// }

// console.log(company1.nvo)
// company1.setNvoStatus()
// console.log(company1.nvo)
// company1.nvoStatus()
// console.log(company1.nvo)
// company1.nvoStatus()
// console.log(company1.nvo)
// // 7 UZDUOTIS

// company1.workingLocationsList = function() {
//     return `Imone veikia siose salyse: ${this.workingLocations.join(', ')}.`
// }


// company1.activityAreasList = function() {
//     return `Imone uzsiima siomis sritimis: ${this.activityAreas.join(', ')} ir t.t.`
// }


// // 8 UZDUOTIS
// // function addWorkingLocation(company, newLocation) {
// //     company.workingLocations.push(newLocation)
// // }
// // addWorkingLocation(company1, 'Estija')

// company1.addWorkingLocation = function(newLocation) {
//     this.workingLocations.push(newLocation)
  
//     return this.workingLocation
// }
// company1.addWorkingLocation('Estija')




// function addActivityAreas(company, newActivity) {
//     company.activityAreas.push(newActivity)
// }
// addActivityAreas(company1, 'web-development')


// // 9 UZDUOTIs 

// company1.removeWorkingLocations = function(locationToRemove) {
//     this.workingLocations = this.workingLocations.filter(location => location !== locationToRemove )
//     return this.workingLocations
// }
// company1.removeWorkingLocations('Latvija')

// company1.removeActivityAreas = function(areasToRemove) {
//     this.activityAreas = this.activityAreas.filter(areas => areas !== areasToRemove)
//     return this.activityAreas
// }

// company1.removeActivityAreas('Mentoring')



// console.log(company1)
// console.log(company1.getFullAddress())
// console.log(company1.workingLocationsList())
// console.log(company1.activityAreasList())


// const company2 = {
    
//     'company name': 'CodeAcademy',
//     opened: '1993',
//     companyCode: 'LT1231234123',
//     emplyees: '15',
//     ceo: 'Petras Petrauskas',
//     nvo: true,
//     workingLocations: ['Lietuva', 'Latvija'],
//     activityAreas: ['Mentoring', 'Lectures'],
//     contacts: {
//         phone: '+3706123456',
//         email: 'company@gmail.com',
//         address: {
//             country: 'Lietuva',
//             city: 'Vilnius',
//             street: 'Santariskiu st. 1',
//             apartment: '1',
//         }
//     }

// }



// UŽDUOTIS:
// 1. Sukurti įmonės klasę.
// 2. Klasė turės:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"


// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.

class Address {
    constructor(country, city, street, apartment,) {
        this.country = country
        this.city = city
        this.street = street
        this.apartment = apartment
    }
}

class Contact {
    constructor( phone, email, address) {
        this.phone = phone
        this.email = email
        this.address = address || new Address()
    }
}
class Company {
    constructor(companyName, opened, companyCode, employees, ceo, nvo, workingLocation,activityAreas, contacts) {
        this.companyName = companyName
        this.opened = opened
        this.companyCode = companyCode
        this.employees = employees
        this.ceo = ceo
        this.nvo = nvo
        this.workingLocation = workingLocation
        this.activityAreas = activityAreas
        this.contacts = contacts || new Contact()
    }

    getAddress() {
        return `${this.contacts.address.street}-${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}`
    }
    setNvoStatusFalse() {
        this.nvo = false
        return this.nvo
    }
    nvoStatus() {
    this.nvo = !this.nvo
    return this.nvo
    }
   
    workingLocationsJoin() {
        return this.workingLocation.join(', ')
    }
    activityAreasJoin() {
        return this.activityAreas.join(', ')
    }
    addWorkingLocation(newLocation) {
        this.workingLocation.push(newLocation)
        return this.workingLocation
    }
    addActivityAreas(newActivityArea) {
        this.activityAreas.push(newActivityArea)
        return this.activityAreas
    }
    removeWorkingLocation(locationToRemove) {
        this.workingLocation = this.workingLocation.filter(location => location !== locationToRemove)
    return this.workingLocation
    }
    removeActivityArea(areaToRemove) {
        this.activityAreas = this.activityAreas.filter(area => area !== areaToRemove)
    return this.activityAreas
    }

}

const company1 = new Company('Company ABC', 1993, 'Lt12323', 12, 'Kazys Kazimieras', true, ['Lietuva', 'Latvija'], ['Mentoring', 'Lectures'], new Contact('8829393912', 'email@gmail.com', new Address('Lietuva', 'Vilnius', 'Santariskiu st. 1', '1'  )) )
// const company2 = new Company('Company XYZ', 'John Doe')
console.log(company1)
console.log(company1.getAddress())
console.log(company1.setNvoStatusFalse())
console.log(company1.nvoStatus())
console.log(company1.nvoStatus())
company1.addWorkingLocation('Estija')
company1.addActivityAreas('Marketing')
console.log(company1.workingLocationsJoin())
console.log(company1.activityAreasJoin())
console.log(company1.removeWorkingLocation('Latvija'))
console.log(company1.removeActivityArea('Lectures'))


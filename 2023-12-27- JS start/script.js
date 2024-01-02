// console.groupCollapsed('sum')

// const a = 10;
// const b = 12;
// const sum = a + b;
// console.log(sum);

// console.groupEnd()




// console.groupCollapsed('minus')

// let year = 90;
// year -= 30;

// console.log(year)

// console.groupEnd()

// console.groupCollapsed('vardas pavarde')

// let myName = "Paulius";
// let surname = "Sakalys";
// let fullName = myName + " " + surname;
// console.log(fullName);

// console.groupEnd()

// console.groupCollapsed('temp')

// let celsius = 27;
// let fahrenheit = (celsius * 9/5) + 32;
// console.log(fahrenheit + "F")

// console.groupEnd()

// console.groupCollapsed('finances')

// let startingPoint = 999.99;
// let increasedPoint = startingPoint + (0.09 * startingPoint);
// let doubledPoint = increasedPoint * 2;
// let resultPoint = doubledPoint - 50;

// console.log("Pradinis balansas:" , startingPoint.toFixed(2));
// console.log("Balansas po 9% papildymo:" , increasedPoint.toFixed(2));
// console.log("Dvigubas balansas po papildymo:" , doubledPoint.toFixed(2));
// console.log("Galutinis balansas:" , resultPoint.toFixed(2));




// const text1 = "Labas";
// const text2 = "labas";
// const result1 = text1 === text2;
// console.log(result1);

// const number = 10;
// const text = "10";
// console.log(number != text);
// console.log(number == text);
// console.log(number === text);

// const currentBalance = 50;
// const transaction = -50;
// const result = currentBalance + transaction >= 0;
// console.log(result);

// const a1 = 15;
// const b1 = 7;
// const divisibleWithRemainder = a1 % b1 === 0;
// console.log(divisibleWithRemainder);


// console.groupEnd()
// console.groupCollapsed('klausimas')

// let smallestCountry = prompt('Kokia yra mažiausia pasaulyje šalis?', '');

// if (smallestCountry === 'Vatikanas') {
//     console.log('Teisingai!')
// } else console.log('Rimtai? Taigi Vatikanas!')

// console.groupEnd()

// let a3 = 1;
// let b3 = 3;
// let result3 = (a3 + b3 < 4) ? console.log('Below') : console.log('Over');




// let login = '';

// let message = (login == 'Employee') ? 'Hello' :
// (login == 'Director') ? 'Greetings' : 
// (login == '') ? 'No login' :
// '';
 
// console.log(message)






// let legalAge = 20;
// let clientAge = 21;

// if (clientAge >= legalAge) {
//     console.log ('Age reached.')
// } else console.log('Not Legal!')






// let myName = 'Paulius';

// if (myName.length >= 6) {
//     console.log('ilgas vardas')
// } else console.log('')


// let age = 30;

// if (age > 100 || age < 0) {
//     console.log('Invalid Age.');
// } else if (age <= 18) {
//     console.log('Child')
// } else {
//     console.log('Adult')
// } 





// let car1 = 'Mini'

// let bmwGroup = 'BMW' || 'Mini' || 'Rolls-Royce';
// let audiGroup = 'VW' || 'Audi' || 'Bentley' || 'Bugatti' || 'Lamborghini' || 'Porsche';

// if (car1 == bmwGroup) {
//     console.log('BMW group');
// } else if (car1 === audiGroup) {
//     console.log('Audi group');
// } else {
//     console.log('none')
// }




// const car = "Audi";
// if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
//   console.log('VW Group');
// } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
//   console.log('BMW Group');
// } else {
//   console.log('Nei vienam');
// }


// let myName = 'Paulius';


// let answer = myName.length < 5 ? "Short Name" : "Long Name";

// console.log(answer);


// let clientAge = 17;
// let legalAge = 18;

// let driver = clientAge >= legalAge ? "Can Drive" : "Can't drive";

// console.log(driver)


// const clientAge = 2;
// const legalAge = 18;
// clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");



// let phone = 'iPhone'

// // let isIphoneUser =  phone === 'iphone' ? 'true' : 'false';
// const isIphoneUser = phone === 'iPhone';
// console.log(isIphoneUser)



// alert( alert(1) || 2 || alert(3) );
// let age = 3;

// if (age >= 14 && age <= 90) {
//     console.log('true')
// } else console.log('false')


// let age = 3;

// if (!(age >= 14 && age <= 90)) {
//     console.log('true')
// } else console.log('false')

// let age = 3;

// if (age < 14 && age > 90) {
//     console.log('true')
// } else console.log('false')

// let browser = '';

// if (browser === 'edge') {
//     console.log("RIP Edge!");
// }   else if (browser == 'chrome' 
// || browser =='Firefox' 
// || browser =='Safari' 
// || browser =='Opera') {
//     console.log( 'Šios naršykles palaikomos' );
// } else {
//     console.log( 'Tikimės, kad šis puslapis atrodys puikiai!' )
// }


// let a = +prompt('a?', '');

// switch (a) {
//     case 0:
//         console.log('0');
//         break;
//     case 1:
//         console.log('1');
//         break;
//     case 2:
//     case 3:
//         console.log('2,3');
//         break;       
    
// }



// const car = "Audi";
// if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
//   console.log('VW Group');
// } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
//   console.log('BMW Group');
// } else {
//   console.log('Nei vienam');
// }


// switch----------------------------------------------------------------------


// const car = 'Mii';

// switch (car) {
//     case 'VW':
//     case 'Audi':
//     case 'Bentley':
//     case 'Bugatti':
//     case 'Lamborghini':
//     case 'Porsche':
//         console.log('VW Group');
//         break;
//     case 'BMW':
//     case 'Mini':
//     case 'Rolls-Royce':
//         console.log('BMW group');
//         break;
//     default:
//     console.log("Kita");
//     break;
// }
// let userInput = 'obuolys'





// switch (userInput) {
//     case 'kriause':
//     case 'obuolys':
//     case 'vysnia':
//     case 'mango':
//     case 'citrina':
//         console.log('Vaisius');
//         break;
//     case 'morka':
//     case 'rope':
//     case 'kopustas':
//     case 'ridikas':
//     case 'salota':
//         console.log('Darzove');
//         break;
//     default:
//     console.log("Kita");
//     break;
// }

// let weekDay = '7';

// switch (weekDay) {
//         case '0':
//             console.log('Pirmadienis');
//             break;
//         case '1':
//             console.log('Antradienis');
//             break;
//         case '2':
//             console.log('Treciadienis');
//             break;
//         case '3':
//             console.log('Ketvirtadienis');
//             break;
//         case '4':
//             console.log('Penktadienis');
//             break;
//         case '5':
//             console.log('Sestadienis');
//             break;
//         case '6':
//             console.log('Sekmadienis');
//             break;
//         default:
//         console.log("Nera tokios dienos");
//         break;
// }


// let weekDay = new Date().getDay();
// switch (weekDay) {
//   case 0:
//     weekDay = 'Sekmadienis';
//     break;
//   case 1:
//     weekDay = 'Pirmadienis';
//     break;
//   case 2:
//     weekDay = 'Antradienis';
//     break;
//   case 3:
//     weekDay = 'Trečiadienis';
//     break;
//   case 4:
//     weekDay = 'Ketvirtadienis';
//     break;
//   case 5:
//     weekDay = 'Penktadienis';
//     break;
//   case 6:
//     weekDay = 'Šeštadienis';
//     break;
// }
// console.log(weekDay);



// funkcijos ------------------------------------------------------------

// function alertName(name) {
//   console.log(name);
// }
// alertName('Paulius');


// function generateRandomNumber() {
//   return Math.floor(Math.random() * 5) + 1;
// }
// generateRandomNumber();


// function NameLenght(personName, personsurname ) {
//   return personName.length + personsurname.length
// }

// console.log(NameLenght('Steve' , 'Jobs'))



// calculator--------------------------------------------------------

// function calculator(n1, n2, operator ) {
//     switch (operator) {
//       case 'sum':
//         return n1 + n2
//       case 'div':
//         return n1 - n2
//       case 'sub':
//         return n1 / n2
//       case 'multi':
//         return n1 * n2
//     }
//   }

// console.log(calculator(1, 2, 'multi'))



// function generateRandomNumber() {
//   return Math.floor(Math.random() * 10 + 1)
// }
// function squareNumber(number) {
//   return Math.pow(number, 2)
// }

// console.log(squareNumber(generateRandomNumber()))

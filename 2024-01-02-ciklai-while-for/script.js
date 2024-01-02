
// mano vardas konsoleje 10 kartu


// for (let i = 0; i < 10; i++) {
//     console.log('Paulius')
// }




// pridedam kintamuosius

// let name = 'Paulius'
// let count = 10


// for (let i = 0; i < count; i++) {
//     console.log(name)
// }






// atvaisduojame eiles nr prie vardo

// let name = 'Paulius'
// let count = 10


// for (let i = 0; i < count; i++) {
//     console.log(`${i}. ${name}`)
// }





// skaiciuoja iki 10

// pvz1
// let i = 10
// while(i > 0) {
//     console.log(i)
//     i--
// }

// pvz2
// for (let i = 10; i > 0; i--) {
//          console.log(i)
//     }
    







// vardas kartojasi 3 kartus 

// let vardas = 'paulius';
// let i = 3;
// while (i > 0) {
//   console.log(vardas);
//   i--;
// }







// formule kartoja varda tiek kartu kiek yra nurodyta 'times'

// let combo = ''
// let name = 'paulius'
// let times = 3
// do {
//     combo +=name
//     times--
// } while (times > 0)
// console.log(combo)




// Ciklai ir salygos uzduotys 


// skaicius nuo vieno iki penkiu 

// for (let i = 1; i <= 5; i++) {
//               console.log(i)
//          }






        
// skaiciuoja visu skaiciu suma nuo vieno iki penkiu

// let i = 1;
// let sum = 0;
// while (i <= 5) {
//     sum += i;
//     i++;
// }
// console.log(sum);






// Parašykite JavaScript for ciklą, kuris atspausdina visus lyginius skaičius nuo 2 iki 10.


// for (let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }








// Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 10 iki 1 atbuline tvarka.

// for (let i = 10; i >= 1;  i--) {
//         console.log(i)
//      }




// kiek yra skaiciu nuo 1-20 kurie dalijasi is 3 

// let count = 0
// let i = 1
// while (i <= 20) {
//     if (i % 3 === 0) {
//         count++
//     }
//     i++
// }
// console.log(count)









// Parašykite JavaScript programą, kuri randa didžiausią skaičių iš masyvo naudojant for ciklą.

// let numbers = [3, 7, 2, 8, 5]

// let max = numbers[0]
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i]
//     }
// }
// console.log(max)








// Sukurkite JavaScript funkciją, kuri išspausdina visus skaičiaus 15 daliklius.

// let num = 15
// for (let i = 1; i <= 15; i++) {
//     if (num % i ===0) {
//         console.log(i)
//     }
// }




// Sukurkite JavaScript programą, kuri naudojant for ciklą išfiltruoja ir atspausdina visus nelyginius skaičius iš masyvo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Nelyginius skaičius saugokite naujame masyve oddNumbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const oddNumbers = []
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i])
//     }
// }
// console.log(oddNumbers)




// Parašykite JavaScript ciklą, kuris atspausdina visus pirminius skaičius nuo 1 iki 20.

// for (let i = 1; i <= 20; i++) {
//     let isPrime = true;
//     if (i > 1) {
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(i);
//         }
//     }
// }



// Parašykite JavaScript programą, kuri naudojant for ciklą atspausdina pirmus dešimt Fibonačio sekos skaičius.

// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= 10; i++) {
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//     console.log(nextTerm);
// }







// Funkcija, kuri atspausdina pirmus n Fibonačio skaičius

// function printFibonacci(n) {
//     var fibArray = [];

//     for (var i = 0; i < n; i++) {
//         if (i <= 1) {
//             fibArray.push(i);
//         } else {
//             fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//         }
//     }

//     console.log("Pirmi " + n + " Fibonačio skaičiai:");
//     console.log(fibArray.join(", "));
// }

// // Spausdiname pirmus dešimt Fibonačio skaičius
// printFibonacci(12);
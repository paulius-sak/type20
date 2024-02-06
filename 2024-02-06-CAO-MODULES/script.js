import {multiFunc,} from "./module/multi.js"
let x = 2
let y = 3
const calcMulti = multiFunc(x, y)
console.log(calcMulti)



import {addHeader} from "./module/header.js"
addHeader(document.body)

import {addCar} from "./module/cars.js"

addCar(document.body)
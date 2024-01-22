// 1. Naudojant JS sukurti div elementą, į jį įdėti teksto. Div elementą pridėt prie ekrano;

const task1 = document.createElement('div')
task1.innerHTML = 'Pirma uzduotis'
document.body.appendChild(task1)

// 2. Per HTML turėti būt sukūrus DIV su id user-info-wrapper, sukurti h1 elementą su user vardu, sukurta h1 elementą pridėt į user-info-wrapper;

const task2 = document.createElement('h1')
task2.innerHTML = 'Paulius'
const userInfoWrapper = document.getElementById('user-info-wrapper')
userInfoWrapper.appendChild(task2)



// 3.  Sukurti h3 elementą su user pavarde, elementą pridėt į user-info-wrapper div'o pradžią;
const task3 = document.createElement('h3')
task3.innerHTML = 'Sakalys'
userInfoWrapper.prepend(task3)

// 4. Sukurti button bei div kuris yra 200px x 200px. Paspaudus button divas turi tapt žalias, antrą kart paspaudus - raudonas. Toliau spaudžiant mygtuką veiksmas turi kartotis;

let isGreen = false

const someFn = () => {
    const push = document.getElementById('push')
    
    const red = () => {
        push.style.backgroundColor = 'red'
        isGreen = true
    }
    const green = () => {
        push.style.backgroundColor = 'green'
        isGreen = false
    }


    isGreen ? green() : red()

}


// 5. Sukurti button'ą kurį paspaudus ekrane būtų rodomas random skaičius nuo 1 iki 10;

let num = 0

const numberDiv = document.getElementById('number')

const randomNumber = () => {
    let num =  Math.floor(Math.random() * 10) + 1
    numberDiv.innerHTML = num
}


// 6. Pridėti div'ui event listener, kiekvieną kart paspaudus ant divo, jis turi padidėt į aukštį bei plotį po 10px. Pradžioj div'as turi būt 100px x 100px

const task6 = document.getElementById('push')

let height = 200
let width = 200

function resizeFunction() {
    task6.style.width = width + 'px'
    task6.style.height = height + 'px'
    height += 10
    width += 10
}

task6.addEventListener('click', resizeFunction )


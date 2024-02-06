// 1. Išsibandyt modulinę struktūrą, eksportuot funkcijas bei jas importuojant;
// 2. Atskirame faile apsirašyt funkciją kuri priima masyvą su skaičiais bei gražiną mažiausią skaičių;
// 3. Atskirame faile apsirašyt funkciją kuri priima skaičių masyvą bei gražiną jų vidurkį;
// 4. Į funkciją paduoti žodį string pavidalu bei gaut masyvą kuriame būtu kiekviena žodžio raidė;
// 5. Į funkciją paduoti masyvą su skaičiais. Funkcija turi gražint skaičių sumą
const minArray = (arr) => {
    return Math.min(...arr)
}


const averageNumbers = (arr) => {
    const sum = arr.reduce((acc, val) => acc + val, 0)
    return sum / arr.length
}

const wordString = (word) => {
    return word.split('')
}

const NumbersSum = (nums) => {
    return nums.reduce((acc, val) => acc + val, 0)
}

export {minArray, averageNumbers, wordString, NumbersSum}
// Work with Float

function divideNumber(number, parts) {
    let a = number;
    let partsArray = [];
    let randSumm = 0;
    for (let i = 1; i < parts; i++) {
        let rand = Number((Math.random() * a).toFixed(2));
        partsArray.push(rand);
        randSumm += rand;
        a = a - rand;
    }
    partsArray.push(Number((number - randSumm).toFixed(2)));

    return partsArray;
}

console.log(divideNumber(2, 3));


// Work with Integer
function divideOnInteger(number, parts) {
    let a = number;
    let partsArray = [];
    let randSumm = 0;
    for (let i = 1; i < parts; i++) {
        let rand = Math.floor(Math.random() * a);
        partsArray.push(rand);
        randSumm += rand;
        a = a - rand;
    }
    partsArray.push(number - randSumm);

    return partsArray;
}

console.log(divideOnInteger(6, 3));
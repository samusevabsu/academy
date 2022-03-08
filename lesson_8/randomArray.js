function getArray() {
    let numberArray = [];
    return function generateRandomArray() {

        let randomNumber = Math.floor(Math.random() * 101);
        if (!numberArray.includes(randomNumber)) {
            numberArray.push(randomNumber);
        }
        if (numberArray.length < 100) {
            generateRandomArray();
        }
        return numberArray;
    }
}

let counter = getArray();

console.log(counter());

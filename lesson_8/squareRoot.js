function getPositivNumber (arr) {
    let positivArr = arr.filter(element => element > 0);

    return function() {
        let squareNumbers = positivArr.map(Math.sqrt);
        return squareNumbers;
    }

}

let squareRoot = getPositivNumber([1, -2, 3, 0, 4, -5, 6, -11]);
console.log(squareRoot());


/*
function newTest(num, test) {
    let a = test();
    console.log(num, a)
}

newTest(4, squareRoot);
*/

function calculateSummOfNumbers(num) {
    let arrNumber = num.toString().split("").map(Number);
    let summ = arrNumber.reduce((previous, current) => previous + current);

    if (summ <= 9) {
        console.log(summ)
    } else {
        calculateSummOfNumbers(summ)
    }
}

calculateSummOfNumbers(9999)
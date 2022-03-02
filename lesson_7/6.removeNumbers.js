function removeRepeatNumbers(arr) {
    let b = [];
    arr.forEach(element => {

        let elementWasFound = b.some(el => {

            return el == element

        })

        if (elementWasFound !== true) {
            b.push(element);
        }

    });
    console.log(b)
    return b;
}

removeRepeatNumbers([1, 2, 3, 2, 3, 4, 5, 6, 5])
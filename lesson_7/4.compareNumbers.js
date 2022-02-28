function compareValueAndPosition (firstNumber, secondNumber) {
    
    let firstArray = firstNumber.toString().split("").map(Number);
    let secondArray = secondNumber.toString().split("").map(Number);
    
    let newArray1 = [];
    let newArray2 = [];
    firstArray.forEach((currectValue, index) => {
        if(currectValue == secondArray[index]){
            newArray1.push(currectValue)
        }
        secondArray.forEach(element => {
            if(element == currectValue && firstArray.indexOf(currectValue) !== secondArray.indexOf(element)) {
                newArray2.push(element)
            }
        })
    });
    console.log(`Same value and position: ${newArray1.length} Same value: ${newArray2.length}`);
    
}

compareValueAndPosition(3487, 3794)
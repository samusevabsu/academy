function countCalls () {
    let count = 1;

    return function() {
        return count++
    }

}

let counter = countCalls();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
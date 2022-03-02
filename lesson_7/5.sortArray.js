// Sort from min to max

function sortArrayMin(arr) {
    arr.sort((a, b) => a - b)
    console.log(arr);
    return arr;
}

sortArrayMin([1, 4, 6, 5, 3, 2]);


// Sort from max to min

function sortArrayMax(arr) {
    arr.sort((a, b) => b - a)
    console.log(arr);
    return arr;
}



sortArrayMax([1, 4, 6, 5, 3, 2]);
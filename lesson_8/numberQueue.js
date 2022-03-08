function oneByOneWithLength(arr, n) {

    if (n == 0) {
        console.log(arr[n]);
    } else {
        oneByOneWithLength(arr, n-1);
        console.log(arr[n]);

    }
}

function returnNumberOneByOne(arr) {
    
    let len = arr.length - 1;
    oneByOneWithLength(arr, len);
}

returnNumberOneByOne([1, 2, 3, 4])
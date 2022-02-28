
function fibonacci(n) {
    let fibArray = [0, 1];

    for (let i = 0; i < n; i++) {

        fibArray.push(fibArray[i] + fibArray[i+1])
    
    }

    console.log(fibArray)

    // let a = true;
    // let i = 0;

    // while (a == true) {
    //     fibArray.push(fibArray[i] + fibArray[i+1])
    //     i++
    //     if (fibArray.length-1 == )
    // }

}

fibonacci(7)
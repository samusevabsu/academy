function test(arr) {
    let a = arr.reduce(function (pr, cur) {
        return Math.max(pr, cur)
    })
    console.log(a)
    return a;
}

test([3, 67, 15, 101, 100])
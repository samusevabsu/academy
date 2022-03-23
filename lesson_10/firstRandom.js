function randomTime() {
    return Math.floor(Math.random() * (5 - 1 + 1));
} 

let promiseOne = new Promise((resolve, reject) => {
    let randomTime1 = randomTime();
    setTimeout(() => {
        resolve(1);
        //console.log(randomTime1);
    }, randomTime1)
})

let promiseTwo = new Promise((resolve, reject) => {
    let randomTime2 = randomTime();
    setTimeout(() => {
        resolve(2);
        //console.log(randomTime2);
    }, randomTime2)
})

let promiseThree = new Promise((resolve, reject) => {
    let randomTime3 = randomTime();
    setTimeout(() => {
        resolve(3);
        //console.log(randomTime3);
    }, randomTime3)
})

Promise.race([promiseOne, promiseTwo, promiseThree])
    .then(alert);
    //.then(console.log);

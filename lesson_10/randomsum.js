
function randomTime() {
    return Math.floor(Math.random() * (5 - 1 + 1));
} 

let promiseOne = new Promise((resolve, reject) => {
    let randomTime1 = randomTime();
    setTimeout(() => {
        resolve(randomTime1);
        console.log(randomTime1);
    }, randomTime1)
})

let promiseTwo = new Promise((resolve, reject) => {
    let randomTime2 = randomTime();
    setTimeout(() => {
        resolve(randomTime2);
        console.log(randomTime2);
    }, randomTime2)
})

let promiseThree = new Promise((resolve, reject) => {
    let randomTime3 = randomTime();
    setTimeout(() => {
        resolve(randomTime3);
        console.log(randomTime3);
    }, randomTime3)
})

Promise.all([promiseOne, promiseTwo, promiseThree])
    .then(([promiseOne, promiseTwo, promiseThree]) => {
        alert(promiseOne + promiseTwo + promiseThree)
    })


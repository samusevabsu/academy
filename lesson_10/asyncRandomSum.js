// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2,
// а затем найдет сумму полученных чисел и выведет на экран.

function randomNum() {
    return Math.floor(Math.random() * (5 - 1 + 1));
}

function randomNum2() {
    return Math.floor(5 + Math.random() * (10 + 1 - 5));
}

function getNum1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = randomNum();
            resolve(a);
            console.log(a);
        }, 3000)
    })
}

function getNum2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let b = randomNum2();
            resolve(b);
            console.log(b);
        }, 5000)
    })
}

async function getSum() {
    let promiseOne = await getNum1();
    let promiseTwo = await getNum2();
    let sum = promiseOne + promiseTwo;
    console.log(sum);
    alert(sum);
    return sum;
}

getSum();





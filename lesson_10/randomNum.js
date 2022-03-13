function randomTime() {
    return Math.floor(Math.random() * (5 - 1 + 1));
} 

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(randomTime())
            console.log('good');
        }, 3000)
    })
}

async function getSquare() {
    let num = await getNum();
    alert(num * num);
    return num * num;
}

getSquare()
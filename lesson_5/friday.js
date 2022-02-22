function getFridayScore() {
    let startDate = new Date(2020, 0, 13);
    let currentDate = new Date();
    let counter = 0;

    while (startDate < currentDate) {

        if (startDate.getDay() == 5) {
            counter += 1
        }
        startDate.setMonth(startDate.getMonth() + 1);
    }
    return counter;
}

console.log(getFridayScore());
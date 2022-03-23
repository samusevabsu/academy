class Cucumber {
    constructor() {
        this.cal = 10;
    }  
}

class Tomato {
    constructor() {
        this.cal = 20;
    }  
}

class Olive {
    constructor() {
        this.cal = 30;
    }  
}

class SaladFactory {

    cookSalad(cucumberCount, tomatoCount, oliveCount) {

        let cucumbers = [];
        let tomatos = [];
        let olives = [];
        

        for (let i = 1; i <= cucumberCount; i++){
            cucumbers.push(new Cucumber())
        }

        for (let i = 1; i <= tomatoCount; i++){
            tomatos.push(new Tomato())
        }

        for (let i = 1; i <= oliveCount; i++){
            olives.push(new Olive())
        }

        let salad = cucumbers.concat(tomatos, olives);
        this.salad = salad;
        return this;
    }

    countCalories() {
        let calSum = 0;
        this.salad.forEach(ingridient => {
            calSum = calSum + ingridient.cal;
        })
        console.log(`Olivie consist of ${calSum} calories`)
    }
}

let olive = new SaladFactory();
olive.cookSalad(10, 1, 1).countCalories();


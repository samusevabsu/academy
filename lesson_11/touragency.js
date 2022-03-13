class Tour {

    constructor(cost, days, food) {
        this.cost = cost;
        this.days = days;
        this.food = food;
    }

}

class SightseeingTour extends Tour{

    constructor(cost, days, food, sight) {
        super(cost, days, food);
        this.sight = sight;
    }
}

class ShoppingTour extends Tour {

    constructor(cost, days, food, store) {
        super(cost, days, food);
        this.store = store;
    }

}

let greeceSightTour = new SightseeingTour(500, 2, 'Breakfast', 'Olympus');
let minskSightTour = new SightseeingTour(200, 1, 'All inclusive', 'Old Town');
let turkeyShoppingTour = new ShoppingTour(300, 3, 'Breakfast', 'Grand Bazar');
let polandShoppingTour = new ShoppingTour(400, 5, 'Breakfast', 'Krakow Gallery');

let tours = [];
tours.push(greeceSightTour, minskSightTour, turkeyShoppingTour, polandShoppingTour);


class TourAgent {

    constructor(tours) {
        this.tours = tours;
    }

    findTours(days) {
        let toursArrayByDays = [];
        this.tours.forEach(element => {
            if(element.days <= days){
                toursArrayByDays.push(element)
            }
        });
        console.log(toursArrayByDays);
        return toursArrayByDays;
        
    }

    sortByCost(toursArrayByDays, keyName) {
        console.log(toursArrayByDays.sort((a, b) => a[keyName] > b[keyName] ? 1 : -1));

    }
}

let agent = new TourAgent(tours);

let toursArrayByDays = agent.findTours(4);
agent.sortByCost(toursArrayByDays, 'cost');


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

class TourAgent {

    constructor() {
        this.tours = [];
        this.toursArrayByDays = [];
    }

    createTour(tourType, params) {
        let individulTour = (tourType === 'sightseeing') ? new SightseeingTour(params[0], params[1], params[2], params[3]) :
            (tourType === 'shopping') ? new ShoppingTour(params[0], params[1], params[2], params[3]) :
            new Error('There is no such Tour. Pleae choose Shopping or Sightseeing')
            
        this.tours.push(individulTour);
        return this;
    }

    // getCreatedTours() {
    //     console.log(this.tours);
    //     return this;
    // }


    findToursUpToDays(days) {
        this.tours.forEach(element => {
            if(element.days <= days){
                this.toursArrayByDays.push(element)
            } else {
                new Error('Sorry, We have no available tours for you')
            }
        });
        return this;
        
    }

    sortByCost(keyName) {
        this.toursArrayByDays.sort((a, b) => a[keyName] > b[keyName] ? 1 : -1);
        return this;
    }

    getTotalToursCost() {
        let generalTourCost = this.toursArrayByDays.map(tour => tour.cost).reduce((pricePr, priceCur) => {
            return pricePr + priceCur;
        }, 0)
        console.log(generalTourCost);
    }

}

let agent =  new TourAgent();
agent.createTour('sightseeing', [3000, 6, 'lunch', 'bazar']);
agent.createTour('shopping', [2000, 10, 'brekfast', 'old town']);
agent.createTour('shopping', [1000, 1, 'brekfast', 'old town']);

agent.findToursUpToDays(6).sortByCost('cost').getTotalToursCost();




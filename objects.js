
let offer = "none";
let time = 1200;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappucino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot Chocolate"
    ],
    breakfastOffer: "Free smoothie with bacon",
    lunchOffer: "Free pizza with tomato juice",
    noOffer: "Sorry no offer"
};
    if (time < 1100){
        offer = cafe.breakfastOffer;
        console.log(cafe.breakfastOffer);
    }
    else if (time < 1500){
        offer = cafe.lunchOffer;
        console.log(cafe.lunchOffer);
    }

// Activity person

const person = {
    name: "Elliot",
    age: 26,
    songs: [
        "Can't Stop",
        "Trumpets",
        "Left Hands Free"
    ],

    sayHi() { 
        return `Hello my name is ${this.name}`
    }
}
        // console.log(person.songs)  // To get the specific item in the object
console.log(person.sayHi())
    
// Alarm Activity

let day = "saturday";

const alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "Get up at 7am"
}
    if (day == "saturday" || day == "sunday") {
        alarmClock = alarm.weekendAlarm
        console.log(alarm)
    }
    else {
        alarmClock = alarm.weekdayAlarm
        console.log(alarm)
    }
    
// Activity 2

const pet = {
    name: "Bella",
    typeOfPet: "Poodle",
    age: 12,
    colour: "White",
    eat: "avocado",

    myGuy() {
        return `${this.name} is eating ${this.eat}`
    }
}
console.log(pet.myGuy())

// Activity 3

const coffeeShop = {
    branch: "Ohio",
    drinks: "smoothie",
    drinksPrices: 4,
    food: "panini",
    foodPrices: 6,

    drinksOrdered() {
        return `${drinks}`
    
    foodOrdered() {
        return `${food}`
    
    }
    }



}
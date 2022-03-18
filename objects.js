
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
// Tried to do this question but found it impossible with the knowledge I have. Will use this as a review.
drinksOrder = [
    "Espresso",
    "Americano",
    "Latte"
]
foodOrder = [
    "Biscuit",
    "Cake"
]
coffeeShop = {
    branch : "Costa",
    drinks : [
        "Espresso", 
        "Cappuccino", 
        "Latte" ,
        "Americano", 
        "HotChocolate", 
        "Tea"
    ],
    drinkPrices : [
        1.50,
        4,
        3,
        3.50,
        2.50
    ],
    food: [
        "Sandwich",
        "Salad" ,
        "Snack" ,
        "Biscuit" ,
        "Cake"
    ],
    foodPrices: [
        4,
        4.58,
        3,
        1,
        3.50
    ],
    drinksOrdered() {
        drinksBill = []
        for (let i = 0 ; i < drinksOrder.length ; i++) {
            for (let j = 0; j < coffeeShop.drinks.length; j++) {
                if (drinksOrder[i] == coffeeShop.drinks[j]){
                    drinksBill.push(j)
                }
                
            }
        }
    
        console.log('------------------')
        console.log(`Your drinks order is:\n`)
        sum = 0
        for (l = 0; l < drinksBill.length; l++) {
            console.log(`${coffeeShop.drinks[drinksBill[l]]} ${coffeeShop.drinkPrices[drinksBill[l]]}`)
            sum += coffeeShop.drinkPrices[drinksBill[l]]
        }
        console.log('------------------')
        console.log(`Total: £ ${sum} \n`)
        return(sum)
        },
    
    foodOrdered() {
        foodBill = []
        for (let i = 0 ; i < foodOrder.length ; i++) {
            for (let j = 0; j < coffeeShop.food.length; j++) {
                if (foodOrder[i] == coffeeShop.food[j]){
                    foodBill.push(j)
                }
                
            }
        }
    
        console.log('------------------')
        console.log(`Your food order is:\n`)
        sum = 0
        for (l = 0; l < foodBill.length; l++) {
            console.log(`${coffeeShop.food[foodBill[l]]} ${coffeeShop.foodPrices[foodBill[l]]}`)
            sum += coffeeShop.foodPrices[foodBill[l]]
        }
        console.log('------------------')
        console.log(`Total: £ ${sum} \n`)
        return(sum)
    }
    
}
// total
let foodSum = coffeeShop.foodOrdered()
let drinkSum = coffeeShop.drinksOrdered()
console.log(`Grand Total: £ ${foodSum + drinkSum}`)
// Arrays and Loops

// Array syntax
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];
console.log(coffeeOrder)

// First one always counts as 0
console.log(coffeeOrder[2])

// It's possible to change a specific segment
coffeeOrder[1] = "Ann - Vanilla Latte"
console.log(coffeeOrder)

// Length shows how many in the list there is 
console.log(coffeeOrder.length)

// .push adds something to the end of an array
coffeeOrder.push("Chris - Hot Chocolate");
console.log(coffeeOrder)

// .pop removes the last thing in the array 
coffeeOrder.pop();
console.log(coffeeOrder)

// Activity 1
let favouriteSongs = [
    "popsmoke - Dior",
    "XXX - Joceyln Flores",
    "Red Hot - Can't Stop"
]
console.log(favouriteSongs)

favouriteSongs.push("Alt J - Breezeblocks")
favouriteSongs.push("Maroon 5 - Candycrush")
favouriteSongs.pop()
console.log(favouriteSongs)

// Activity 2 
let arrayExample = [3, 5, 9, 83]
let mapExample = arrayExample.map(X => X * 2)
console.log(mapExample) //.map calls all the elements inside the array

// Activity 3
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement); //.shift removes the first element and then calls it
// expected output: 1

// Loops with arrays (for)
let favColour = ["blue", "yellow", "red", "green", "orange", "pink"];
for(let i = 0; i < favColour.length; i++){
    console.log(favColour[i])
}
// Loops with if statements
let multiplesTwo = [];
for(let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`)

// Loops (While)
let age = 15;
while( age < 18){
    console.log("You're a child!");
    age++;
}
console.log("You're an adult")

// While with playing cards
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade"){

    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)]
}
console.log(currentCard)

// Activity 1
let favouriteFilms = ["Titanic", "Deadpool", "One Punch Man", "Ghostbusters", "Mulan"];
console.log(favouriteFilms)
favouriteFilms.push("Harry Potter", "SAW");
console.log(favouriteFilms)
for(let i = 0; i < favouriteFilms.length; i++){
    console.log(favouriteFilms[i])
}

// Activity 2
for (let i = 0; i <6; i++) {
    console.log(Math.floor(Math.random() * 50))
    }

// Activity 3
let backwards = [];
for(let i = 9; i >= 0; i--){
    if (i % 1 == 0){
        backwards.push(i);
    }
}
console.log(backwards)

// Activity 4
let movies = ["Peter Pan", "Recess", "Ghostbusters", "The Hobbit"];
for(let i = 0; i < movies.length; i++){
    if (movies[2] = "Ghostbusters") {
        console.log("Yay its Ghostbusters")
    }
    else {
        console.log("sorry it's not Ghostbusters")
    }
    break
}

// Activity 5


for(let i = 0; i < 6; i++) {
    let result1 = Math.floor(Math.random()*30);
    if (result1 % 7 == 0) {
        console.log(`The number ${result1} can be divided by 7`)
    }
    else {
        console.log(`The number ${result1} cannot be divided by 7`)
    }}

// Activity 6
let bobsFollowers = ["john", "michael", "harry", "peter"]
let kimsFollowers = ["hunter", "peter", "ashley", "tyrone"]
 for (let i = 0; i < bobsFollowers.length; i++){
   for (let j = 0; j < kimsFollowers.length; j++){
     }
     if (bobsFollowers[i] === kimsFollowers[i]){
         console.log(`${bobsFollowers[i]} is in both arrays!`)
   }
 }

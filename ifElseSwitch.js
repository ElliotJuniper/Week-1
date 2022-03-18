// == >> equal
// === >> strict equal (value and type has to be the same) e.g. 1 [number] and "1" [string]
// != >> not equal
// !== >> strict not equal

let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny") {
console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
console.log("obvs");
}
else {
console.log("What it's not raining?");
}
// && >> both conditions have to be met
// || >> either condition can be met for the code to run

// ***switch***

let car = "BMW";

switch(car){
    case "Ford":
    case "GM":
        console.log("American car!");
        break;
    case "BMW":
    case "AUDI":
        console.log("You have a nice german car");
        break;
    case "Kia":
    case "Hyundai":
        console.log("You have a Japanese car");
        break;
    default:
        console.log("You dont have a car bro")
}

// Activity 1
let age = 17;
if (age > 17) {
    console.log("Yes I can serve you");
}
else {
    console.log("You are not old enough");
}

// Activity 2
let pizzaTopping = ("Ham");
switch(pizzaTopping){
    case "Ham":
        console.log("this is an important topping for me");
        break;
    case "Salami":
        console.log(`I dont mind having ${pizzaTopping} on my pizza`)
        break;
    case "Anchovies":
        console.log("EWWWW get that away from me ")
}

// Activity 3
let password = "71817238";

if (password.length < 8) {
    console.log("Password too short")
}
else {
    console.log("Perfect password")
}

// Activity 4
let num = 4
if (num % 3 == 0 || num % 5 == 0) {
    console.log("This number is divisible by 3 or 5")
}
else {
    console.log("This is not divisible by 3 or 5")
}

// Activity 5 
let num1 = 30
if (num1 % 3 == 0 && num1 % 5 == 0) {
    console.log("fizz buzz")
}
else if (num1 % 3 == 0) {
    console.log("fizz")
}
else if (num1 % 5 == 0) {
    console.log("buzz")
}
else {
    console.log("not divisible")
}

// Activity 6
let palindrome = 1010101
let reverse = palindrome.toString().split("").reverse().join('')

if (palindrome == reverse) {
    console.log("Hoorah this is a palindrome")
}
else {
    console.log("BOOOO not a palindrome")
}

// Activity 7
let time = 7
let work = "B&Q"
let town = "Manc"
if (time >= 9 && time <= 6) {
    console.log(`I am working at ${work}`)
}
    
else if  (time >= 8 && time <= 19) {
    console.log("I am commuting")
}   
else {
    console.log(`I am at home in ${town}`)
}

// Activity 8
const string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
const position = string.substring(string.length -1)

const a = string.lastIndexOf("a")
const e = string.lastIndexOf("e")
const i = string.lastIndexOf("i")
const o = string.lastIndexOf("o")
const u = string.lastIndexOf("u")

console.log(a,e,i,o,u)

/*if (a > position) {
    console.log(a)
}
else if (e > position) {
    console.log(e)
}
else if (i > position) {
    console.log(i)
}
else if (o > position) {
    console.log(o)
}
else if (u > position) {
    console.log(u)
}
else {
    console.log("no vowels")
}*/

// Activity 9 
let word = "ajwja"
if (word.charAt(0) == word.slice(-1)) {
    console.log("True")
}
else {
    console.log("False")
}

// Activity 10
let number1 = 187
let number2 = 3213
if (number1 * number2 % 2 == 0) {
    console.log("Even")
}
else {
    console.log("Odd")
}
               

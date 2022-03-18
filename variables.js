// let >> is used for declaring a vlaue that CAN be changed
//const >> is used for declaring a value that CANNOT be changed. const = constant
//var >> declaring a value that CAN be changed. However, it is considered a legacy command ***DONT USE***

const firstName = "Elliot";
const secondName = "Juniper";
let age = 26;

console.log(firstName, secondName)
console.log(age)

age = 30    //'let' allows you to change, 'const' cannot be changed
console.log(age)

//Operators
// + >> add
// - >> minus
// * >> multiply
// ** >> to the power
// / >> divide
// % >> remainder  (use to dfigure out if a number is odd or even)
// ++ >> increment (increase by 1 unless specified)
// -- >> decrement (decrease by 1 unless specified)

console.log(4726-210)
console.log(9**3)

//Assignment Operators
// = 
// 

let i = 10;
console.log(i)
i = i + 2;
console.log(i)
// *instead do this*
i += 4;
console.log(i)

// ***camelCase***
// favouriteDrink
// thisNumber
// firstName

let favouriteDrink = "coffee";
let name = "Elliot";
console.log(favouriteDrink)
console.log("My favourite drink is " + favouriteDrink)

// Temperate Literals
console.log(`Hi my name is ${name}. My favourite drink is ${favouriteDrink}.`)

name = "Juniper";
favouriteDrink = "Beer";
console.log(`Hi my name is ${name}. My favourite drink is ${favouriteDrink}.`)

// Activity 1
let theirName = "Joanne";
let colour = "azul blue"

console.log(`Hi my name is ${theirName} and my favourite colour is ${colour}.`)

theirName = "Boris";
colour = "golden yellow"

console.log(`Hi my name is ${theirName} and my favourite colour is ${colour}.`)

// Activity 2
let breakfast = "croissant";
let lunch = "bread";
let dinner = "pie";

console.log(`For breakfast I had ${breakfast}, then for lunch I had ${lunch} and finally for dinner I had a ${dinner}.`)

//Activity 3
const oneDay = 24 * 60 * 60 * 1000;
const todayDate = new Date(2022, 3, 15);
const myBirthday = new Date(2023, 1, 26);

const diffDays = Math.round(Math.abs((todayDate - myBirthday) / oneDay));

console.log(`Number of days until my next birthday is ${diffDays}`)

// Activity 4

let varName = "X";
let varName2 = "O";
let space = " ";
console.log("      |       |     ")
console.log(`   ${varName}  |   ${varName2}   |  ${space}   `)
console.log("      |       |     ")
console.log("---------------------")
console.log("      |       |     ")
console.log(`   ${varName}  |   ${varName}   |  ${space}   `)
console.log("      |       |     ")
console.log("---------------------")
console.log("      |       |     ")
console.log(`   ${varName2}  |   ${space}   |  ${space}   `)




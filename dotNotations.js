// console.log(i) >> effectively print in python
// Data Types >> strings, numbers, boolean, undefined, null, symbol
console.log("Hello World")
console.log("hello".toUpperCase())
console.log("       hello          ".toUpperCase().trim())


console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))


// Activity
console.log("     |    |")
console.log("     |    |")
console.log("     |    |")
console.log("  ------------")
console.log("     |    |")
console.log("     |    |")
console.log("     |    |")
console.log("  ------------")
console.log("     |    |")
console.log("     |    |")
console.log("     |    |")




//function personal(age)
//personal = prompt("Please enter your age:", "Type here")

const myName = "Elliot"
const myAge = 26
const mySign = "Aquarius"

const output = `
My name is ${myName}
My age is ${myAge}    
My star sign is ${mySign}    
`
console.log(output)




console.log("26")
console.log("Elliot")
console.log("Aquarius")

function age(number) {
    let ageseconds = new Date() - new Date(number);
    return Math.floor(ageseconds/1000/60/60/24/365); 
 }
 console.log(age('1996-01-26'));






//function jackpot()
/*function num(answer) {
    let result = console.log(Math.floor(Math.random()*100)) 
        if (answer > 50) {
            result = "You have been shortlisted for our next round";
        } 
        else {
            result = "Better luck next year pal.";
        }
        return result;
    }
console.log(num(result));*/

let result = Math.floor(Math.random()*100); 
    if (result < 30) {
        console.log(result);
        console.log("You SUCK");
    } 
    else if (result < 60) {
        console.log(result);
        console.log("You the MAN");
    } 
    else if (result < 80) {
        console.log(result);
        console.log("I can feel your ENERGY");
    } 
    else {
        console.log(result)
        console.log("YEAAAA")    
    }












// Caluclating age with prompt:
/*var year_born = prompt("Please enter your date of birth:", "Type here");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
alert("Hello, " + "you are " + calculatedAge + " years old!");*/

/*function name() {
    let answer = prompt("What is your name?");

    console.log(answer);
}*/

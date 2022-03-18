const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
pressGrindBeans();


// With if statements
let coffeeIsGrinding = false;

const pressGrindBeans1 = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
    //    coffeeIsGrinding = false;
    }  else {
        console.log("Grinding is about to begin");
    //    coffeeIsGrinding = true;
    }
}
pressGrindBeans1();

// Bank 
const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(800, 28374618);
cashWithdrawal(200, 98797989);
cashWithdrawal(9000, 67989887);

// Global variable can be used
let accnumber = 50278194;

const cashWithdrawal1 = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal1(111, accnumber);
cashWithdrawal1(222, 98797989);
cashWithdrawal1(333, 67989887);

// Adding
const addUp = (num1, num2) => {
    return num1 + num2;
}
console.log(addUp(9, 4));

// Weather Example
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
}
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log(`The temperature is ${getFahrenheit(15)} F`)

// Activity 1
let factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    }
        else {
            return (n * factorial(n-1));
        }
    }    
    
console.log(factorial(45))

// Activity 2
let orderCount = 1;

const takeOrder = (topping1, topping2) => {
    console.log(`${orderCount} Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder("pineapple", "ham");
takeOrder("cheese", "basil");

// Activity 3
const cashWithdrawal2 = (dollar, pin) => {
    let balance = 2000
    let newBalance = balance - dollar
    let pin1 = 8912
    if (pin == pin1 && dollar < balance) {
        
        console.log(`YAY You would like to withdraw ${dollar}, you're new balance is ${newBalance}`)
         
    }        
    else if (pin != pin1 && dollar < balance) {
        console.log("Wrong Pincode");

    }       
    else if (pin == pin1 && dollar > balance) {
        console.log("Not enough money");
    }
    else {
        console.log("Not enough money in account");
    }
} 

cashWithdrawal2(1000, 8912)
    


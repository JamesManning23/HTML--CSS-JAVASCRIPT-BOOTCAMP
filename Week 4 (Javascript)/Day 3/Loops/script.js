/ Arrays

// Learning Objectives:

// - To understand what an array is
// - To explore how arrays can be used.
// - To make use of array methods.
// - To explore loops and integrate them into your code.

// Array - [] - indicated by square brackets
// Contains a list of data

// Zero-Index - First item starts at index of 0 rather than 1 

let coffeeOrder = [
    "James - Americano",
    "Hannah - Frappuccino",
    "Alex - Latte"
];

// console.table(coffeeOrder);
console.log(coffeeOrder);

// Access specific items by referencing the items index in square brackets - "array[1]"
console.log(coffeeOrder[1]);
// We can also use bracket notation to update or set new items by their index
coffeeOrder[1] = "Hannah - Tea";
coffeeOrder[3] = "New Array Item";
console.log(coffeeOrder);
console.log(coffeeOrder[3]);

// Arrays have properties such as .length which identifies how many items are within it
console.log(coffeeOrder.length);

// Array methods allow us to manipulate array data and do various things with it

// .push() adds a specified item to the end of the array 
coffeeOrder.push("Christian - Water");
console.log(coffeeOrder);

// .pop() removes the last item in an array 
coffeeOrder.pop();
console.log(coffeeOrder);


// Loops 

let colours = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Black",
    "Purple",
    "Pink",
    "Brown",
    "Gold",
    "Silver",
    "Bronze"
];

// console.log(colours[0]);
// console.log(colours[1]);
// console.log(colours[2]);
// console.log(colours[3]);
// console.log(colours[4]);
// console.log(colours[5]);
// console.log(colours[6]);
// console.log(colours[7]);
// console.log(colours[8]);

// console.log(colours.length);
// console.log(colours[0]);

// For Loop - Allows us to loop through a block of code a specific number of times

// for (let i = 0; i < colours.length; i++) {
//     // Loop Body - Code that will run each time our loop executes
//     console.log(colours[i]);
// }


// Multiples of 2 example
let multiplesTwo = [];

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        multiplesTwo.push(i);
    }
}

console.log(multiplesTwo);


// While Loop - Runs code while a condition is true
let number = 0;

while (number < 10) {
    console.log(number);
    number++;
}

// While Loop - Card Game Logic
let cards = ["Hearts", "Diamonds", "Clubs", "Spades"];
let currentCard = "";

while (currentCard !== "Spades") {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(`Your card suit is: ${currentCard}`);
    if (currentCard === "Spades") {
        console.log("GAME OVER! You drew a Spade");
    }
}

// Do While Loop - Will always run the loop at least once 
// It runs once then checks the condition

let num = 2;

do {
    console.log(num)
} while (num < 1);

// break example

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }
    console.log(i);
}

// For of Loop - Iterate over an array or a string

let weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    "Friday"
];

for (let day of weekdays) {
    console.log(day);
}

let string = "Hello";

for (let character of string) {
    console.log(character);
}
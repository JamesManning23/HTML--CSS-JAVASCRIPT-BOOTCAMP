function greeting() {
    console.log("hello")
}

greeting();


// hoisting. calling a function before it has been declared.




let userOnline = false;

function toggleUserStatus() {
    if (userOnline) {
        userOnline = false;
        console.log("User Signed Out")
    } else {
        userOnline = true;
        console.log("User Signed In")
    }
}


toggleUserStatus();
toggleUserStatus();
toggleUserStatus();
toggleUserStatus();
toggleUserStatus();


// parameters and arguments:
// parameter is a value that a function requires to run correctly
// parameters are defined whena function is declared

function atm(accountNum, amount) {
console.log(`Account Number:${accountNum}
Amount: ${amount}`)
}

atm(5738, 678);

// arguments are values passed to a parameter:
// arguments are passed to the function when we call a function.
// Scopes:
// anything that is containe within a block of code is locally scoped. anything outside a block of code is considered the gloval scope. 


// nested funciions/inner below:

function quadruple(num) {
    function double(num) {
    return num * 2
    }
    return double(num) * 2;
}

console.log(quadruple(4));


// different function syntax:

function squaredDeclaration(num) {
    return num * num;

}

console.log(squaredDeclaration(4));

// arrow function cant be hoisted, 
const arrowFunction = (num) => {
    return num * num;
}

console.log(arrowFunction(5));

// "anonymous function" - 


// Functions

// Learning Objectives:

// - To explore functions and look at how they work
// - To incorporate functions into our code
// - To recognise the different types of function syntax

// Hoisting - Refers to calling a function before it has been declared
greeting();

// Function Declaration - Can be hoisted
function greeting() {
    console.log("Hello World");
}

// Function call - remember to add brackets()
greeting();

// User Login / Logout Example
let userOnline = false;

function toggleUserStatus() {
    if (userOnline) {
        userOnline = false;
        console.log("User signed out.");
    } else {
        userOnline = true;
        console.log("User signed in.");
    }
}

toggleUserStatus();
toggleUserStatus();

// Parameters and Arguments

// Parameter is a value that a function requires in order to run correctly.
// Parameters are defined when a function is declared.
function atm(accountNum, amount) {
    console.log(`
    Account Number: ${accountNum}
    Amount: £${amount}.00
    `);
}

// Arguments are the data we pass to fulfill the set parameters.
// Arguments are passed to the function call when we call a function.
atm(12345678, 200);

// Scope
const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
    const name = "Sarah";
    const age = 22;

    return `${name} is ${age} and lives in ${city}`;
}

console.log(getPersonInfo());

// Nested / Inner Functions
function quadruple(num) {
    function double(num) {
        return num * 2;
    }
    return double(num) * 2;
}

console.log(quadruple(20));

// Different Function Syntax

// Function Declaration Syntax
function squaredDeclaration(num) {
    return num * num;
}

console.log(squaredDeclaration(10));

// Arrow Function Syntax - Cannot be hoisted
const squaredArrow = (num) => {
    return num * num;
}

// Arrow Function Implicit Return (Only possible on one line)
// const squaredArrow = (num) => num * num;

console.log(squaredArrow(5));

// "Anonymous" Function
const squaredAnon = function (num) {
    return num * num;
}

console.log(squaredAnon(3));

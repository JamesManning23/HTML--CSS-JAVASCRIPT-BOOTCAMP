// Tasks:
// 1: Write a function that takes in a first name and a surname as arguments and returns a message greeting them.
// 2: Write a function that takes in a string as an argument and sorts the string into alphabetical order and returns the result.
// 3: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as an argument and compares the pin and withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient approve the transaction, if not decline the transaction.


// Task 1:


const arrowOne = (firstname, lastname) => {
    return `Welcome to London ${firstname} ${lastname}`
}

console.log(arrowOne('James', 'Manning'));

// task 2: 

function myFunction(str) {
return str.split("").sort().join("");
}

console.log(myFunction("hello"));


// task 3:

function cashmachine(withdrawalamount, pinnumber) {
    let amount = 200;
    let password = 6543;

if (withdrawalamount === 200 && pinnumber === 6543) {
    return("Transaction Is Approved")
} else {
    return("Transaction Is Not Approved")
}

}

console.log(cashmachine(200, 6543));
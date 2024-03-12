// [11:21] Christian Perry
// Tasks:
// 1:  Write a conditional statement to check a customer’s age at a bar. If the customer is under 18 log a message advising they are too young, otherwise ask what they would like to drink.
// 2: Declare a variable called "Password". Write an if statement that checks how many characters are in the password, if the password has more than 8 characters log the password to the console, if the password has less than 8 characters log to the console that the password is too short.
// 3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, if so log "This number is divisible by 3 or 5" to the console. Otherwise log an alternate message to the console.
// 4: Create a variable that stores a number. If the number is divisible by 3, log "fizz" to the console. If the number is divisible by 5 log "buzz" to the console. If the number is divisible by both 3 and 5, log "fizz buzz" to the console. Otherwise log the number to the console.


// task 1 below:

let customerAge = 17;

if (customerAge < 18) {
    console.log("Im Sorry, You Are Too Young To Have any Alcohol")
} else {
    console.log("What Can I Get You To Drink?")
}

// task 2:


const passwordVariable = "javscript";
if (passwordVariable.length < 8) {
    console.log("the password has more than 8 characters")
} else if (passwordVariable.length > 8) {
    console.log("the password is too short")
}

// task 3:

let numberVariable = 8;

if (numberVariable % 3 === 0 || numberVariable % 5 === 0) {
    console.log("This Number is Divisible by 3 or 5")
} else {
    console.log("This Number is Not divisible by 3 or 5")
}


//  task 4:

let numberVariable1 = 9;

switch (true) {
    case numberVariable1 % 3 === 0 && numberVariable1 % 5 === 0:
        console.log("fizz buzz")
        break;
    case numberVariable1 % 3 === 0:
        console.log("fizz")
        break;
    case numberVariable1 % 3 === 0:
        console.log("buzz")
        break;
    default:
        console.log("no fizz buzz");
}
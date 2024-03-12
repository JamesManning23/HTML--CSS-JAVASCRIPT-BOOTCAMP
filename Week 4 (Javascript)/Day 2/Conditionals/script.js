
let day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Weekend is over! Happy Monday!")
        break;
    case "Tuesday":
        console.log("Second day of the week!")
        break;
    case "Wednesday":
        console.log("Halfway through the week!")
        break;
    case "Thursday":
        console.log("It's almost Friday!")
        break;
    case "Friday":
        console.log("Happy Friday!")
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the Weekend!")
        break;
    default:
        console.log("Day not recognised. Try again.");
};




let name1 = "jame1";

switch (name1) {
    case "james":
        console.log("My Name is James");
        break;
    default:
        console.log("Name Not Recognized");
}



let testScore = 60;

switch (true) {
    case testScore >= 70:
        console.log("distinction")
        break;
    case testScore >= 60:
        console.log("failed")
}









// Equal To - Comparison Operator - "=="

let a = 10;
console.log(a == 11);

// If Statement

let weather = "Foggy";

if (weather === "Sunny") {
    // Code that runs if the condition evaluates to true
    console.log("Bring your sunglasses!");
}

// If Else Statement

if (weather === "Sunny") {
    console.log("Bring your sunglasses!");
} else {
    console.log("Not too sure at the moment.");
}

// If Else Else If Statement
if (weather === "Sunny") {
    console.log("Bring your sunglasses!");
} else if (weather === "Raining") {
    console.log("Bring an umbrella!");
} else if (weather === "Snowing") {
    console.log("Bring a sledge.");
} else {
    console.log("Not too sure at the moment.");
}

// === - Strictly Eqaul To 
console.log(a !== "10");

// Comparison Operators:

// == - Equal to

//  === - Equal Value and Equal Data Type

//  != - Not Equal to

//  !== - Not Equal Value or Equal Data Type

//   > - Greater Than

//   < - Less Than

//  >= - Greater than or equal to

// <= - Less than or equal to


// Logical Operators:

// || - or

// && - and

// ! - not

// Logical or example

let trafficLight = "Amber";

if (trafficLight === "Red" || trafficLight === "Amber") {
    console.log("Stop!");
} else {
    console.log("Go!");
}


// let trafficLight = "Green";

// if (trafficLight !== "Green") {
//     console.log("Stop!");
// } else {
//     console.log("Go!");
// }

// Logical and example

let num = 11;

if (num > 5 && num <= 10) {
    console.log(`${num} is between 5 and 10!`);
} else {
    console.log(`${num} is NOT between 5 and 10.`);
}


// Switch Statement
let day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Weekend is over! Happy Monday!")
        break;
    case "Tuesday":
        console.log("Second day of the week!")
        break;
    case "Wednesday":
        console.log("Halfway through the week!")
        break;
    case "Thursday":
        console.log("It's almost Friday!")
        break;
    case "Friday":
        console.log("Happy Friday!")
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the Weekend!")
        break;
    default:
        console.log("Day not recognised. Try again.");
};

// Switch Statement - Grade Example
let testScore = 80

switch (true) {
    case testScore >= 70:
        console.log("Distinction")
        break;
    case testScore >= 60:
        console.log("Merit")
        break;
    case testScore >= 70:
        console.log("Pass")
        break;
    default:
        console.log("Failed");
}
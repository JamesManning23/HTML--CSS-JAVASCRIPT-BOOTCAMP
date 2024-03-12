// //  tasks:

// 1: Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console.

// 2: Generate 10 random numbers between 1-100 and log them to the console.

// 3: Create a loop that counts backwards from 20-0.

// 4: Generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible or not to the console.

// Stretch Tasks:

// 1: Research array methods and put togehter 5 different examples demonstrating how the methods are used.

// 2: Create variable that stores a number. Using various JavaScript methods write a check that will confirm whether the number is a palindrome (The number is the exact same if reversed) 


//  task 1:



const filmArray = ["avengers", "iron man", "captain america", "hulk"];
filmArray.push("shawshank", "bicentenial man");

console.log(filmArray);



// task 2:




for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}

// task 3:


const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < 1; i++) {
    let reverseArray = numberArray.reverse();
    console.log(reverseArray);
}

//  task 4:


for (let i = 0; i < 5; i++) {
    let numberVariable = Math.floor(Math.random() * 50) + 1;
    if (numberVariable % 5 === 0) {
        console.log(`${numberVariable} is divisible by 5`)
    } else {
        console.log(`${numberVariable} is not divisible by 5`);
    }
}

//     function myFunction(user, age) {
//         console.log(`happy birthday ${user}`);
//         console.log(`you are ${age} years old`);
//     }

//     myFunction('james', 32);


// let age = 5;
// while(age < 6) {
//     alert("ages is less than 6");
//     age++;
// }


// palindrome checker:


let numberP = 10061;

let numberPReverse = numberP.toString().split("").reverse().join("")
if (numberP.toString() === numberPReverse) {
    console.log(`${numberPReverse} is a palindrome`)
} else {
    console.log("it is not a palindrome");
}
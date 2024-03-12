// task 1 below: 1: Create a variable that stores your name and log a string to the console that provides a personalised greeting.


let myName = 'James';
if (myName = String) {
    console.log('hello james')
}

// task 2 below: 2: Create additional variables to store your favourite colour and your favourite film or tv series. Using template literals I want you to log a sentence including your name and these values to the console.
const myFavouriteFilm = 'Shawshank Redemption'
const myFavouriteShow = 'The Expanse'
console.log(`my favourite show is ${myFavouriteShow}.`)


// task 3 below: 3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. I then want you to update the values for the breakfast, lunch and dinner variables to what you are eating today and log the new values to the console.


let breakfast = 'fruit'
let lunch = 'soup'
let dinner = 'pasta'

console.log(breakfast);
console.log(lunch);
console.log(dinner);

dinner = 'chicken'
console.log(dinner);


// stretch task: Research the JavaScript Math object and see if you are able to use the in-built methods to generate a random number between 1 and 10.


let minimum = 1;
let maximum = 10;

let x = Math.random(minimum, maximum);
console.log(x)
console.log(x)

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

const weather = 'rain';

if (weather = 'rain') { console.log('its raining, i need my umbrella') }
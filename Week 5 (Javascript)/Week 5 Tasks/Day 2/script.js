// JavaScript Events Tasks:
 
// 1: Using an event listener I would like you to create a button that alternates between showing an image and hiding an image on click.
// For example, the image is shown to start with, the first click hides the image and the following click shows the image again. So on and so forth.
 
// 2: Create a text input field and a submit button. Using an event listener on the button I would like you to add an element to the DOM that contains the value of the text in the input field.
// Bonus points if you are able to also clear the input field on click.
 
// 3: Research the different types of JavaScript events see what different information you have access to with the event object. Think about how this information could potentially be used.

// task 1:

const btn = document.getElementById("btn")
const img = document.getElementById("img")


btn.addEventListener("click", () => {
   img.hidden = !img.hidden 
})



// task 2:

const input = document.getElementById("input");
const submit = document.getElementById("submit");

let inputOutput = document.createElement("h2");
document.body.append(inputOutput);
submit.addEventListener("click", () => {
inputOutput.innerText = input.value;
input.value = "";
})

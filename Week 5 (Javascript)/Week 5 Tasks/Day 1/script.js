// Tasks:
// Create a new index.html and script.js in order to complete the following tasks:
// 1: Add a <h1> element to the HTML with some text inside it.
// 2: Using a DOM query method I would like you to select the h1 element from the DOM and store it in your JavaScript file in a variable.
// 3: Add an ID and update the text content and styling of your <h1> element using the DOM.
// 4: Using the DOM I would like you to create a <ul> element and 3 <li>’s and add them to the document.
// 5: Edit the text content of each <li> and change the colour of the <li>’s.
// 6: Finally remove your h1 element from the document.

const heading = document.querySelector('h1');
 
heading.innerText = 'New Content';
heading.setAttribute('id', 'heading');
heading.style.backgroundColor = "Aqua";
 
const ul = document.createElement('ul');
document.body.append(ul);
 
const liOne = document.createElement('li');
const liTwo = document.createElement('li');
const liThree = document.createElement('li');
 
ul.append(liOne, liTwo, liThree);
 
const listItems = document.querySelectorAll('li');
console.log(listItems);
 
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'Crimson';
    listItems[i].innerText = `Item ${i + 1}`;
}
 
// heading.remove();
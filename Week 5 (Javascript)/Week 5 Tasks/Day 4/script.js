// Access all our relevant elements from the DOM
// const keyInput = document.getElementById("keyInput");
// const valueInput = document.getElementById("valueInput");
// const submitBtn = document.getElementById("submitBtn");


// // We can set an item to our local storage object
// // by passing a string to the key and value arguments
// // of the setItem(key,value) method
// localStorage.setItem("Example Key", "Example Value");

// console.log(localStorage);


// Local Storage Tasks:
 
// 1: Add a button to your HTML code and add functionality with JavaScript to clear localStorage on click.

// 2: Using JavaScript Output all key:value pairs from localStorage to the UI.

// 3: Add another input and button to your HTML code and with JavaScript add the ability to search and retrieve specific data from localStorage.


// Task 1:
 
// const button = document.getElementById("button");
// button.addEventListener("click", () => {
//     localStorage.cldear()
// });


const keyInput = document.getElementById('keyInput');
const valueInput = document.getElementById('valueInput');
const submitBtn = document.getElementById('submitBtn');
const deleteBtn = document.getElementById('deleteBtn');
const storageOutput = document.getElementById('storageOutput');
const searchInput = document.getElementById('searchInput');
const searchOutput = document.getElementById('searchOutput');
const searchBtn = document.getElementById('searchBtn');

console.log(localStorage);
// localStorage.setItem("exampleKey", "exampleValue");
// function to save the key and value input to local storage.
const saveToLocalStorage = () => {
    // storing the values of our inputs in variables of "key" and "value"
    const key = keyInput.value;
    const value = valueInput.value;
    // checking that we have the values for using setItem
    if (key && value) {
        localStorage.setItem(key, value);
    }

}

const clearLocalStorage = () => {
    localStorage.clear();
    // reload the page;
    location.reload();
}

submitBtn.addEventListener("click", saveToLocalStorage);
deleteBtn.addEventListener("click", clearLocalStorage);


// loop over the local storage items. use the .key method to find each key:

for (let i = 0; i < localStorage.length; i++) {
    // Get the key string by refercing the item index in the key() method
    const key = localStorage.key(i);
    // Get the value by passing the key string as the argument in .getItem()
    const value = localStorage.getItem(key);
    // Create an element for each item
    let lsItem = document.createElement('h3');
    // Give the element an ID of the key
    lsItem.setAttribute('id', key);
    // Set the innerText of the element to display the key and value
    lsItem.innerText = `${key} : "${value}"`;
    // Append the item to our div in the dom
    storageOutput.append(lsItem);
}


// function to search local storage:

let searchResult = null;

const searchLocalStorage = (e) => {
    // stop the page from refreshing when search is clicked
e.preventDefault();
// store the search term in a variable of key
const key = searchInput.value;
// stpre the value associated to the key:
const value = localStorage.getItem(key);
// check if this is the first search , if so generate the text element, otherwise just  update the value
if (searchResult === null) {
    searchResult = document.createElement("h3");
    searchResult.innerText = `Result: 
    ${key}: "${value}"`
} else {
    searchResult.innerText = `Result:
    ${key}: "${value}"`;
}
}


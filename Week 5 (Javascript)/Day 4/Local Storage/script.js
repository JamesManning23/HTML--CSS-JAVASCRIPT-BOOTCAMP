// Access all our relevant elements from the DOM
const keyInput = document.getElementById("keyInput");
const valueInput = document.getElementById("valueInput");
const submitBtn = document.getElementById("submitBtn");


// We can set an item to our local storage object
// by passing a string to the key and value arguments
// of the setItem(key,value) method
localStorage.setItem("name", "James");
localStorage.setItem("age", "23");
console.log(localStorage.getItem("name","age"));


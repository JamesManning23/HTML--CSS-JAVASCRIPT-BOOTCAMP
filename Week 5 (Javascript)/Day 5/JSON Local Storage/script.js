const myObject = {
    name: "james",
    age: 24,
    city: "London"
};



localStorage.setItem("example", myObject);
console.log(localStorage);

// turn our object into a string.
localStorage.setItem("myObject", JSON.stringify(myObject));


localStorage.getItem(myObject);
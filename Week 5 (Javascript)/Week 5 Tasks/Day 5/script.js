// JSON Local Storage Task:
 
// I would like you to create an object in JavaScript that contains four key value pairs:
 
// Name
// Age
// City
// Image
 
// All values should be string data.
 
// I would then like you to store the object as an item in local storage.
// Once the item is stored I would like you to retrieve the item from local storage on the click of a button and display the data, including the image in the document.

// creating a object
const myPerson = {
    name: "James Manning",
    age: "23",
    city: "London",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg"
};


// creating a button 
const buttonVariable = document.createElement("button")
buttonVariable.setAttribute("id", "button");
document.body.append(buttonVariable);
buttonVariable.innerText = "Click Me....";

// store the object as a item in local storage:
localStorage.setItem("myObject", JSON.stringify(myPerson));


// function to retrive local storage:

const localStorageFunction = () => {
    // creates a new image element, grabs the url with a image variable and then attributes the url to the element and the appends the image to the body:
    let myObjectParsed = JSON.parse(localStorage.getItem("myObject"));
    
    const imageVariable = localStorage.getItem("myObject"[3]);
    const imageElement = document.createElement("img");
    const newDivElement = document.createElement("div");
    const userDetails = document.createElement("p");
    user;
    imageElement.setAttribute("src", myObjectParsed.imageURL)

    
    const key = localStorage.key(0);
    const value = localStorage.getItem("myObject");
    newDivElement.innerText = `Key: ${key} Value: ${value}`
    document.body.append(newDivElement);
}
// event listener to call function on click
buttonVariable.addEventListener("click",localStorageFunction);
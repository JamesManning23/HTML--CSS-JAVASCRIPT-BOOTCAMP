// document object model = DOM 


console.log(document);
// console.log(document) gives us a representation of our html code


// DOM Query Moethods:

// Get Element by ID():
const heading = document.getElementById("heading");
console.log(heading);


// get Element by Class Name();
// html collection cant be used with array methods.

const liClass = document.getElementsByClassName("listItems");
console.log(liClass);


// get Elements by Tag Name(): Alternate method to class name.

const liElements = document.getElementsByTagName("li");
console.log(liElements);


// Query Selector = a way to query a css selector in javascript

// querySelector():

const pSelector = document.querySelector("p");
console.log(pSelector);


// querySelectorAll

const pSelectors = document.querySelectorAll("p");
console.log(pSelectors);


// Style Elements With DOM:
heading.style.color = "red";
heading.style.background = "green";

// Style a list of Elements:

for (let i = 0; i < pSelectors.length; i++) {
   pSelectors[i].style.color = "Blue" 
}

// creating a element and adding it to the document via the DOM:
const ul = document.querySelector("ul");
console.log(ul);

//  step 1:use the createElement():

const newListItem = document.createElement("li")
console.log(newListItem);

// step 2: Append (Add) the newListItem to our stored ul element:

ul.append(newListItem);

// step 3: Modify the inner text property of our new list item:
newListItem.innerText = "*Item 4*";

// assign a new element a class:

newListItem.classList.add("listItems");

// assign a element to a ID:

newListItem.setAttribute("id","item4");


// Remove an ID(Any Attribute):

newListItem.removeAttribute("class");

// Remove a Class:

newListItem.classList.remove("listItems");

// Remove a element from the document:

newListItem.remove();


// Parent Node Traversal

console.log(ul.parentElement);
console.log(ul.parentNode);

const htmlElement = document.documentElement;
console.log(htmlElement);

console.log(htmlElement.parentElement);
console.log(htmlElement.parentNode);

// difference between nodes and elements. all elements are nodes but not all nodes are elements.

// Child Node Traversal:
// text nodes exist everywhere, in this instance they are the spaces between the list items.

console.log(ul.childNodes);
console.log(ul.lastChild);
console.log(ul.firstChild);

// child elements  traversal:

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// clone an element:


const itemTwo = ul.children[1];
console.log(itemTwo);

itemTwoClone = itemTwo.cloneNode(true);
// this runs a method which returns a copy of the node,

// insert the li at a specific location in the list:

ul.insertBefore(itemTwoClone, ul.children[2]);

// insert before passes two arguments, what you want to insert and where in the list to insert.
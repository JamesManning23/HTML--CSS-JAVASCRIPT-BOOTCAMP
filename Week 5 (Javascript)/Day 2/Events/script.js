// select elements from DOM

const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

// Add Event Listener to a heading. The event listener method takes two argumets, the first is the event type and the functionality is the second to be executed when the event happens.

// heading.addEventListener("click", () => {
// console.log("the heading h1 has been clicked")
// })

// we can also declare a dunction outside a event listener and call it within it


const greeting = () => {
    console.log("Hello James")
}
heading.addEventListener("click", greeting);


// we can capture the event information via the event object.

btn.addEventListener("click", (e) => {
    console.log(e)
})


// we can listen for events in the browser window itself rather than epsecific elements


window.addEventListener("keydown", (e) => {
    console.log(e.key);
})


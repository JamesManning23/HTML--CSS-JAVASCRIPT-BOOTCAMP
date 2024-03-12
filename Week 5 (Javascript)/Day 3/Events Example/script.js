// imports - overlay, container, eventkey and eventcode:
const overlay = document.getElementById("overlay");
const container = document.querySelector(".container");
const eventKey = document.getElementById("eventKey");
const eventCode = document.getElementById("eventCode");

// listen for when a key is pressed by a user.
window.addEventListener("keydown", (e) => {
 overlay.style.display = "none";
//  show the container
container.style.display = "flex";


// conditionally check:

if (e.code === "Space") {
    eventKey.innerText = " " "(Spacebar)"
} else {
    eventKey.innerText = e.key;
    eventCode.innerText = e.code;
}




// // set the text for each of the event key to be event.key
// eventKey.innerText = e.key;
// // set text for eventcode to be e.code
// eventCode.innerText = e.code;
// })
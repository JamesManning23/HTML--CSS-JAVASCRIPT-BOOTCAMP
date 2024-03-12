const car = {
    name: 'audi vw',
    year: 2005,
    mileage: 40000,
    seats: 3,
    mot: true
}


console.log(car.name)



// objects work with key:value pairs


// cofee shop example:


const cofeeShop = {
    name: "Costa",
    branchNumber: 250,
    specialOffers: true,
    drinksMenu: [
        "latte", "americano", "Tea"
    ] 
}


// set a new property:


cofeeShop.muffins = "blueberry";


// add offers to the coffeshop object:
cofeeShop.breakfastOffer = "Free Object with any Coffee";
cofeeShop.lunchOffer = "Free Coffee with any Sandwich";


let offer = "No current offer";
let time = 1400;

if (time < 1100) {
    offer = cofeeShop.breakfastOffer;
    console.log(offer);
} else if (time < 1500) {
    offer = cofeeShop.lunchOffer;
    console.log(offer);
}

// Methods - Functions within Objects.


cofeeShop.open = function () {
    return("we are opem, comeon in")
}

cofeeShop.close = function() {
    return("sorry, we are closed")
}

console.log(cofeeShop.open());
console.log(cofeeShop.close());


// alarm clock object:

const alarm = {
    weekdayAlarm: "get up at 7am",
    weekendAlaem: "its the weekend, sleep in",
    checkAlarm: function (day) {
        if (day === "saturday" || day === "sunday") {
            return this.weekendAlaem;
        } else {
            return this.weekdayAlarm;
        }
    } 
}

console.log(alarm.checkAlarm("monday"));


// this refers to the object, makes it easier to compartmentalize code.


// Objects

// Learning Objectives: 

// - Explore the concept of an Object
// - To access data from within an object
// - To use methods (functions) with Objects

// properties = data contained within the object
// methods = things that the object can do

// Objects work with Key:Value pairs.

const car = {
    make: "Ford",
    model: "Focus",
    year: 2015,
    colour: "White",
    mot: true
};

// CoffeeShop Object Example

const coffeeShop = {
    name: "Costa",
    branchNumber: 250,
    specialOffers: true,
    drinksMenu: [
        "Americano",
        "Latte",
        "Tea"
    ]
};

// Log the object to the console
console.log(coffeeShop);

// Access object data - dot.notation
console.log(coffeeShop.name);

// Access an array within an object - bracket notation
console.log(coffeeShop.drinksMenu[0]);

// Access object data - bracket["notation"]
console.log(coffeeShop["branchNumber"]);

// Objects are immutable - despite being declared with "const"

// Update property value with dot.notation
coffeeShop.branchNumber = 100;

// Set a new property with dot.notation
coffeeShop.muffins = ["Blueberry", "Chocolate"];

// Add offers to the coffeeShop object
coffeeShop.breakfastOffer = "Free Bagel with any Coffee!";
coffeeShop.lunchOffer = "Free Coffee with any Sandwich!";

let offer = "No current offer";
let time = 1400;

if (time < 1100) {
    offer = coffeeShop.breakfastOffer;
    console.log(offer);
} else if (time < 1500) {
    offer = coffeeShop.lunchOffer;
    console.log(offer);
}

// Methods - Functions within objects
coffeeShop.open = function () {
    return `We are open, come on in!`;
}

coffeeShop.close = function () {
    return `Sorry we are closed. Come back tomorrow`;
}

console.log(coffeeShop.open());
console.log(coffeeShop.close());

// Alarm Clock
const alarm = {
    weekdayAlarm: "Get up at 7:00am.",
    weekendAlarm: "Sleep in its the weekend!",
    checkAlarm: function (day) {
        if (day === "Saturday" || day === "Sunday") {
            return this.weekendAlarm;
        } else {
            return this.weekdayAlarm;
        }
    }
};

console.log(alarm.checkAlarm("Monday"));


// Nested Objects
const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: {
        name: 'Engineering',
        location: 'Building A',
        supervisor: {
            name: 'Jane Smith',
            position: 'Engineering Manager'
        }
    }
}

const library = {
    name: 'Public Library',
    location: 'City Center',
    books: [
        {
            id: 'B001',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            details: {
                genre: 'Fiction',
                year: 1925
            }
        },
        {
            id: 'B002',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            details: {
                genre: 'Fiction',
                year: 1960
            }
        }
    ]
};

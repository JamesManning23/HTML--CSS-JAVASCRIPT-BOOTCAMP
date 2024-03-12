// Tasks:
// 1: Create an object called person with keys of name age and city. once created log your object to the console in a table format.
// 2: Add a method to your object that returns a string greeting the person by name.
// 3: Create an object called “films” that will store 3 nested objects within it, each should have a key referencing the title of a film, each nested film object should contain information about the film such as genre, year of release and rating. 
 
// Nested Tasks: 
 
// Use the nested objects at the bottom of the reference file to complete the tasks below. Reference the requested data via the objects and log it to the console.
// 1: Log the name of John's supervisor to the console.
// 2: Log the title of 'The Great Gatsby' to the console.

// // Nested Objects





// task 1 & 2:


const person =  {
    name: "James Manning",
    Age: 23,
    City: "London, United Kingdom",
}


console.table(person);
// task 2:

person.greeting = function () {
    return `Hello ${this.name}`
}

console.log(person.greeting());

//  task 3:

const films = {
    aquamanAndTheLostKingdom: {
        genre: ["action", "adventure"],
        releaseYear: 2023,
        rating: 15
    },
    oneLife: {
        genre: "Drama",
        releaseYear: 2023,
        rating: 12
    },
    charlieAndTheChocolateFactory: {
        genre: ["Action", "Adventure", "Book Adaptation"],
        releaseYear: 2005,
        rating: "PG"
    }
}

// Methods - Functions within objects
// coffeeShop.open = function () {
//     return `We are open, come on in!`;
// }

// coffeeShop.close = function () {
//     return `Sorry we are closed. Come back tomorrow`;
// }

// console.log(coffeeShop.open());
// console.log(coffeeShop.close());


// nested objects:


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


// task1:


console.log(employee.department.supervisor.name)


// task 2:

console.log(library.books[0].title)
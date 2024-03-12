 let person = {
    name: "brad",
    age: 23,
    location: "london",
    address: {
        street: "3 whitehaven street",
        county: "westminster",
        postcode: "NW8 8DB"
    },
    Children: ["James", "Charlotte"]
}

person = JSON.stringify(person);
person = JSON.parse(person);
console.log(person.Children[1]);



let people = [
{
    name: "Jamie",
    age:27
},
{
    name: "jimmy",
    age:12
},
{
    name: "sarah",
    age:25
}
]



for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
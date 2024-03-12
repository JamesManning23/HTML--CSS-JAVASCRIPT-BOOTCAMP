
// JSON Task:
// Using the JSON String data from today’s reference file, I would like you iterate over the data and create a user card for each individual.
// The user cards should be created via the DOM and each card should be populated with a user’s data from the JSON data set.
// How the cards are displayed or styled is up to you, however, JS functionality is more important than the CSS styling.
// If you get stuck or have any questions please let me know. 



const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");

let JSONString = `{
    "people":[
      {"firstName":"David", "lastName":"Smith", "age": 27, "married": true},
      {"firstName":"Amy", "lastName":"Blake", "age": 43, "married": true},
      {"firstName":"Mark", "lastName":"Foster", "age": 56, "married": false}
    ]
    }`



    const jsonObject = JSON.parse(JSONString);

for (let {firstName, lastName, age} of jsonObject.people) {
  
}
    
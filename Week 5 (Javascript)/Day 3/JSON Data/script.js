// se;ect elements using the DOM:

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

    console.log(JSONString);


    // parse - taking a js string and convert to js object

    const jsonObject = JSON.parse(JSONString);
    console.log(jsonObject.people[0].firstName);

    firstName.innerText = jsonObject.people[0].firstName;
    lastName.innerText = jsonObject.people[0].lastName;
    age.innerText = jsonObject.people[0].age;
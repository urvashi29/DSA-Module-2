// Primitive

//string
const firstName = "alina";
console.log(typeof firstName);

//number
const num = 20;
const numDecimal = 20.89;
console.log(typeof num, typeof numDecimal);

//boolean (T or F)
console.log(typeof (20 > 8)); //

//undefined
let a;
console.log(a); //undefined
console.log(typeof a); //undefined

//null
const person = null;
console.log(person); //null
console.log(typeof person); //object

// Non-primitive

// Arrays
const color = ["pink", "red", "orange", "white"];
console.log(color);
console.log(typeof color);

//Object (key: value)
const user = {
  id: 9090,
  name: "john joe",
  age: 20,
  contact: {
    email_address: "admin@gmail.com",
    contact_number: 909090909,
  },
};

console.log(user);
console.log(typeof user); //object

// Map
let map = new Map();

// to add/set the value
map.set("city", "mumbai"); //(key, value)
map.set("designation", "developer");

// access/retrieve value
console.log(map.get("designation"));

//Set
const numbers = new Set([1, 2, 3, 4, 4, 5, 5, 2]);
console.log(numbers);

//see notes
//Linked List
//Trees
// Graph

searchArrElement = (arr, ele) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      console.log("found");
    }
  }
};

searchArrElement([10, 20, 30, 1, 3, 2, 10], 1); //arr, elementToBeSearched


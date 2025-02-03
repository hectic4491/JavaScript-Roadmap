// The most common methods and functions on Objects

/**
 * JavaScript objects are essential structures used to store collections
 * of key-value pairs, which can represent more complex data than simple
 * arrays. Here are some common uses and functions associated with
 * objects in JavaScript.
 * 
 * Some common uses of Objects are:
 */

// Storing Data:
let person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer"
};

// Configuration Settings:
let config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3
};

// Grouping Related Data:
let formData = {
  username: "user123",
  password: "securePass"
};


// Common Methods and Functions 
// 1. Creating Objects:
//
// Using object literals
let objOne = { key: 'value' };
// Using the Object constructor
let objTwo = new Object();
objTwo.key = 'value';


// 2. Accessing Properties:
//
// Dot notation:
console.log(person.name); // Alice
// Bracket notation:
console.log(person['age']); // 30


// 3. Adding and Modifying Properties:
person.city = 'New York';
person.age = 31;


// 4. Deleting Properties:
delete person.occupation;


// 5. Iterating Over Properties
// Using for...in loop:
for (let key in person) {
  console.log(key + ': ' + person[key]);
}
// name: Alice
// age: 31
// city: New York


// 6. Object Methods:
// Object.keys(obj): Returns an array of the object's own property names.
console.log(Object.keys(person)); // [ 'name', 'age', 'city' ]

// Object.value(obj): Returns an array of the object's own property values.
console.log(Object.values(person)); // [ 'Alice', 31, 'New York' ]

// Object.entries(obj): Returns an array of the object's own key-value pairs.
console.log(Object.entries(person));
// [ [ 'name', 'Alice' ], [ 'age', 31 ], [ 'city', 'New York' ] ]

// Object.assign(obj): Copies the values of all enumerable properties from
// one or more source objects to a target object.
let target = {};
let source = { a: 1, b: 2 };
Object.assign(target, source)
console.log(target); // { a: 1, b: 2 }




// Tests

let myObject = {
  name: "Robert",
  age: 25,
  skateboardCount: 2,

  greet: function() {
    console.log('Hello, my name is ' + this.name);
  },

  addSkateboard: function(n) {
    this.skateboardCount += n
  }
}

myObject.greet()
console.log(myObject.skateboardCount); // 2
myObject.addSkateboard(4);
console.log(myObject.skateboardCount); // 6
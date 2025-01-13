import { setTimeout } from 'timers/promises';

/*
A closer look at console.

What is the 'console' object in javascript?

The console object provides access to the browser's debugging console.
It is often used for logging information, debugging code, and inspecting
objects during development.
*/


// The familiar console.log; Outputs a message to the console.
console.log("My log.");


// Outputs an error message.
console.error("My error.");


// Outputs a warning message.
console.warn("My warning.");


// console.time and console.timeEnd accepts a "label" for the timer.
// Hence we can use different timers, even as nested timers.
console.time("outerTimer");

console.timeLog("outerTimer", "This is logged immediately after we start the timer.");
await setTimeout(2000);
console.time("innerTimer");

console.timeLog("innerTimer", "This is logged after we enter the innerTimer");
console.timeLog("outerTimer", "This is logged after we enter the innerTimer");

await setTimeout(500);

console.timeEnd("innerTimer");
console.timeEnd("outerTimer");


// use console.table to log the data in a tabular format.
const myObj = {
  name: "Robert",
  age: 28,
  hairColor: "Brown",
  eyeColor: "Brown"};

console.table(myObj);


// use this to look at all the console methods
console.log( console );


// assertions
console.assert(false, "Here's a custom message. But this isn't an error. Program will keep running.");
console.assert(true);


// label the variable with it's data by using braces
const myVar = 1035;
console.log( {myVar} ); // { myVar: 1035 }
console.log(myVar); // 1035
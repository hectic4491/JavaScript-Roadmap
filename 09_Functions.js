// Functions

/**Functions exist so we can reuse code. They are blocks of code that
 * execute whenever they are invoked.
 * 
 * **More from mdn**
 * 
 * Functions are one of the fundemental building blocks in JavaScript. A
 * function in JavaScript is similar to a procedure—a set of statements
 * that performs a task or calculates a value, but for a procedure to
 * qualify as a function, it should take some input and return an output
 * where there is some obvious relationship between the input and the 
 * output. To use a function, you must define it somewhere in the scope
 * from which you wish to call it.
 * 
 * There are different ways to define a function, all with subtle
 * differences in implementation.
 */

/**Function Declaratuion:
 * A function definition (also called a function declaration, or function
 * statement) consists of the 'function' keyword, followed by:
 * 
 * The name of the function.
 * A list of parameters to the function, enclosed in parentheses and 
 * seperated by commas.
 * The JavaScript statements that define the function, enclosed in curly
 * braces {}.
 */
//e.g.:
let x = 5;

function square(number) {
  return number * number;
}

console.log(square(x)); // 25

/**Parameters
 * Parameters are essentially passed to functions by value, so if the code
 * within the body of a function assigns a completely new value to a 
 * parameter that was passed to the function, the change is not reflected
 * globally or in the code which called the function.
 */
function returnTen(number) {
  number = 10
  return number;
}
console.log(returnTen(x)); // 10
console.log(x); // 5

/**
 * When you pass an object as a parameter, if the function changes the
 * object's properties, that change is visible outside the function, as
 * shown in the following example:
 */
function myFunc(theObject) {
  theObject.make = "Toyota";
}
const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998
};
console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make) // "Toyota"

const myGuitar = {
  model: "Telecaster",
  year: 1963
}
console.log(myGuitar.make); // "undefined"
myFunc(myGuitar);
console.log(myGuitar.make); // "Toyota"

/**
 * When you pass an array as a parameter, if the function changes any of
 * the array's values, that change is visisble outside the function, as
 * shown in the following example:
 */
function makeThrity(arr) {
  arr[0] = 30;
}
const myArray = [2, 3, 4];
console.log(myArray);
makeThrity(myArray);
console.log(myArray);

/**Types of function parameteres: Default and Rest
 * 
 */
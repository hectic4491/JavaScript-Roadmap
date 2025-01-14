// Functions are Objects in JavaScript.

/**A close look at functions as objects in JavaScript.
 * 
 * Functions are objects in JavaScript. This means that functions can have
 * properties and methods just like any other object. Here are some key
 * points to understand why functions are objects.
 */

/**Type - Functions are a special type of object known as Function. You
 * can verify this using the typeof operator
 */
function myFunction(x) {
  console.log(`This is x plus 2 : ${ x + 2 }`)
}
console.log(typeof myFunction); // 'function'

/**Properties and Methods - Functions can have properties and methods. For
 * example, every function has a 'length' property that indicates the number
 * of parameters it expects, and a 'name' property that contains the name
 * of the function.
 */
console.log(`The function is called: ${myFunction.name}`);
console.log(`The function takes in ${myFunction.length} paremeters`)

/**Assigning Properties - You can assign properties to functions, just like
 * you can with objects.
 */
function sayHello() {
  console.log('Hello!')
}
sayHello.greeting = "Hi there!";

sayHello();
console.log(sayHello.greeting);

/**Functions as First-Class Citizens - In JavaScript, functions are first-
 * class citizens, meaning they can be assigned to variables, passed as
 * arguements to other functions, and returned from other functions.
 */

// this function will be passed into applyFunction.
const square = function(x) {
  return x * x;
};
// this functions parameters are 'func' and 'value'. It expects a function
// and integer as it's arguements. The code returns the return of
// func(value)
function applyFunction(func, value) {
  return func(value);
}
// here we log the return. 
console.log(applyFunction(square, 5));
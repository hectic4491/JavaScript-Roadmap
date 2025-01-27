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
console.log(myArray); // [2, 3, 4]
makeThrity(myArray);
console.log(myArray); // [30, 3, 4]


/**Types of function parameters: Default and Rest
 * The parameter is the name given to the variable declared inside the
 * definition of a function. There are two special kinds of syntax: default
 * and rest parameters.
 * 
 * 
 * Default Parameters:
 * Default function parameters allow named parameters to be initialized
 * with default values if no value or undefined is passed.
 * 
 * In the past, the general strategy for setting defaults was to test
 * parameter values in the body of the function and assign a value if they
 * are undefined.
 * 
 * In the following example, if no value is provided for b, it's value
 * would be undefined when evaluating a*b, and a call to multiply would
 * normally have return NaN. However, this is prevented by the second line
 * in this example:
 * 
 * Note** This is the Ternary Operator  (Expression) ? (True) : False
 */
function multiply(a, b) {
  b = (typeof b !== "undefined") ? (b) : (1);
  return a*b;
}
console.log(multiply(5)); // 
/**
 * With default parameters, a manual check in the function body is no
 * longer necessary. You can put 1 as the default value of b in the
 * function head:
 */
function defaultMultiply(a, b = 1) {
  return a * b;
}
console.log(defaultMultiply(3)); // 3

/**Rest Parameters
 * The rest parameter syntax allows us to represent an indefinite number of
 * arguments as an array.
 * 
 * In the following example, the function uses 'rest parameters' to 
 * collect arguments from the second one to the end. The function then
 * multiplies these by the first argument.
 */
function multiplyBy(multiplier, ...args) {
  return args.map((x) => multiplier * x);
}
const arr = multiplyBy(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


/**Arrow Functions
 * An arrow function expression has a shorter syntax compared to function
 * expressions and does not have its own 'this', 'arguments', 'super', or
 * 'new.target'. Arrow functions are always anonymous.
 */
// e.g.:
const sayHello = () => {
  console.log("Hello from the Arrow Function !")
}
sayHello();
 /**
  * Two factors influenced the introduction of arrow functions: shorter
  * functions and the non-binding of 'this'.
  */

 /**
  * this...
  * Need to look into more later.
  */


 /**IIFEs
  * Immediately-invoked Function Expression is a function that is
  * executed immediately after it is created:
  */
// standard IIFE:
(function () {
  console.log("Call this immediately!");
})();

// arrow function variant:
(() => {
  console.log("Immediate arrow function!");
})();

// async IIFE with arrow function:
(async () => {
  console.log("Do this async now!")
})();


/**Argument Object
 * The arguement object is an array-like object accessible inside
 * functions that contains the values of the arguments passed to that
 * function, available within all non-arrow functions. You can refer to
 * a function's arguments inside that function by using its argument 
 * object. It has entries for each argument the function was called with,
 * with the first entry's index at 0. But, in modern code, rest 
 * parameters should be preferred.
 */

// argument object example:
function myArgFunction(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

myArgFunction(7, 8, 9);
// 7
// 8
// 9

/**Function Stack (Call Stack)
 * The function stack is how the interpreter keeps track of its place in
 * a script that calls multiple functions, like which function is
 * currently executing and which functions within that function are being
 * called.
 * 
 * When a script calls a function, the interpreter adds it to the call
 * stack and then starts carrying out the function.
 * 
 * Any functions that are called by that function are added to the call
 * stack further up, and run where their calls are reached.
 * 
 * When the current function is finished, the interpreter takes it off
 * the stack and resumes execution where it left off in the last code
 * listing.
 * 
 * If the stack takes up more space than it was assigned, a "Stack
 * overflow" error is thrown.
 */

// Let's look at a close example:
function myGreeting() {
  console.log("[1]");
  sayHi();
  console.log("[2]");
}
function sayHi() {
  return console.log("Hi!");
}
myGreeting();
console.log("[3]");
// [1]
// Hi!
// [2]
// [3]

/**
 * The call stack is empty at the very beginning.
 * 1. Going from top to bottom, we first push the myGreeting() function
 *    to the call stack per line 234.
 * 2. Execute all code inside the myGreeting() function.
 * -> [1]
 * 3. Get to the sayHi() function invocation.
 * 4. Push sayHi() to the call stack.
 * 5. Execute all code inside the sayHi() function.
 * -> Hi!
 * 6. Return execution to the line that invoked sayHi() and continue
 *    executing the rest of the myGreeting() function.
 * 7. Pop sayHi() from the call stack.
 * -> [2]
 * 8. Return executing to the rest of the JS code.
 * 9. Pop myGreeting() from the call stack.
 * -> [3]
 */


/**Recursion
 * One of the most powerful and elegant concepts of functions, recursion
 * is when a function invokes itself. Such a function is called a 
 * recursive function. As recursion happens, the underlying code of the
 * recursive function gets executed again and again until a terminating
 * condition, refered to as the 'base case' gets fulfilled.
 * 
 * Recursion and it's techniques is a deep topic and many algorithms 
 * will utilize Recursion.
 * 
 * The most classical example is a fibonacci function.
 */
// return the nth term in the fibonacci sequence (starting from index 0)
// 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1
  } else return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(5)); // 8


/**Built-in Functions
 * There are a ton of built in Functions and Methods in JavaScript.
 * 
 * A JavaScript method is a property containing a function definition.
 * i.e. when the data stored on an object is a function, we call that a
 * method.
 * 
 * To differentiate between properties and methods, we can think of it
 * this way: A property is what an object has, while a method is what
 * an object does.
 * 
 * Since JavaScript methods are actions that can be performed on objects,
 * we first need to have objects to start with. There are several objects
 * built into JavaScript we can use.
 * 
 * Instead of listing them all here, just refer to a page that lists
 * all the built in methods, like:
 * https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm
 */


/**Lexical Scoping
 * Before one can make an intuition of closures in JavaScript, it's
 * important to first get a hang of the term 'lexical environment'. In
 * simple words, the lexical environment for a function 'f' simply refers
 * to the environment enclosing that function's definition in the source
 * code.
 */


/**Closures
 * Function closures are one of the most powerful, yet most misunderstood,
 * concepts of JavaScript that are actually really simple to understand. A
 * closure refers to a function along with its lexical environment. It is
 * essentially what allows us to return a function A, from another
 * function B,  that remembers the local variables defined in B, even
 * after B exits. The idea of closures is employed in nearly every other
 * JavaScript program, hence, it's paramount for a JavaScript developer
 * to know it really well.
 */


/**"""mdn""" Closures
 * 
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * In other words, a closure gives a function access to its outer scope.
 * In JavaScript, closures are created every time a function is created,
 * at function creation time.
 */


//Lexical Scoping.    consider the following example code:

function init() {
  var name = "Mozilla";
  // name is a local variable created by init.

  function displayName() {
    // displayName() is the inner function, that forms a closure.
    console.log(name)
    // use variable declared in the parent function
  }

  displayName();
}

init(); // Mozilla


/**
 * init() creates a local variable called name and a function called
 * displayName(). The displayName() function is an inner function that
 * is defined inside init() and is available only within the body of the
 * init() function. Note that the displayName() function has no local
 * variables of its own. However, since inner functions have access to the
 * variables of outer scope, displayName() can access the variable name
 * declared in the parent function, init().
 * 
 * This is an example of lexical scoping, which describes how a parser 
 * resolves variable names when functions are nested. The word 'lexical'
 * refers to the fact that lexical scoping uses the location where a 
 * variable is declared within the source code to determine where that
 * variable is available. Nested functions have access to variables
 * declared in their outer scope.
 * 
 * ... Continue later...
 * */
// Using the 'this' keyword.

/**'this' Keyword
 * In JavaScript, the 'this' keyword is a little different compared to
 * other languages. It refers to an object, but it depends on how or
 * where it is being invoked. It also has some differences between strict
 * mode and non-strict mode.
 * 
 * In an object method, 'this' refers to the object.
 * 
 * Alone, 'this' refers to the global object.
 * 
 * In a function, 'this' refers to the global object.
 * 
 * In a function, in strict mode, 'this' is undefined.
 * 
 * In an event, 'this' refers to the element that received the event.
 * 
 * Methods like call(), apply(), and bind() can refer 'this' to any
 * object.
 */


/**In a method
 * Methods are properties of an object which are functions. The value of
 * 'this' inside a method is equal to the calling object. i.e. 'this' is
 * the object.
 */
const user = {
  name: "Robert",
  age: 27,

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
};
user.sayHi(); // Hi Robert


/**In a function
 * The keyword 'this' when used in a function refers to the global
 * object.
 * In Node.js, that's 'global' or 'globalThis'.
 * In browser, that's 'window'.
 */
function hasThisInIt() {
  console.log("Hey, running this function...")
  this.something = 12; // 'this' will be 'global' i.e. 'globalThis'
}
hasThisInIt();

console.log(global.something); // 12
console.log(globalThis.something); // 12


/**Using it alone
 * In browser, 'this' alone refers to 'window'.
 * In Node.js, 'this' alone refers to module.exports (which is initially
 * an empty object)
 */

console.log(this); // {}
console.log(this.something); // undefined

this.hereIsSomething = "Something"
console.log(this); // { hereIsSomething: 'Something' }
console.log(this.hereIsSomething); // Something


/**In event handlers (browser)
 * The 'this' keyword when used in an event handler refers to the element
 * that receieved the event.
 * 
 * e.g.: (The usual usage of this will be in Browser JS)
 * 
 * 
 * ### HTML ###
 * <button onclick="this.style.display='none'">
 *  Click to Remove me!
 * </button>
 * 
 * or
 * 
 * ### Browser JS ###
 * document.getElementById("someButton").addEventListener("click",
 *  function() {
 *   console.log(this); // <button id="someButton">...</button>
 *  });
 */

// example in Node.js
// (don't worry about all the details of what's going on)
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', function() {
  console.log(this); 
});

myEmitter.emit('event'); // shows the information about myEmitter


/**In Arrow Functions
 * In arrow functions, 'this' retains the value of the enclosing lexical
 * context's 'this'. In other words, when evaluating an arrow function's
 * body, the language does not create a new 'this' binding.
 * 
 * For example, in global code, 'this' is always 'globalThis' regardless
 * of strictness, because of the global context binding:
 */
const globalObject = this;
const myFunc = () => this;
console.log(myFunc() === globalObject); // true
/**Arrow functions create a closure over the 'this' value of its 
 * surrounding scope, which means arrow functions behave as if they are
 * "auto-bound". No matter how it's invoked, 'this' is bound to what it
 * was when the function was created (in the example above, the global
 * object). The same applies to arrow functions created inside other
 * functions: their 'this' remains that of the enclosing lexical context.
 * 
 * Furthermore, when invoking arrow functions using call(), bind() or
 * apply(), the 'thisArg' parameter is ignored. You can still pass other
 * arguments using these methods, though.
 */
const myObject = { name: "myObject" };

// Attempt to set this using call
console.log(myFunc.call(myObject)=== globalObject); // true

// Attempt to set this using bind
const myBoundFunction = myFunc.bind(myObject); // true
console.log(myBoundFunction() === globalObject); // true

// More examples

// Regular function
function regularFunction() {
  console.log(this);
}

const anObject = {
  name: "Rob",
  regularMethod: regularFunction,
  arrowMethod: () => {
    console.log(this);
  }
};

// regularMethod's 'this' depends on how it's called.
anObject.regularMethod(); // logs anObject
// arrowMethod's 'this' is inherited from the lexical scope (global
// object is non-strict mode)

anObject.arrowMethod(); // Logs the global object
                        // in Node.js: 'module.exports'
                        // in browser: 'window'

/**Arrow functions are particularly useful for situations like event
 * handlers or when working with methods inside classes, as they help
 * avoid the common pitfalls associated with 'this'.
 */


/**Function Borrowing
 * Function borrowing allows us to use the methods of one object on a
 * different object without having to make a copy of that method and
 * maintain it in two seperate places. It is accomplished through the use
 * of .call(), .apply(), or .bind(), all of which exist to explicitly 
 * set this on the method we are borrowing.
 * 
 * 
 * When we create JavaScript objects, we typically associate them with
 * certain behavior. Consider the below example:
 */
class Dog {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }

  tellUsAboutYourSelf() {
    return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
  }

  woof() {
    return "WOOF!!!"
  }
}

let fido = new Dog("Fido", 3, "dachshund");
console.log(fido.tellUsAboutYourSelf()); // "My name is Fido..."

/**
 * We've created a class Dog with three properties and two methods, one
 * of which is 'tellUsAboutYourSelf()'. We've also created a new instance
 * of Dog, which is saved into the variable 'fido'. Pretty
 * straightforward. Now, let's create another class and instantiate a new
 * instance:
 */

class Cat {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }

  meow() {
    return "MEOW!!!"
  }
}

let sparkles = new Cat("Sparkles", 5, "siamese");
// sparkles.tellUsAboutYourSelf(); // -> throws a TypeError.

/**
 * We've created a Cat object with the same properties as out Dog object,
 * but our instance of Cat, which is saved into the variable 'sparkles',
 * isn't able to tell us about itself. We could refactor our code so that
 * the class Cat inherits from the class Dog, but in that scenario, all 
 * of our Cat objects would be able to "woof", which doesn't seem
 * appropriate or necessary. This is where we use Function Borrowing.
 * 
 * 
 * How does it work?
 * 
 * Function borrowing allows us to use the methods of one object on a
 * different object without having to make a copy of that method and
 * maintain it in two seperate places. It is accomplished through
 * the use of .call(), .apply(), or .bind(), all of which exist to
 * explicitly set 'this' on the method we are borrowing.
 * 
 * Given the objects we created above, take a look at function borrowing
 * in action:
 */

console.log(fido.tellUsAboutYourSelf.call(sparkles));
// "My name is sparkles..."

console.log(fido.tellUsAboutYourSelf.apply(sparkles));
// "My name is sparkles..."

const describeSparkles = fido.tellUsAboutYourSelf.bind(sparkles);
console.log(describeSparkles());
// "My name is sparkles..."

/**Each of these examples work because 'this', when referenced inside a
 * method, refers to the object that received the method call. .call(),
 * .apply(), and .bind() work by allowing us to alter to object which
 * 'this' refers inside of the .tellUsAboutYourSelf() method.
 * 
 * Whereas .call() and .apply() immediately execute the function call,
 * .bind() saves the function for later. Once we've saved the borrowed
 * function into the variable 'describeSparkles', we can call invoke
 * 'describeSparkles' one hundered lines later and still see the same
 * output.
 */

/**Difference between .call() and .apply()?
 * Both .call() and .apply() are methods used to invoke a function with
 * a specific 'this' context and arguements, but they differ in how you
 * pass those arguements.
 */

/**.call()
 * Syntax: func.call(thisArg, arg1, arg2, ...)
 * Usage: You pass arguements, individually.
 */

/**.apply()
 * Syntax: func.apply(thisArg, [argsArray])
 * Usage: You pass as array of arguements.
 */

// Here's an example to illustrate the difference:

function greet(greeting, punctuation) {
  return greeting + ' ' + this.name + punctuation;
}

const person = {
  name: "Robert"
};

// Using .call()
console.log(greet.call(person, 'Hello', '!')); // "Hello Robert!"

// Using .apply()
console.log(greet.apply(person, ['Hi', '.'])); // "Hi Robert."


/**Explicit Binding
 * 
 * Explicit binding is when you use the .call(), .apply() or .bind()
 * methods to explicitly set the value of 'this' in a function.
 */


/**.bind()
 * The .bind() method in JavaScript allows you to create a new function
 * with a specific context and optionally preset arguments. Unlike call()
 * or apply(), bind() does not immediately invoke the function. Instead,
 * it returns a new function that can be called later, either as a 
 * regular function or with additional arguements. This is particularly
 * useful when you want to ensure that a function retains a specific
 * context, regardless of how or when it's invoked.
 */
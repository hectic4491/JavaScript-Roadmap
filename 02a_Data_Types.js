// Data Types (Primitives)

/*
Data types refers to the type of data that a JavaScript variable can hold.
There are seven primitive data types in JavaScript (Number, BigInt, String,
Boolean, Null, Undefinied and Symbol). Objects are non-primitives.
*/

// Primitive Types:
/*
String - sequence of characteres. Defined between '', "", ``. 
         use `` if we want to input `${ variable }` data.
*/

let myString1 = 'This is a string.'
let myString2 = "This is also a string."
let myString3 = `And this one too. This will also accept variables.`

let myString4 = `This will work. ${ myString2 }`
console.log(myString4)
/*

Number - floating-point numbers, e.g.: 37, -9.25. The Number constructor
         provides constants and methods to work with numbers. Values of 
         other types can be converted to numbers using the Number()
         function
*/

let num1 = 255; // this is just a number.
let num2 = 255.0; // this is equivalent to the num1.
let num3 = 0xff; // this is hexadecimal notation.
let num4 = 0b11111111; // this is binary notation
let num5 = 0.255e3; // this is exponential notation

num1 === num2; // true; ((why use === instead of ==?))
num1 === num3; // true  ((find out later.))
num1 === num4; // true
num1 === num5; // true


/*
Boolean - holds one of two values: true or false. These represent logical
          states and are essential in controlling the flow of a program.
          
          Booleans are commonly used in conditional statements (if, else,
          while, etc.) to determine whether a block of code should execute.
*/

let myBool1 = true;
let myBool2 = false;

myBool1 === myBool2; // false

// let's use the Not symbol of ! before the variable to make these true
// statements. We'll discuss the difference between these equality
// comparisons later.
myBool1 == !myBool2; // true
myBool1 === !myBool2; // true
Object.is(myBool1, !myBool2); // true


/* bigInt - integer of arbitrary size.

Unlike the Number type, which can accurately represnt integers only within
the range of +- 2^53, bigInt can handle integers far beyond this limit.
This makes it particularly useful for applications requiring high precision
with very large numbers, such as cryptography or scientific computations.
*/

let myNormalInt = 10;
let myBigInt1 = BigInt(10);
console.log(myNormalInt); // '10'
console.log(myBigInt1); // '10n'

console.log(1*10**22); // '1e+22'
let myBigInt2 = BigInt(1e22);
console.log(myBigInt2); // '10000000000000000000000n'

console.log(1*10**23); // '1e+23'
let myBigInt3 = BigInt(1e23);
console.log(myBigInt3); // '99999999999999991611392n' ??? precision loss.

/**If you need precise large integer values, it's better to use a string
 * representation to avoid floating-point precision issues */

let myBigInt4 = BigInt('1' + '0'.repeat(23));
console.log(myBigInt4) // 100000000000000000000000n


/**Undefined 
 * Whenever a variable is declared but not initialized or assigned a value,
 * then it is stored as undefined. A function returns undefined if a value
 * was not returned. A method or statement also returns undefined if the
 * variable that is being evaluated does not have an assigned value.
 * Undefined is considered neither true nor false, but behaves as 'falsy'
 */

var myUndefined1; // declared but not assigned.
let myUndefined2; // declared but not assigned. (same)
// const myUndefined; // This would throw an error. const must be assigned.

console.log(Boolean(myUndefined1)) // false
console.log(!Boolean(myUndefined1)) // true

console.log(myUndefined2) // undefined

function dontReturn() {
  console.log(
    "This function will print this to the console, but return 'undefined'"
  );
}

console.log(dontReturn());
// (prints the string)
// undefined

console.log(dontReturn);
// [Function: dontReturn]

console.log(typeof dontReturn);
// function

console.log(typeof dontReturn());
// (prints the string)
// undefined


/**Null - the deliberate absence of any object value.
 * It is considered as one of JavaScript's primitive values and a falsy
 * value. Deliberate absence emphasises the intentional use of null to
 * indicate that a variable does not point to any object. This explicit
 * declaration conveys the purposeful nature of null, showing that the
 * variable is meant to be empty or non-existent at the exection time.
 * 
 * In essence, null is a way to reset a variable, signaling that it should
 * not reference any object.
 */

let myResult = null;

console.log(myResult); // null
console.log(Boolean(myResult)); // false


/**Symbol - A unique and immutable primitive data type in JavaScript.
 * Introduced in ES6, they are often used to create unique property keys
 * for objects, ensuring no property key collisions occur. Each Symbol
 * value is distinct, even when multiple are created with the same
 * description. Symbols can be created using the Symbol() function, and
 * their primary use case is to add hidden or special properties to objects
 * that won't interfere with other properties or methods.
 * 
 * 
 * Symbol is a built-in object whose constructor returns a symbol
 * primitive — also called a Symbol value or just a Symbol — that's
 * guaranteed to be unique. Symbols are often used to add unique property
 * keys to an object that won't collide with keys any other code might
 * add to the object, and which are hidden from any mechanisms other code
 * will typically use to access the object. That enables a form of weak
 * encapsulation, or a weak form of information hiding.
 * 
 * Every Symbol() call is guaranteed to return a unqiue Symbol. Every 
 * Symbol.for("key") call will always return the same Symbol for a given
 * value of "key". When Symbol.for("key") is called, if a Symbol with
 * the given key can be found in the global Symbol registry, that Symbol
 * is returned. Otherwise, a new Symbol is created, added to the global
 * Symbol registry under the given key, and returned.
 * 
 * To create a new primitive Symbol, you write Symbol() with an optional
 * string as its description:
 */
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
/**
 * The above code creates three new Symbols. Note that Symbol("foo") does
 * not coerce the string "foo" into a Symbol. It creates a new Symbol
 * each time:
 */
console.log(Symbol("foo") === Symbol("foo")); // false
console.log(sym2 === sym3); // false
/**
 * The following syntax with the new operator will throw a TypeError:
 * const sym = new Symbol();
 */


/**Symbols, introduced in ES6, are unique and immutable data types that
 * can be used as identifiers for object properties. They are guaranteed
 * to be unique, so even if two symbols have the same description, they
 * will not be the same. Here's how they can be particuarly useful:
 * 
 * Use Cases:
 * 
 * 1. Unique Property Keys: Symbol keys ensure that no property conflicts
 * occur. This is especially useful when intergrating with external code
 * or libraries.
 * 
 * 2. Hidden Properties: Symbols can be used to add properties to an 
 * object that won't show up in a typical enumeration.
 * 
 * 3. Constants: They can be used to define constants that are unique
 * identifiers.
 */

// Using Symbols as Object Properties
const mySymbol = Symbol('mySymbol');
const obj = {
  name: "Robert",
  age: 27
};

obj[mySymbol] = 'Hello, Symbol!';
console.log(obj[mySymbol]); // "Hello, Symbol!"

// The Symbol property doesn't show up in for...in loops or Object.keys:
for (let key in obj) {
  console.log(key); // name   age
}
console.log(Object.keys(obj)); // ['name', 'age']


/**Symbol Methods:
 * 
 * Symbol.for(key): Reuses symbols from a shared registry, if a symbol 
 * with the given key already exists, it returns that symbol.
 * 
 * Symbol.keyFor(sym): Retrieves a shared symbol's key from the global
 * symbol registry.
 */

const globalSym = Symbol.for('global');
const sameSym = Symbol.for('global');

console.log(globalSym === sameSym); // true
console.log(Symbol.keyFor(globalSym)); // 'global'
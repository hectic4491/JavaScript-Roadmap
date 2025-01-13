// Data Types (non-primitives i.e.: Objects)


/**Object
 * JavaScript object is a data structure that allows us to have key-value
 * pairs; so we can have distinct keys and each key is mapped to a value
 * that can be of any JavaScript data type. Comparing it to a real-world
 * object, a pen is an object with several properties, such as color, 
 * design, material, etc. In the same way, JavaScript objects can have
 * properties that define their characteristics.
 */

const myPenObj = {
  color: 'Blue',
  design: 'Pilot',
  material: 'Plastic',
  empty: false,
  lineWidth: 0.7, // (0.7mm) in milimeters
  writeLine() {
    console.log("Writing a line...");
  }
}


console.log(myPenObj);
console.table(myPenObj);
console.log(Object.keys(myPenObj));
console.log(Object.values(myPenObj));

myPenObj.writeLine();


/**
 * typeof Operator
 * You can use the typeof operator to find the data type of a JavaScript
 * variable. It returns a string indicating the type of provided operand's
 * value.
 */

let myNum = 15
console.log(typeof myNum) // number

let myStr = "Hello string."
console.log(typeof myStr); // string

console.log(typeof myPenObj); // object


/**Built-In Objects (Global Objects) **Additional notes from mdn**
 * Built-in objects, i.e. "Global Objects", are those built into the
 * language specification itself. There are numerous built-in objects with
 * the JavaScript language, all of which are accessible at the global scope.
 * Not to be confused with The Global Object, which is acces with 'this' 
 * operator in the global scope. (In fact, the global scope consists of the
 * properties of The Global Object, including inherited properties, if any.)
 * 
 * Other objects in the global scope are either created by the user script
 * or provided by the host application. The host application available in 
 * browser contexts are documented in the **mdm API reference.**
 * 
 * 
 * [[Standard Objects by Category]]
 * 
 * Value Properties - These global properties return a simple value. They
 * have no properties or methods.
 * 
 * > globalThis
 * > Infinity
 * > NaN
 * > undefined
 * 
 * 
 * Function Properties - These global functions (functions which are called
 * globally, rather than on an object) directly return their results to
 * the caller.
 * 
 * eval()
 * isFinite()
 * isNaN()
 * parseFloat()
 * parseInt()
 * decodeURI()
 * decodeURIComponent()
 * encodeURI()
 * encodeURIComponent()
 * 
 * 
 * Fundamental Objects - These objects represent fundamental language
 * constructs.
 * 
 * Object
 * Function
 * Boolean
 * Symbol
 * 
 * 
 * Error Objects - Error objects are a special type of fundamental object.
 * They include the basic Error type, as well as several specialized error
 * types.
 * 
 * Error
 * AggregateError
 * EvalError
 * RangeError
 * ReferenceError
 * SyntaxError
 * TypeError
 * URIError
 * InternalError (Non-Standard)
 * 
 * 
 * Numbers and Dates - These are the bais objects representing numbers,
 * dates, and mathematical calculations.
 * 
 * Number
 * BigInt
 * Math
 * Date
 * 
 * 
 * Text Processing - These objects represent strings and support
 * manipulating them.
 * 
 * String
 * RegExp
 * 
 * 
 * Indexed Collections - These objects represent collections of data which
 * are ordered by an index value. This includes (typed) arrays and array-
 * like constructs.
 * 
 * Array
 * Int8Array
 * Uint8Array
 * Uint8ClampedArray
 * Int16Array
 * Uint16Array
 * Int32Array
 * Uint32Array
 * BigInt64Array
 * BigUint64Array
 * Float16Array
 * Float32Array
 * Float64Array
 * 
 * 
 * Keyed Collections - These objects represent collections which use keys.
 * The iterable collections (Map and Set) contain elements which are easily
 * iterated in the order of insertion.
 * 
 * Map
 * Set
 * WeakMap
 * WeakSet
 * 
 * 
 * Structured Data - These objects represent and interact with structured
 * data buffers and data coded using JavaScript Object Notation (JSON)
 * 
 * ArrayBuffer
 * SharedArrayBuffer
 * DataView
 * Atomics
 * JSON
 * 
 * 
 * Managing Memory - These objects interact with the garbage collection
 * mechanism.
 * 
 * WeakRef
 * FinalizationRegistry
 * 
 * 
 * Control Abstraction Objects - Control abstraction can help to structure
 * code, especially async code (e.g.:without using deeply nested callbacks)
 * 
 * Iterator
 * AsyncInterator
 * Promise
 * GeneratorFunction
 * AsyncGeneratorFunction
 * Generator
 * AsyncGenerator
 * AsyncFunction
 * 
 * 
 * Reflection
 * 
 * Reflect
 * Proxy
 * 
 * 
 * Internationalization - Additions to the ECMAScript core for language-
 * sensitive functionalities
 * 
 * Intl
 * Intl.collator
 * Intl.DateTimeFormat
 * Intl.DisplayNames
 * Intl.DurationFormat
 * Intl.ListFormat
 * Intl.Locale
 * Intl.NumberFormat
 * Intl.PluralRules
 * Intl.RelativeTimeFormat
 * Intl.Segmenter 
 * 
 * 
 * Node.js - Adds many additional global objects.
 * 
 * */


/**
 * Object Prototype ***Important***
 * JavaScript is an object-oriented language built around a prototype model.
 * In JavaScript, every object inherits properties from its prototype, if
 * there are any. A prototype is simply an object from which another object
 * inherits properties. To create complex programs using JavaScript, one
 * has to be proficient in working with prototypes - they form the very
 * core of OOP in the language.
 * 
 * Come back to later...
 */


/**
 * Prototypal Inheritance
 * The Prototypal Inheritance is a feature in JavaScript used to add methods
 * and properties in objects. It is a method by which an object can inherit
 * the properties and methods of another object. Traditonally, in order to
 * get and set the Prototype of an object, we use Object.getPrototypeOf and
 * Object.setPrototypeOf.
 * 
 * Come back to later...
 */


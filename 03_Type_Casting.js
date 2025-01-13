// Type Casting

/**Type Casting
 * Type casting (or type conversion) means the transfer of data from data
 * type to another. Implicit conversion happens when the compiler (for
 * compiled languages) or runtime (for script languages like JavaScript)
 * automatically converts data types. The source code can also explicitly
 * require a conversion to take place.
 */

/**Type Conversion vs Coercion
 * Type coercion is the automatic or implicit conversion of values from 
 * one data type to another (such as strings to numbers). Type conversion
 * is similar to type coercion because they convert values from one data
 * type to another with one key difference - type coercion is implicit.
 * In contrasts, type conversion can be either implicit or explicit.
 */

/**Implicit Type Casting
 * Implicit Type conversion happens when the compiler or runtime
 * automatically converts data types. JavaScript is loosely typed language
 * and most of the time operators automatically convert a value to the
 * right type.
 */

/**Explicit Type Casting
 * Type casting means transferring data from one data type to another by 
 * explicitly specifying the type to convert the given data to. Explicit
 * type casting is normally done to make data compatible with other
 * variables. Examples of typecasting methods:
 */

// String Conversion:
// using String()
let myNum = 123;
let myStr = String(myNum);
console.log(myStr); // 123
console.log(typeof myStr); //string

// using toString()
myNum = 456;
myStr = myNum.toString();
console.log(typeof myStr); // string

// using Template Literals
myNum = 789;
myStr = `${myNum}`
console.log(typeof myStr); // string


// Number Conversion:
// using Number()
myStr = "255";
myNum = Number(myStr);
console.log(typeof myNum) // number

// using parseInt() and parseFloat()
myStr = "102.3";
myNum = parseInt(myStr);
console.log(`${myNum} is a ${typeof myNum}`); // '102 is a number'

myNum = parseFloat(myStr);
console.log(`${myNum} is a ${typeof myNum}`); // '102.3 is a number'


// Boolean Conversion:
// using Boolean()
myStr = "Hello"
myBool = Boolean(myStr);
console.log(myBool); // true

// using double NOT operator !!
myStr = ""
myBool = !!myStr;
console.log(myBool); // false


// Date Conversion:
// using Date() **we have to use the new keyword to create a new instance
// of the Date object.
let myDateString = "2025-01-13"
let myDate = new Date(myDateString);
console.log(myDate); // 2025-01-13T00:00:00.000Z
console.log(typeof myDate); // object


let now = new Date();
console.log(now); // Current date and time. e.g.:'2025-01-13T22:36:23.323Z'


// BigInt Conversion
// using BigInt()
myNum = 1234567890;
let myBigInt = BigInt(myNum);
console.log(myBigInt); // 1234567890n
  

// Array Conversion
// using Array.from()
myStr = "Taro";
let myArr = Array.from(myStr);
console.log(myArr); // [ 'T', 'a', 'r', 'o' ]
console.log(typeof myArr); // object
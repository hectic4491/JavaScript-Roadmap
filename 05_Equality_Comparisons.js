// Equality Comparisons

/** Equality Comparisons
 * Comparison operators are used in logical statements to determine
 * equality or difference between variables or values. Comparison operators
 * can be used in conditional statements to compare values and take action
 * depending on the result.
 * 
 * ==
 * 
 * ===
 * 
 * Object.is()
 * 
 */

/** ==, ===, Object.is()
 * In JavaScript the == operator does the type conversion of the operands
 * before comparison, whereas the === operator compares the values and the
 * data types of the operands. The Object.is() method determines whether
 * two values are the same value: Object.is(value1, value2).
 * 
 * Object.is() is not equivalent to the === operator. The == operator
 * applies various coercions to both sides (if they are not the same type)
 * before testing for equality (resulting in such behaviors as "" == false
 * being true), but Object.is() doesn't coerce either value. 
 * 
 * Object.is() is also not equivalent to the === operator. The only
 * difference between Object.is() and === is in their treatment of signed
 * zeros and NaN values. The === operator (and the == operator) treats the
 * number values -0 and +0 as equal but treats NaN as not equal to each
 * other.
 */

let myZero1 = 0;
let myZero2 = "0";
const emptyObj = {};

// using == will coerce the types together.
console.log(myZero1 == myZero2); // true
console.log(myZero1 == false); // true
console.log(myZero2 == false); // true
console.log("" == false); // true

// using === will preserve the types.
console.log(myZero1 === myZero2); // false
console.log(myZero1 === false); // false
console.log(myZero2 === false); // false
console.log(myZero1 === 0); // true
console.log(myZero1 === -0); // true
console.log(myZero1 === +0); // true


// using Object.is doesn't allow equality on signed zeros.
console.log(Object.is(myZero1, myZero2)); // false
console.log(Object.is(myZero1, 0)); // true
console.log(Object.is(myZero1, -0)); // false

console.log(Object.is(emptyObj, {})); // false
console.log(Object.is(NaN, NaN)); // true




/**Equality Algorithms
 * 
 */
// Expressions and Operators

/**
 * At a high level, an expression is a valid unit of code that resolves to
 * a value. There are two types of expressions: those that have side
 * effects (such as assigning values) and those that purely evaluate. The
 * expression 'x = 7' is an example of the first type. This expression uses
 * the '=' operator to assign the value seven to the variable x. The
 * expression itself evaluates to 7. The expression '3 + 4' is an example
 * of the second type. This expression uses the + operator to add 3 and 4 
 * together and produces a value, 7.
 * 
 * However, if it's not eventually part of a bigger construct (for example,
 * a variable declaration like 'const z = 3 + 4'), its result will
 * be immediately discarded '-' this is usually a programmer mistake because
 * the evaluation doesn't produce any effects. As the example above also
 * illustrate, all complex expressions are joined by operators, such as =
 * and +.
 */




/**Conditional Operators i.e. Ternary Operator
 * Conditional Operators, also known as Ternary operators are the only
 * JavaScript operator that takes three operands.
 * 
 * The operator can have one of two values based on a condition.
 * Syntax:
 * 
 * c(x) ? t : f
 * 
 * condition ? expressionIfTrue : expressionIfFalse
 */

const age = 20;
// Here is a ternary operator with round braces to illustrate each operand.
let drink = (age >= 21) ? ("Here's a drink.") : ("Here's some milk.");
// In reality we don't have to write the round braces.
drink = age >= 21 ? "Here's a drink." : "Here's some milk.";
console.log(drink);


/** Comma Operators
 * The comma operator ( , ) evaluates each of its operands (from left to
 * right) and returns the value of the last operand. This lets you create
 * a compound expression in which multiple expressions are evaluated, with
 * the compound expression's final value being the value of the rightmost
 * of its member expressions. This is commonly used to provide multiple 
 * parameterse to a for loop.
 */

// example 1:
let x = 1;
x = (x++, x);
console.log(x); // 2
x = (2, 3);
console.log(x); // 3

// example 2:
x = 10;
y = 20;
z = (x++, y++, x + y); // the comma expression operated from left to right.
// so now:
console.log(x) // 11;
console.log(y) // 21;
console.log(z) // 32;

// example 3:
for (let i = 0, j = 10; i <= 10; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}


/**Unary Operators
 * JavaScript Unary Operators are the special operators that consider a 
 * single operand and perform all the types of operations on that single
 * operand. These operators include unary plus, unary minus, prefix
 * increment, postfix increments, prefix decrements, postfix decrements,
 * 
 * By applying it to a string, it cast it to a number type.
 */

// Unary plus (+) 
let a = 3;
a = +2;
console.log(a); // we set a to positive 2.
// 
let num = +"9";
console.log(num, typeof num); // number

// Unary minus (-)
let b = 5;
b = -b; // b is now -5


// Postfix Increment (x++)
/**Postfix
 * If using postfix, the increment operator increments and returns the
 * value before incrementing.
 */
let i = 0;
let j = i++;
// i is now 1
// j is now 0


// Prefix Increment (++x)
/**Prefix
 * If using prefix, the increment operator increments and returns the
 * value after incremening.
 */
i = 4;
j = ++i;
// i is now 5;
// j is now 5;


// Postfix Decrement (x--)
j = 10
j--;
// j is now 9


// Prefix Decrement (--x)
i = --j
// i is now 8
// j is now 8


// Logical NOT (!)
let isTrue = true;
isFalse = !isTrue;
console.log(isTrue, isFalse); // true false


// Bitwise NOT (~)
let e = 5; // 0000000000000101 in binary
e = ~e; // is now -6 (1111111111111010) in binary using 16 bits.

// ??? Why's that ???

/**Two's Complement Representation
 * In a two's complement system, the most significant bit (MSB), is used
 * to indicate the sign of the number. If it is 0, then the number is
 * positive. If it's 1 then it is negative.
 * 
 * e.g.:
 * 01111111 11111111 11111111 11111010 is a positive number
 * 11111111 11111111 11111111 11111010 is a negative number.
 * 
 * To represent the negative number, the Two's Complement Representation
 * inverts all the bits and adds 1 to the result. So..
 * 11111111 11111111 11111111 11111010 is a negative number becomes
 * 00000000 00000000 00000000 00000101 then we add 1.
 * 00000000 00000000 00000000 00000110 this is now 6. 
 * */


/**keyword Unary Operators:
 * 
 * delete - deletes a property from an object. 
 * 
 * void - evaluates an expression and discards its return value. 
 * 
 * typeof - determines the type of a given object. 
 * 
 * await - pause and resume an async function and wait for the promise's
 *         fulfillment/rejection.
 */  


/**Assignment Operators
 * An assignment operator assigns a value to its left operand based on
 * the value of its right operand. This simple assignment operator is
 * equal (=), which assigns the value of its right operand to its left
 * operand. This is, x = f() is an assignment expression that assigns the
 * value of f() to x.
 * 
 * Here they are:
 * 
 * = assignment operator.
 * *= multiplication assignment.
 * /= division assignment.
 * %= remainder assignment.
 * += addition assignment.
 * -= subtraction assignment.
 * **= exponentiation assignment.
 * 
 * <<= left shift assignment.
 * >>= right shift assignment.
 * >>>= unasigned right shift assignment.
 * 
 * &= bitwise AND assignment.
 * |= Bitwise XOR assignment.
 * ^= Bitwise OR assignment.
 * 
 * &&= Logical AND assignment.
 * ||= Logical OR assignment.
 * ??= Nullish coalescing assignment.
 * 
 * [a, b] = arr
 * {a, b} = obj
 * Destructuring assignment
 */

// Bitwise assignment examples
// (&=) bitwise AND
a = 5;  // 5 is 0101 in binary
a &= 3; // 3 is 0011 in binary
// a is now 1. because a is (0001) in binary.

// (|=) bitwise OR
a = 5;  // 5 is 0101 in binary
a |= 3; // 3 is 0011 in binary
// a is now 7. because a is (0111) in binary.

// (^=) bitwise XOR
a = 5;  // 5 is 0101 in binary
a ^= 3; // 3 is 0011 in binary
// a is now 6. because a is (0110) in binary.

// (~) bitwise NOT
a = 5;  // 5 is 0101 in binary
a = ~a; // 3 is 0011 in binary (two's complement: -6)
// a is now -6.

// (<<=) Left Shift Assignment
a = 5;   // 5 is 0101 in binary
a <<= 1; // shift left by 1 bit: 1010
// a is now 10.

// (>>=) Right Shift Assignment
a = 5;  // 5 is 0101 in binary
a >>= 1 // shift right by 1 bit: 0010
// a is now 2.

// (>>>=) Unsigned right shift assignment
let g = -5; // In binary (two's complement): 11111111111111111111111111111011
g >>>= 1;  // Shift right by 1 bit, filling left with zeros: 01111111111111111111111111111101
// g is now 2147483645

// Nullish Coalescing Assignment
// If the variable is null or undefined, it gets assigned the value.
a = null;
a ??= 5;
console.log(a); // 5

a = undefined;
a ??= 7;
console.log(a); // 7

a = 3;
a ??= 15;
console.log(a); // 3

a = false;
a ??= 20
console.log(a); // false


/**Comparison Operators 
 * Comparison operators are the operators that compare values and return
 * true or false. They include:
 * 
 * > 
 * < 
 * >=
 * <=
 * ==
 * ===
 * !=
 * !==
 * 
 */


/**Arithmetic Operators
 * The Arithmetic operators perform the usual mathematical operations.
 * 
 * + Addition
 * - Subtraction
 * * Multiplication
 * ** Exponentiation
 * / Division
 * % Modulus i.e. Remainder Division
 * 
 */

/**Logical Operators
 * These are the four logical operators in JavaScript:
 * 
 * ||  OR
 * &&  AND
 * !   NOT
 * ??  Nullish Coalescing
 * 
 */

/**Bitwise Operators
 * Bitwise Operators treat arguments as 32-bits (zeros & ones) and work on
 * the level of their binary representation. e.g. Decimal number 9 has 
 * a binary representation of 1001. Bitwise operators perform their
 * operations on such binary representations, but they return JavaScript
 * values.
 * 
 * & AND
 * | OR
 * ^ XOR
 * ~ NOT
 * << LEFT SHIFT
 * >> RIGHT SHIFT
 * >>> Zero-Fill RIGHT SHIFT
 */

a = 2; // 00000010
b = 1; // 00000001
console.log(a & b); // expect: 00000000 , 0
console.log(a | b); // expect: 00000011 , 3


/**String Operators
 * 
 * Concatenation: +, +=
 * 
 */


/**BigInt Operator Rules
 * 
 */
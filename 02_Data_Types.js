// Data Types

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


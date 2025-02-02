// A closer look at Arrays in JavaScript

/**The array object, as with arrays in other programming languages,
 * enables storing a collection of multiple items under and single
 * variable name, and has members for performing common array operations.
 * 
 * Description:
 * 
 * In JavaScript, array's aren't primitives but are instead 'Array'
 * objects with the following core characteristics:
 * 
 * > JavaScript arrays are resizable and can contain a mix of different
 * data types. (When those characteristics are undesirable, use
 * typed arrays instead.)
 * 
 * > JavaScript arrays are not associate arrays and so, array elements
 * cannot be accessed using arbitrary strings as indexes, but must be
 * accessed using nonnegative integers (or their respective string form)
 * as indexes.
 * 
 * > JavaScript arrays are zero-indexed: the first element of an array
 * is at index 0, the second is at index 1, and so on - and the last
 * element is at the value of the array's length property minus 1.
 * 
 * > JavaScript array-copy operations create shallow copies. (All
 * standard built-in copy operations with any JavaScript objects create
 * shallow copies, rather than deep copies.)
 */




/* Main operations with arrays in JavaScript

Creating Arrays:
Using array literals: let arr = [1, 2, 3];
Using the Array constructor: let arr = new Array(3);
*/
let arr = [1, 2 ,3] // [ 1, 2, 3 ]
let thisArr = new Array(8); // [ <8 empty items> ]

/*
Accessing Elements:
Access elements by index: let firstElement = arr[0];
*/
let secondElement = arr[1];
console.log(secondElement); // 2
arr[1] = "A string!";
console.log(secondElement); // still 2. The variable is assigned to what
                            // value was at the position of the array
                            // at the time of assignment

/*
Adding Elements:
push(): Adds one or more elements to the end of an array.
unshift(): Adds one or more elements to the beginning of an array.
*/
arr.push(4); // arr = [ 1, 15, 3, 4 ]

/*
Removing Elements:
pop(): Removes the last element from an array.
shift(): Removes the first element from an array.
*/
arr.pop(); // [ 1, 'A string!', 3 ]
arr.shift(); // [ 'A string!', 3 ]

/*
Finding Elements:
indexOf(): Returns the first index at which a given element can be found.
includes(): Determines whether an array includes a certain element.
find(): Returns the first element that satisfies a provided testing
        function.
*/
let whereIsThree = arr.indexOf(3); // 1
let whereIsTwo = arr.indexOf(2); // -1 i.e. it doesn't exits
let containAString = arr.includes("A String!") // false

let findAModThree = arr.find(value => value % 3 === 0); // 3; as expected

let findAnotherModThree = arr.find((value) => {
  value % 3 === 0
}); // undefined; if we use a function block, we need to explicitly
    // return a value.

let pleaseFindAnotherModThree = arr.find((value) => {
  return value % 3 === 0
}); // 3; we now choose what to return.

/*
Iterating Over Arrays:
forEach(): Executes a provided function once for each array element.
map(): Creates a new array with the results of calling a provided function
       on every element.
*/

/*
Filtering and Reducing Arrays:
filter(): Creates a new array with all elements that pass the test
          implemented by the provided function.
reduce(): Executes a reducer function on each element, resulting in a
          single output value.
*/

/*
Merging and Slicing Arrays:
concat(): Merges two or more arrays.
slice(): Returns a shallow copy of a portion of an array.
*/

/*
Sorting Arrays:
sort(): Sorts the elements of an array in place.
reverse(): Reverses the order of the elements in an array.
*/

/*
Manipulating Arrays:
splice(): Changes the contents of an array by removing or replacing
existing elements and/or adding new elements.
*/
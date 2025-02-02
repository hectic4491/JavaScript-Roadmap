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
arr.push(4); // arr = [ 1, 'A string!' 15, 3, 4 ]
arr.unshift(0); // arr = [ 0, 1, 'A string!', 3, 4 ]

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
const scores = [80, 98, 63, 82, 45, 82, 93, 74]
const passed = [];
scores.forEach((score) => {
  if (score >= 65) {
    passed.push(score)
  };
});
console.log(passed.length); // 6

const scoresWithBonus = scores.map((score) => {
  return score + 5
})
console.log(scoresWithBonus); // [ 85, 103, 68, 87, 50,  87, 98, 79 ]

/*
Filtering and Reducing Arrays:
filter(): Creates a new array with all elements that pass the test
          implemented by the provided function.
reduce(): Executes a reducer function on each element, resulting in a
          single output value.
*/
const weights = [1.5, 1.8, 1.3, 1.2, 0.9, 1.7, 1.4, 2]
const heavy = weights.filter(weight => {
  if (weight >= 1.5) {
    return weight
  }
});
console.log(heavy); // [ 1.5, 1.8, 1.7, 2 ]

// reduce does a little bit of lifting behind the scenes, by returning
// the previous calculation as a parameter into the function for the 
// next value.
const totalWeight = weights.reduce((accumulator, value) => {
  return accumulator + value}, 0);
  console.log(totalWeight);
/*

Merging and Slicing Arrays:
concat(): Merges two or more arrays.
slice(): Returns a shallow copy of a portion of an array.
*/
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
const arrThree = [7, 8, 9];
let firstSix = arrOne.concat(arrTwo); // [ 1, 2, 3, 4, 5, 6 ]
let allNine = arrOne.concat(arrTwo, arrThree);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
let withZero = allNine.concat(0);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
let someMore = withZero.concat(33, 66, 99);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 33, 66, 99 ]
let evenMore = someMore.concat(88, [11, 22]);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 33, 66, 99, 88, 11, 22 ]


let firstFive = evenMore.slice(0, 5); // [ 1, 2, 3, 4, 5 ]
let dropFirstTen = evenMore.slice(10); // [ 33, 66, 99, 88, 11, 22 ]
let keepLastFive = evenMore.slice(-5); // [ 66, 99, 88, 11, 22 ]

let shallowCopy = arrOne.slice(); // [ 1, 2, 3 ]
console.log(shallowCopy); // [ 1, 2, 3 ]
shallowCopy[1] = 15;
console.log(shallowCopy); // [1, 15, 3] as expected
console.log(arrOne); // [ 1, 2, 3] as expected 

// However...
let arrayWithObject = [ 5, 10, {a: 1, b: -1}];
shallowCopyArrayWithObject = arrayWithObject.slice()

arrayWithObject[2].a = 15;
console.log(arrayWithObject); // [ 5, 10, { a: 15, b: -1 } ]
console.log(shallowCopyArrayWithObject);
// [ 5, 10, { a: 15, b: -1 } ] This was also updated.

shallowCopyArrayWithObject[2].b = -3;
console.log(shallowCopyArrayWithObject);
// [ 5, 10, { a: 15, b: -3 } ] as expected
console.log(arrayWithObject);
// [ 5, 10, { a: 15, b: -3 } ] !! Original array was updated!

/**A shallow copy means creating a new object that is a copy of the
 * original object, but only at the first level. The new object will have
 * the same properties or elements as the original one. However, if those
 * properties or elements are objects themselves (nested objects), the
 * shallow copy will not create a new instance of those nested objects;
 * instead, it will copy references to the original nested objects.
 */


/*
Sorting Arrays:
sort(): Sorts the elements of an array in place.
reverse(): Reverses the order of the elements in an array.
*/
let ages = [ 15, 17, 11, 16, 23, 12];
ages.reverse();
console.log(ages); // [ 12, 23, 16, 11, 17, 15 ]
ages.sort();
console.log(ages); // [ 11, 12, 15, 16, 17, 23 ]


/*
Manipulating Arrays:
splice(): Changes the contents of an array by removing or replacing
          existing elements and/or adding new elements. Unlike slice()
          which returns a new array, splice() modifies the original.
*/
// Removing
let thisArray = [1, 2, 3, 4, 5];
let removedElements = thisArray.splice(1, 2);
// (1, 2) -> 1: starting index;
//           2: number of elements to remove.
console.log(thisArray);
// modified original array [ 1, 4, 5 ]
console.log(removedElements);
// we can return the spliced out array [ 2, 3 ]

// Adding
thisArray.splice(1, 0, 2, 3);
// (1, 0, 2, 3) -> 1: starting index
//                 0: number of elements to remove (none)
//                 2, 3: elements to add
// [ 1, 2, 3, 4, 5 ]

// Replacing
thisArray.splice(2, 3, 7, 7, 7); // [ 1, 2, 7, 7, 7 ]
thisArray.splice(1, 3, 10); // [ 1, 10, 7 ] 

/**
 * Recap:
 * All arrays have the built-in method of .length.
 * i.e.: myArray.length will return the length of the array.
 * 
 * push()
 * unshift()
 * 
 * pop()
 * shift()
 * 
 * indexOf()
 * includes()
 * find()
 * 
 * forEach()
 * map()
 * 
 * filter()
 * reduce()
 * 
 * concat()
 * slice()
 * 
 * sort()
 * reverse()
 * 
 * splice()
 */
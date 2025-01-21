// Iterators and Generators

/**JavaScript Iterators and Generators
 * Iterators and generators, introduced into JavaScript with ECMAScript 6,
 * represent an extremely useful concept related to iteration in the 
 * language. Iterators are objects, abiding by the iterator protocol, that
 * allows us to easily iterate over a given sequence in various ways, such
 * as using the for...of loop. Generators, on the other hand, allow us to
 * use functions and the 'yield' keyword to easily define iterable
 * sequences that are iterators as well.
 * 
 * 
 * Iterables are iterable objects (like Arrays).
 * Iterables can be accessed with simple and efficient code.
 * Iterables can be iterated over with for...of loops.
 * 
 * The for...of loop:
 * 
 * for (variable of iterable) {
 *    // code block to be executed
 * }
 */ 

 // e.g.: Iterating over a string:
 
const myString = "Robert Hunt";
for (const x of myString) {
  console.log(x);
}

// e.g.: Iterating over an Array:
const myArray = [1, 4, 6, 2, 3, 7, 7, 3, 2]
for (const n of myArray) {
  console.log(n);
}

// e.g.: Iterating over a Set:
const mySet = new Set(['A', 'B', 'C', 'X', 'Y', 'Z']);
for (const c of mySet) {
  console.log(c);
}

// e.g.: Iterating over a map:
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for (const fruit of fruits) {
  console.log(fruit);
}


/**JavaScript Iterators
 * The iterator protocol defines how to produce a sequence of values from
 * an object.
 * An object becomes an iterator when it implements a next() method.
 * The next() method must return an object with two properties:
 * > value (the next value) - The value returned by the iterator
 * > done (true or false) - true if the iterator has completed
 *                          false if the iterator has produced a new value
 * 
 * Note** Technically, iterables must implement the Symbol.iterator method.
 * String, Array, TypedArray, Map, and Set are all iterables, because
 * their prototype objects have a Symbol.iterator method.
 * 
 * 
 * Custom Iterable:
 * This iterable returns never ending 10, 20, 30, 40, Everytime next() is
 * called:
 */

// Custom Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return {value: n, done: false}
    }
  };
}

// Create the iterable
const n = myNumbers();
console.log(n.next().value); // 10
console.log(n.next().value); // 20
console.log(n.next().value); // 30
console.log(n.next().value); // 40
console.log(n.next().value); // 50
console.log(n.next().value); // 60
// However, this will not support a for...of loop.


/**A JavaScript iterable is an object that has a Symbol.iterator.
 * The Symbol.iterator is a function that returns a next() function.
 * An iterable can be iterated over with the code:
 *    for (const x of iterable) { }
 */

// e.g.:
// Create an Object
myTens = {};

// Make it iterable
myTens[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n === 100) {done = true}
      return {value: n, done: done};
    }
  };
}

// Now we can use a for...of loop
for (const n of myTens) {
  console.log(n);
}



/**Generators
 * ...
 */
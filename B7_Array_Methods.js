// Some Array Methods

/**forEach
 * 
 * The forEach() method is JavaScript is used to execute a provided
 * function once for each element in an array. It's a convienient way
 * to iterate over array elements without having to manually manage
 * loop counters or indices
 * 
 * Syntax: array.forEach(callback(currentValue, index, array) {
 *    // code to execute for each element
 * });
 * 
 */

//e.g.: 1; with an anonymous function
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Element at index ${index} is ${number}`);
});


//e.g.: 2; arrow functions
const fruits = ['apple', 'banana', 'cherry'];

// explicit braces:
fruits.forEach((fruit) => {console.log(fruit)});

// this is equivalent:
fruits.forEach(fruit => console.log(fruit));
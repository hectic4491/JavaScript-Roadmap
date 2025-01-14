// Loops and Iterations

/** The for Loop
 * The for loop is a standard control-flow construct in many programming
 * languages, including JavaScript. It's commonly used to iterate over 
 * given sequences or iterate a known number of times and execute a piece
 * of code for each iteration.
 */

for (let i = 0; i < 5; i++) {
  console.log(`Step: ${i}`);
}

myString = "Elephant"
for (let i = 0; i <myString.length; i++) {
  console.log(myString[i])
}

/** for ...of statement
 * The for...of statement executes a loop that operates on a sequence of
 * values sourced from an iterable object. Iterable objects include
 * instances of built-ins such as Array, String, TypedArray, Map, Set, 
 * NodeList (and other DOM collections) and the arguements object,
 * generators produced by generator functions, and user-defined iterables.
 * 
 * The for...of statement in JavaScript is a modern way to iterate over
 * iterable objects, such as arrays, strings, maps, sets, and more. It
 * allows you to loop through values of an iterable, making it simpler and
 * more readable compated to traditional loops like 'for' or 'for...in'.
 */

// on a List
const groceryList = ['egg', 'milk', 'cheese', 'tomatoe', 'onion'];
for (const item of groceryList) {
  console.log(`Grocery Item: ${item}`);
}

// on a String
const groceryStore = "North Shore Farms"
for (char of groceryStore) {
  console.log(char);
}

// on a Map
const myMap = new Map([
  [0, 'This is Zero'],
  [1, 'This is One']
]);
for (const [key, value] of myMap) {
  console.log(`${key}, ${value}`);
}


/** for...in statement
 * The for...in statement iterates over all enumerable properties of an
 * object that are keyed by strings (ignoring ones keyed by Symbols),
 * including inherited enumerable properties.
 */

// Iterating over an object
const vowelCount = {a: 4, e: 6, i:3, o:8, u: 2}
for (const vowel in vowelCount) {
  console.log(`${vowel}: ${vowelCount[vowel]}`);
}


/** while Loops
 * The while statement creates a loop that executes a specified statement 
 * as long as the test condition evaluates to true. The condition is
 * evaluated before executing the statement.
 */

// examples:
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

count = 10;
while (count > 0) {
  console.log(count);
  count--;
}

count = 0;
while (true) {
  console.log(`${count}: Still looking for 6...`);
  count++;
  if (count === 6) {
    console.log(`Found ${count}!`);
    break;
  }
}

/** do...while Loops
 * The do...while statement creates a loop that executes a specified 
 * statement until the test condition evaluates to false. This condition is
 * evaluated after executing the statement, resulting in the specified
 * statemen at least once.
 */

// example:
count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);

/** break / continue statements
 * 
 * A break statement, without a label reference, can only be used to jump
 * out of a loop or switch block.
 * 
 * A continue statement, with or without a label reference, can only be
 * used to skip one loop iteration.
 */

// Break examples:
// 1. Exiting a for loop:
for (let i = 0; i < 4; i++) {
  if (i === 3) {
    break
  }
  console.log(i);
}

// 2. Exiting a while loop:
count = 0;
while (count < 10) {
  if (count === 5) {
    break;
  }
  console.log(count);
  count++;    
}

// 3. Exiting a nested loop (with labeling!):
outerLoop: for(let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if ( i === 1 && j === 1) {
      break outerLoop
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}


// Continue examples:
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // skip the even numbers
  }
  console.log(`odd: ${i}`);
}

// using continue in a while loop:
let i = 0;

while (i < 8) {
  i++;
  if (i % 2 === 0) {
    continue; // skip the even numbers
  }
  console.log(i);
}

// using continue in a nested loop
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log(`Match! i: ${i}, j: ${j}`)
      continue outerLoop; // Skip the rest of the outer loop
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// Asynchronous JavaScript

/**Asynchronous programming is a technique that enables your program to
 * start a potentially long-running task and still be able to be
 * responsive to other events that task runs, rather then having to wait
 * until that task has finished. Once that task has finished, your
 * program is presented with the result.
 * 
 * Many functions provided by browsers, especially the most interesting
 * ones, can potentially take a long time, and therefore, are
 * asynchronous. For example:
 * 
 * > Making HTTP requests using 'fetch()'
 * 
 * > Accessing a user's camera of microphone using 'getUserMedia()'
 * 
 * > Asking a user to select files using 'showOpenFilePicker()'
 * 
 * So even though you may not have to implement your own asynchronous
 * functions very often, you are very likely to need to use them
 * correctly.
 */


/**setTimeout()
 * The setTimeout() method of the 'Window' interface sets a timer which
 * executes a function or specified piece of code once the timer expires.
 * 
 * The setTimeout() is executed only once.
 * 
 * If you need repeated executions, use setInterval() instead.
 * 
 * Use the clearTimeout() method to prevent the function from starting.
 * 
 * To clear a timeout use the id returned from the setTimeout():
 * 
 * 
 * Syntax: setTimeout(function, milliseconds, param1, param2, ...)
 *   returns: a number ID
 */


// Here's a simple function:
function myGreeting () {
  console.log("Hello from myGreeting!")
}
// This will execute the setTimeout method, which will execute it's
// argument function in 250 milliseconds.
setTimeout(myGreeting, 250);

// Or we can pass an arrow function
setTimeout( () => {
  console.log("Hell from my arrow function inside setTimeout.")
}, 500);


// setTimeout() returns an ID, which we can assign to variable.
// we use this ID to reference the timeout and cancel it in a
// clearTimeout() method.
const myTimeout = setTimeout(myGreeting, 2000);
clearTimeout(myTimeout); // the above line gets cancelled.


// If the function to be executed in the setTimeout takes parameters...
function myFunction(n) {
  console.log(`Hello, you passed ${n} into myFunction!`)
}

// we pass them after the 'function' and 'milliseconds' parameters...
// we can have many parameters.
setTimeout(myFunction, 1000, 15);


/**setInterval()
 * The setInterval() method helps us to repeatedly execute a function
 * after a fixed delay. It returns a unique interval ID which can later
 * be used by the clearInterval() method, which stops further repeated
 * execution of the function.
 * 
 * setInterval() is similar to setTimeout(), with a difference. Instead
 * of running the callback function once, it will run it forever, at the
 * specified time interval you specify (in milliseconds)
 * 
 * Syntax: setInterval(function, milliseconds, param1, param2, ...)
 */
// Here's a function.
function myIntervalFunction() {
  console.log("Beep")
}
// Here a setInterval will call that function ever half second.
const beepScheduler = setInterval(myIntervalFunction, 500);

// Here we clear the interval after 2.5 seconds by creating a setTimeout.
setTimeout(() => {
  clearInterval(beepScheduler);
}, 2100);


// Here's an example to try and grasp:
const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

let i = 0;
const myInterval = setInterval((array) => {
  console.log(array[i])
  i += 1;
  if (i === myArray.length) {
    clearInterval(myInterval);
  }
}, 100, myArray);


/**Callbacks  """mdn"""
 * A callback function is a function passed into another function as an
 * argument, which is then invoked inside the outer function to complete
 * some kind of routine or action.
 * 
 * The consumer of a callback-based API writes a function that is passed
 * into the API. The provider of the API (called the 'caller') takes the
 * function and calls back (or executes) the function at some point
 * inside the caller's body. The caller is reponsible for passing the 
 * right parameters into the callback function. The caller may also
 * expect a particular return value from the callback function, which is
 * used to instruct further behavior of the caller.
 * 
 * There are two ways in which the callback may be called: synchronous
 * and asynchronous. Synchronous callbacks are called immediately after
 * the invocation of the outer function, with no intercening asynchronous
 * tasks, while asynchronous callbacks are called at some point later,
 * after a asynchronous operation has completed.
 * 
 * Understanding whether the callback is synchronously or synchronously
 * called is particularly important when analyzing side effects.
 */


/**Callback Hell
 * By having a lot of nested callback functions, we have a confusing 
 * code structure. We should instead seperate the nest into piece-wise
 * functions.
 */


/**Promises
 * Promises are a much better way to work with asynchronous code in
 * JavaScript than the old error-prone callback approach. They were
 * introduced into JavaScript with ECMAScript 6. Using promises, we can
 * manage extremely complex asynchronous code with rigorous error-
 * handling setup, write code in a more or less synchronous style, and
 * keep ourselves from running into callback hell.
 * 
 * Syntax: let promise = new Promise(function(resolve, reject) {
 *    // executor (the code)
 * });
 * 
 * 
 * "Producing code" is code that can take some time.
 * 
 * "Consuming code" is code that must wait for the result.
 * 
 * A Promise is an object that links Producing code and Consuming code.
 */
/*
A Promise contais both the producing code and calls to the consuming
code:
*/
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

/**Promise Object Properties:
 * A JavaScript Promise object can be:
 * > Pending
 * > Fulfilled
 * > Rejected
 * 
 * The Promise object supports two properties: state and result.
 * While a Promise object is "pending" (working), the result in undefined.
 * While a Promise object is "fulfilled", the result is a value.
 * While a Promise object is "rejected", the result is an error object.
 * 
 * myPromise.state        myPromise.result
 * "pending"              undefined
 * "fulfilled"            a result value
 * "rejected"             en error object
 * 
 * You cannot access the Promise property state and result.
 * You must use a Promise method to handle promises.
 */


/**Promises and async/await
 * 
 * To be continued...
 */


/**The Event Loop   (Advanced)
 * The Event Loop is one of the most important aspects to understand about
 * Node.js. Why is this so important? Because it explains how Node.js can
 * be asynchronous and have non-blocking I/O, it explains the 'killer
 * feature' of Node.js, which made it this successful.
 * 
 * """mdn"""
 * JavaScript has a runtime model based on an 'event loop', which is
 * responsible for executing the code, collecting and processing events,
 * and executing queued sub-tasks. This model is quite different from
 * models in other languages like C and Java.
 * 
 * Runtime Concepts
 * The following sections explain a theoretical model. Modern JavaScript
 * engines implement and heavily optimize the described semantics.
 * 
 * 
 * [Visual Representation]
 * 
 * Stack : Frame, Frame, Frame...
 * Heap : Object, Object, Object...
 * Queue : Message, Message, Message...
 * 
 * 
 * The Stack:
 * Function calls form a stack of frames.
 */
function foo(b) {
  const a = 10;
  return a + b + 11;
}
function bar(x) {
  const y = 3;
  return foo(x * y);
}
const baz = bar(7); // assigns 42 to baz.
/**
 * Order of operations:
 * 
 * 1. When calling 'bar', a first frame is created containing references
 * to 'bar's arguments and local variables.
 * 
 * 2. When 'bar' calls 'foo', a second frame is created and pushed on top
 * of the first one, containing references to 'foo's arguments and local
 * variables.
 * 
 * 3. When 'foo' returns, the top frame element is popped out of the
 * stack (leaving only 'bar's call frame).
 * 
 * 4. When 'bar' returns, the stack is empty.
 * 
 * Note that the arguments and local variables may continue to exist, as
 * they are stored outside the stack - so they can be accessed by any
 * nested functions long after their outer function has returned.
 */

/**
 * The Heap:
 * Objects are allocated in a heap, which is just a name to denote a large
 * (mostly unstructured) region of memory.
 */

/**
 * The Queue:
 * A JavaScript runtime uses a message queue, which is a list of messages
 * to be processed. Each message has an associated function that gets
 * called to handle the message.
 * 
 * ... WIP ...
 */
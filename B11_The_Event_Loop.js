// The Event Loop

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
 * At some point during the event loop, the runtime starts handling the
 * messages on the queue, starting with the oldest one. To do so, the
 * message is removed from the queue and its corresponding function is
 * called with the message as an input parameter. As always, calling a
 * function creates a new stack frame for that function's use.
 * 
 * The processing of functions continues until the stack is once again
 * empty. Then, the event loop will process the next message in the
 * queue (if there is one).
 */

/**
 * The Event Loop:
 * The event loop got its name because of how it's usually implemented,
 * which usually resembles:
 * 
 * 
 * while (queue.waitForMessage()) {
 *  queue.processNextMessage();
 * }
 * 
 * 
 * queue.waitForMessage() waits synchronously for a message to arrive (if
 * one it not already available and waiting to be handled).
 */

/**"Run-to-completion"
 * Each message is processed completely before any other message is 
 * processed.
 * 
 * This offers some nice properties when reasoning about your program,
 * including the fact that whenever a function runs, it cannot be
 * preempted and will run entirely before any other code runs (and can
 * modify data the function manipulates). This differs from C, for
 * instance, where if a function runs in a thread, it may be stopped at
 * any point by the runtime system to run some other code in another
 * thread.
 * 
 * A downside of this model is that if a message takes too long to
 * complete, the web application is unable to process user interactions
 * like click and scroll. The browser mitigates this with the "a script
 * is taking too long to run" dialog. A good practice to follow is to
 * make message processing short and if possible cut down one message
 * into several messages.
 */

/**Adding Messages
 * In web browsers, messages are often added when an event occurs
 * and there is an event listener attached to it. If there is no
 * listener, the event is lost. So a click on an element with a click
 * event handler will add a message - Likewise with any other event.
 * However, some events happen synchronously without a message - e.g.:
 * simulated clicks via the 'click' method.
 * 
 * The first two arguements to the function 'setTimeout()' are a message
 * to add to the queue and a time value (optional; defaults to 0). The
 * 'time value' represents the (minimum) delay after which the message
 * will be pushed into the queue. If there is no other message in the
 * queue, and the stack is empty, the message is processed right after
 * the delay. However, if there are messages, the setTimeout() message
 * will have to wait for other messages to be processed. For this reason,
 * the second argument indicates a minimum time - not a guaranteed time.
 * 
 * Here is an example that demonstrates this concept (setTimeout() does
 * not run immediately after its timer expires.
 */

// const seconds = new Date().getTime() / 1000;

// setTimeout(() => {
//   // prints out "2.003...", meaning that the callback is not called
//   // immediately after 500 milliseconds. Instead we have to wait for the
//   // while loop to finish.
//   console.log(`Ran after ${
//     new Date().getTime() / 1000 - seconds
//   } seconds`);
// }, 500);

// while (true) {
//   if (new Date().getTime() / 1000 - seconds >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }

/**Zero Delays
 * Zero delay doesn't mean the call back will fire-off after zero
 * milliseconds. Calling setTimeout() with a delay of 0 (zero)
 * milliseconds doesn't execute the callback function after the given
 * interval.
 * 
 * The execution depends on the number of waiting tasks in the queue.
 * In this example below, the message "this is just a message" will be
 * written to the console before the message in the callback gets 
 * processed, because the delay is the minimum time required for the
 * runtime to process the request (not a guaranteed time).
 * 
 * The setTimeout() needs to wait for all the code for queues messages
 * to complete even though you specified a particular time limit for your
 * setTimeout().
 */
(() => {
  console.log("this is the start");

  setTimeout(() => {
    console.log("Callback 1: this is a msg from callback");
  }); // has a default time limit of 0

  console.log("this is just a message")

  setTimeout(() => {
    console.log("Callback 2: this is a msg from callback");
  }, 0);

  console.log("this is the end");
})();

// this is the start
// this is just a message
// this is the end
// callback 1: this is a msg from callback
// callback 2: this is a msg from callback.


/**Several runtimes communicating together
 * A web worker or a cross-origin 'iframe' has its own stack, heap, and
 * message queue. Two distinct runtimes can only communicate through
 * sending messages via the 'postMessage' method. This method adds a
 * message to the other runtime if the latter listents to 'message'
 * events. 
 */


/**Never blocking
 * A very interesting property of the event loop model is that JavaScript,
 * nlike a lot of other languages, never blocks. Handling I/O is
 * typically performed via events and callbacks, so e.g: when the
 * application is waiting for an IndexedDB query to return or a fetch() 
 * request to return, it can still process other things like user input.
 * 
 * Legacy exceptions exist like 'alert' or synchronous XHR, but it is 
 * considered good practice to avoid them. Beware: exceptions to the
 * exception do exist (but are usually implementation bugs, rather than
 * anything else).
 */



/**More notes from: https://www.youtube.com/watch?v=8aGhZQkoFbQ
 * 
 * The call stack.
 * one thread == one call stack == one thing at a time.
 * 
 * JavaScript is a single threaded programming language.
 * A single threaded runtime.
 * Which means it has a single callstack.
 * 
 * Let's see what this means:
 */

// Example 1: Visualizing the stack.

// Imagine the script began here:

function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  var squared = square(n);
  console.log(squared);
}

printSquare(4); // 16

/**Stack...
 * The stack (call stack) is a data structure which "records where in the
 * program we are". So if we step into a function, we push something
 * onto the stack, if we return from a function, we pop off from the
 * stack. When we run the file, we have a main() function (think of it
 * as the file itself) pushed into the stack as the first element.
 * 
 * ||  stack         ||
 * ||                ||
 * ||  main()        ||
 * 
 * As we go through our file, we define some functions, but the first
 * call happens at the end, so the next push looks like this:
 * 
 * ||   stack        ||
 * ||                ||
 * || printSquare(4) ||
 * || main()         ||
 * 
 * Then inside of printSquare, we call square().
 * 
 * ||   stack        ||
 * ||                ||
 * || square(n)      ||
 * || printSquare(4) ||
 * || main()         ||
 * 
 * Then, while calling square, we call multiply().
 * 
 * ||   stack        ||
 * ||                ||
 * || multiply(n, n) ||
 * || square(n)      ||
 * || printSquare(4) ||
 * || main()         ||
 * 
 * multiply() is the first function to return something, so we multiply
 * their values and return them to square. Thus we pop multiply().
 * 
 * ||   stack        ||
 * ||                ||
 * || square(n)      ||
 * || printSquare(4) ||
 * || main()         ||
 * 
 * square() immediately returns the return value of multiply(), so we 
 * pop square().
 * 
 * ||   stack        ||
 * ||                ||
 * || printSquare(4) ||
 * || main()         ||
 * 
 * We then proceed to the next function call in printSquare() which is
 * console.log()
 *
 * ||   stack        ||
 * ||                ||
 * || console.log()  ||
 * || printSquare(4) ||
 * || main()         ||
 * 
 * There isn't an explicit return with console.log(), but it's implicit.
 * 
 * ||   stack        ||
 * ||                ||
 * || printSquare(4) ||
 * || main()         ||
 * 
 * There isn't an explicit return with printSquare() but it's implicit
 * because we got to the end of the function.
 * 
 * ||   stack        ||
 * ||                ||
 * || main()         ||
 * 
 * Script finishes.
 * 
 * ||   stack        ||
 * ||                ||
 * 
 * 
 * Q.E.D.
 * */

// Example 2: stack trace

// Imagine the script starts here

// function aaa() {
//   throw new Error('Oops!');
// }

// function bbb() {
//   aaa();
// }

// function ccc() {
//   bbb();
// }

// ccc();

/**Because the throw an error, our console essentially prints the stack
 * trace, i.e. the state of the stack at the time of the error.
 * 
 * 
 * Error: Oops!
 * at aaa...
 * at bbb...
 * at ccc...
 * 
 * 
 * Q.E.D.
 */

// Example 3: Blowing the stack.

function infRecursion() {
  return infRecursion();
}

infRecursion(); // RangeError: Maximum call stack size exceeded

/**
 * i.e.:
 * 
 * ||   stack        ||
 * || ...            ||
 * || infRecursion() ||
 * || infRecursion() ||
 * || infRecursion() ||
 * || infRecursion() ||
 * || main()         ||
 * 
 * Q.E.D.
 */


/**blocking
 * 
 * What happens when things get slow?
 * This is where we start to discuss blocking.
 * 
 * console.log() isn't slow, but a while loop from one to ten billion
 * is slow, network requests are slow, image processing is slow... etc.
 * 
 * Things which are slow and on our callstack are "blocking".
 * 
 * This can cause issues when using a web application, because it would
 * prevent users for further interaction until the blocking call is
 * finished. Moreover, in the meantime, the meandering clicking events of
 * things on the page will be caught and then processed suddendly when
 * the blocking clears.
 * 
 * So what's the solutuion?
 */


/**Asynchronous callbacks
 * 
 * There are almost no blocking functions in the browser, as well as
 * node.js; they are mostly asynchronous.
 */
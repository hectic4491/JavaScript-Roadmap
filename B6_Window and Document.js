// What's the difference between the window and document objects?

/** The 'window' and 'document' objects are fundamental to browser
 * JavaScript, but they serve different purposes. 
 */ 

/** The 'window'
 * 
 * Scope: The 'window' object represents the browser window or tab
 * where the script is running. It's the global object of the script.
 * 
 * Properties and Methods: It contains properties and methods related to
 * the browser window itself, such as
 *   'window.location' - URL of thecurrent page.
 *   'window.innerWidth' - width of the window. 
 *   'window.alert()' - displated an alert box.
 * 
 * Global Context: In the browser, 'window' is the global object, so you
 * can access global variables and functions through it.
 */

/** The 'document'
 * 
 * Scope: The 'document' object represents the HTML document loaded in
 * the browser.
 * 
 * Properties and Methods: It contains properties and methods for
 * interacting with the document's structure, such as:
 *   'document.getElementById()' - retrieves an element by its ID.
 *   'document.createElement()' - creates a new element.
 *   'document.body' - accesses the body element.
 * 
 * DOM Manipulation: The document object is primarily used for Document
 * Object Model (DOM) manipulation, allowing you to dynamically change
 * the content, structure, and style of the web page.
 */

/** In Summary:
 * 
 * 'window' - is the object for the browser environment.
 * 
 * 'document' - is the object for the content of the page. 'document' can
 * be accessed from 'the window' property: 'window.document'
 */


/**Some notes on 'window'.
 * 
 * Because 'window' is the browsers global object, its functions and
 * methods are accessed in the global scope.
 */
// setTimeout is a method of the 'global' object ('window' in browser JS)
global.setTimeout(function() {
  console.log("What's up, world!");
}, 1000);
// because of that, it can be accessed globally, i.e. without calling
// global
setTimeout(function() {
  console.log("Hello, world!");
}, 1200);

function thisFunction() {
  return "Yup, doing thisFunction."
};

// global.thisFunction(); this is an error, we have to explicitly 
// assign it to global:

let myVar = 11;
global.myVar = myVar;
global.thisFunction = thisFunction;
global.thisFunction();

console.log(global);


// This is global.
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter],
  thisFunction: [Function: thisFunction]
}
*/

/*
global: A reference to the 'global' object itself. The [Circular *1] 
  notation indicates that the global object contains a reference to itself.

clearImmediate: A method that cancels a timer set with
  global.setImmediate().

setImmediate: A method that sets a timer to execute a function as soon
  as the current event loop turn completes.

clearInterval: A method that cancels a timer set with setInterval().

clearTimeout: A method that cancels a timer set with setTimeout().

setInterval: A method that that repeatedly calls a function with a fixed
  time delay between each call.

setTimeout: A method that sets a timer to execute a function after a 
  specified time delay. 

queueMicrotask: A method that queues a microtask to be executed as soon
  as possible.

structuredClone: A method that creates a deep copy of an object.


atob: A method that decodes a base64-encoded string.

btoa: A method that encodes a string in base64 format.


performance: An object that provides performance-related information.

fetch: A method that provides a way to fetch resources (like APIs) over
  the network.

crypto: An object that provides cryptographic functionality.

navigator: An object that provides information about the browser
  environment (though this is typically in browser contexts, not Node.js)


Other...: Other globally defined variables or methods by the dev...
*/



/**Some 'window' dot properties
 * 
 * window.document - References the 'document' object, which represents
 *   the HTML document loaded in the browser.
 * 
 * window.location - Contains information about the current URL and
 *   allows you to navigate to a new URL.
 * 
 * window.history - Provides access to the browser's history, allowing 
 *   you to navigate through the browser's history stack.
 * 
 * window.navigator - Contains information about the browser and the
 *   device, such as navigator.userAgent (browser information) and 
 *   navigator.language (browser language).
 * 
 * window.screen - Provides information about the user's screen, such as
 *   screen width and height.
 * 
 * 
 * window.localStorage - Allows you to store data in the browser with no
 *   expiration time.
 * 
 * window.sessionStorage - Similar to 'localStorage', but data stored in
 *   sessionStorage is cleared with the browser session ends.
 * 
 * 
 * window.XMLHttpRequest - Provides an interface for making HTTP requests.
 * 
 * window.fetch - provides a modern way to make HTTP requests.
 * 
 * 
 * window.alert() - Displays an alert box with a specified message.
 * 
 * window.confirm() - Displays a confirmation dialog with a specified
 *   message and returns a boolean indicating the user's response.
 * 
 * window.prompt() - Displays a dialog box that prompts the user for
 *   input and returns the input as a string.
 * 
 * window.open() - Opens a new browser window or tab with a specified URL.
 * 
 * window.close() - closes the current browser window or tab (usually
 *   only works on windows opened by window.open() ).
 */
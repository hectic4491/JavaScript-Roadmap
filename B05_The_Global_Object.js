// What is the Global Object?

/**
 * In JavaScript, the global object is essentially the container for all
 * global variables and functions. It's different depending on the
 * environment:
 * 
 * In a web browser: The global object is 'window'. So, any variables or
 * functions declared at the top level are properties of 'window'.
 * 
 * In Node.js: The global object is 'global'. Here too, top level 
 * variables and functions become properties of global.
 */

// This won't work:

let myVar = 22;
console.log(global.myVar); // undefined

/**In Node.js, variables declared with let, const, or var at the top
 * level of a module are scoped to the module, not the global object.
 * To make variables global, you have to explicitly attach them to the
 * global object with 'global.variableName'
 */
global.myVar = 42;
console.log(global.myVar); // 42


console.log(this.myVar); // undefined, 'this' refers to the module.
console.log(global.myVar); // 42
console.log(myVar); // 22 module level takes precedence

/**global or globalThis?
 * 
 * global: This is specific to Node.js. It references the global object
 * and is unique to the Node.js runtime environment.
 * 
 * globalThis: This is a more recent addition to JavaScript, globalThis
 * is standard across different environments (Node.js, web workers, etc.)
 * and provides a unified way to access the global object regardless of
 * the environment. 
 * 
 * Maybe we should adopt the practice of using globalThis
 * (( Or just don't use global objects at all ;] ))
 */
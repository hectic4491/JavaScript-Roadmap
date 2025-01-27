// Extra notes on object prototypes 

// """mdn"""

/**Object prototypes
 * Prototypes are the mechanism by which JavaScript objects inherit
 * features from one another. Here we will look at what a prototype is,
 * how prototype chains work, and how a prototype for an object can be
 * set.
 */

/**The prototype chain.
 * Here we create an object literal:
 */

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  }
};

myObject.greet(); // Greetings from Madrid

/**This is an object with one data property, city, and one method,
 * greet(). However, there are a lot of other properties not shown!
 * e.g.:
 * 
 * __defineGetter__
 * __defineSetter__
 * __lookupGetter__
 * __lookupSetter__
 * __proto__
 * city
 * constructor
 * greet
 * hasOwnProperty
 * isPrototypeOf
 * propertyIsEnumerable
 * toLocaleString
 * toString
 * valueOf
 * 
 */

// Try accessing one of them:

console.log(myObject.toString()); // [object Object]

// It works (even if it's not obvious what toString() does).

/**What are these extra properties, and where do they come from?
 * Every object in JavaScript has a built-in property, which is called
 * its prototype. The prototype is itself an object, so the prototype
 * will have its own prototype, making what's called a prototype chain.
 * The chain ends when we reach a prototype that has 'null' for its own
 * prototype.
 * 
 * NOTE** The property of an object that points to its prototype is not
 * called 'prototype'. Its name is not standard, but in practice all
 * browsers use __proto__. The standard way to access an object's
 * prototype is the Object.getPrototypeOf() method.
 * 
 * When you try to access a property of an object: if the property can't
 * be found in the object itself, the prototype is searched for the
 * property. If the property still can't be found, then the prototype's
 * prototype is searched, and so on until either the property is found,
 * or the end of the chain is reached, in which case undefined is
 * returned.
 * 
 * So when we call myObject.toString(), the browser:
 * > looks for toString in myObject.
 * > Can't find it there, so looks in the prototype of myObject for
 * toString
 * > finds it there, and calls it.
 * 
 * What is the prototype for myObject? To find out, we can use the
 * function Object.getPrototypeOf():
 */

console.log(Object.getPrototypeOf(myObject)); // [Object: null prototype] {}
console.log(myObject.__proto__); // [Object: null prototype] {}
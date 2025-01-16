// Using the 'this' keyword.

/**'this' Keyword
 * In JavaScript, the 'this' keyword is a little different compared to
 * other languages. It refers to an object, but it depends on how or
 * where it is being invoked. It also has some differences between strict
 * mode and non-strict mode.
 * 
 * In an object method, 'this' refers to the object.
 * 
 * Alone, 'this' refers to the global object.
 * 
 * In a function, 'this' refers to the global object.
 * 
 * In a function, in strict mode, 'this' is undefined.
 * 
 * In an event, 'this' refers to the element that received the event.
 * 
 * Methods like call(), apply(), and bind() can refer 'this' to any
 * object.
 */


/**In a method
 * Methods are properties of an object which are functions. The value of
 * 'this' inside a method is equal to the calling object. i.e. 'this' is
 * the object.
 */

const user = {
  name: "Robert",
  age: 27,

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
};
user.sayHi(); // Hi Robert


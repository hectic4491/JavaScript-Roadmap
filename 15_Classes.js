// Classes

/**Classes
 * Classes are a template for creating objects. They encapsulate data with
 * code to work on that data. Classes in JS are built on prototypes but
 * have some syntax and semantics that are not shared with ES5 class-like
 * semantics.
 * 
 */



// notes from """javascript.info/class"""

/**In practice, we often need to create many objects of the same kind,
 * like users, or goods, or whatever.
 * 
 * As we already know from the chapter """Constructor, operation 'new'",
 * 'new function' can help with that.
 * 
 * But in the modern JavaScript, there's a more advanced "class" construct,
 * that introduces great new features which are useful for object-oriented
 * programming.
 * 
 * The "class" syntax
 */

class myClass {
  constructor(name, age) {
  this.name = name
  this.age = age
  }

  myNameMethod() {
    console.log(this.name);
  }

  myAgeMethod() {
    console.log(this.age);
  }
};

let user = new myClass("Robert", 27)
user.myAgeMethod(); // 27


// getters/setters

// class inheritance

// statis properties and methods

// private and protected properties and methods

// extending built-in classes

// class checking "instanceof"

// mixins
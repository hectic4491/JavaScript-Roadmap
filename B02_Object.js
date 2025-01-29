/*
A Closer look at Objects

The JavaScript Object object is a built-in global object that serves as the
basis for all JavaScript objects. It provides a set of methods that can be
used to manipulate and interact with objects.


Common Methods of Object:

   [1]
>   Object.create(proto[, propertiesObject])
>    Creates a new object with the specified prototype object and
>    properties. */

const personProto = {
  greet() {
    console.log("Hello!");
  }
};

const person = Object.create(personProto);
person.greet(); // "Hello!"


/* [2]
>   Object.keys(obj)
>   Returns an array of a given object's own enumerable property names.*/

const obj1 = { a: 1, b: 2, c: 3};
console.log(Object.keys(obj1)); // [ 'a', 'b', 'c' ]


/* [3]
>   Object.values(obj)
>   Returns an array of a given object's own numerable property values.*/

console.log(Object.values(obj1)); // [ 1, 2, 3 ]


/* [4]
>   Object.entries(obj)
>   Returns an array of a given object's own enumerable property key-value
>   pairs. */

console.log(Object.entries(obj1)); // [[ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ]]


/* [5]
>   Object.assign(target, ...sources)
>   Copies the values of all enumerable own properties from one or more 
>   source objects to a target object. */

const target = { x: 2 };
const source1 = { y: 4 };
const source2 = { z: 6 };

const result = Object.assign(target, source1, source2)
console.log(result); // { x: 2, y: 4, z: 6 }


/* [6]
>   Object.freeze(obj)
>   Freezes an object, preventing new properties from being added and
    existing properties from being removed. */

const obj2 = { r: 144 };
Object.freeze(obj2); // 
obj2.r = 5; // Doesn't do anything. 144 remains assigned to the value of r.
delete obj2.r; // Doesn't do anything.
console.log(obj2.r); // 144


/* [7]
>   Object.seal(obj)
>   Seals an object, preventing new properties from being added and marking
>   all existing properties as non-configurable. */

const obj3 = { a: 25 };
Object.seal(obj3);
obj3.a = 12; // This works. 12 becomes the value of a.
delete obj3.a; // Doesn't do anything.
console.log(obj3); // { a: 12 }


/* [8]
>   Object.getOwnPropertyNames(obj)
>   Returns an array of all properties (including) non-enumerable properties
>   found directly on an object. */

const obj4 = { f: 12, g: 6, h: 3};
console.log(Object.getOwnPropertyNames(obj4)); // [ 'f', 'g', 'h' ]


/* [9]
>   Object.getPrototypeOf(obj, prototype)
>   Sets the prototype (i.e., the internal [[Prototype]] property) of a
>   specified object. */

console.log(Object.getPrototypeOf(obj4)); // [Object: null prototype] {}


/* [10]
>   Object.setPrototypeOf(obj, prototype)
>   Sets the prototype of a specified object. */

const obj5 = {};
const proto = { hello() { console.log('Hello World!'); } };
Object.setPrototypeOf(obj5, proto);
obj5.hello(); // Hello World!

/*
These methods allow you to perform various operations on objects, making
the Object object a crucial part of JavaScript programming.


Question...

What's the difference between Object.keys() and
Object.getOwnPropertyNames()

Object.Keys returns only enumerable properties.
Object.getOwnPropertyNames returns both enumerable and non enumerable
properties.
*/

console.log(Object.keys(obj1));
console.log(Object.getOwnPropertyNames(obj1));
// Both return [ 'a', 'b', 'c' ]


Object.defineProperty(obj1, 'NonEnumerableProperty', {
  myValue: 42,
  myBoolean: false
});

console.log(Object.keys(obj1));
// [ 'a', 'b', 'c' ]

console.log(Object.getOwnPropertyNames(obj1));
// [ 'a', 'b', 'c', 'NonEnumerableProperty' ]


//This distinction can be crucial.
// Data Structures

/**Data Structures
 * A Data structure is a format to organize, manage and store data in a way
 * that allows efficient access and modification. JavaScript has primitive
 * (built-in) and non-primitive (not built-in) data structures. Primitive
 * data structures come by default with the programming language and you
 * can implement them out of the box (like arrays and objects.)
 * Non-primitive data structures don't come by default and you have to
 * code them up if you want to use them.
 */

/**Indexed Collections
 * Indexed collections are collections that have numeric indices i.e. the
 * collections of data that are ordered by a default index value. In
 * JavaScript, an array is an indexed collection. An array is an ordered
 * set of values that has a numeric index.
 */

/** Arrays - Arrays are objects that store a collection of items and can be
 * assigned to a variable. They have their methods that can perform
 * operations on the array. **refer to mdm web docs Array** 
 */
const fruits = [];
fruits.push("banana");
fruits.push("apple", "peach");
console.table(fruits);

const numArr = [];
numArr.push(2, 4, 8, 16);
numArr[1] = -12
console.table(numArr);

/**Typed Array - In JavaScript, a typed array is an array-like buffer of
 * binary data. There is no JavaScript property or object named
 * 'typedArray' but properties and methods can be used with typed array
 * objects. **refer to mdn web docs TypedArray**
 */

const typedArray = new Int8Array(8);
console.table(typedArray);

// Type: Int8Array
// Value Range: -128 to 127
// Size in bytes: 1
// Web IDL type: byte

typedArray[0] = 127;
console.log(typedArray[0]); // 127

// Notice how at 128, the int overflows to the lowest possible value, -128
typedArray[0] = 128;
console.log(typedArray[0]); // -128

// Then we continue to increment from -128
typedArray[0] = 129;
console.log(typedArray[0]); // -127


/**Structured Data
 * Structured data is used by search-engines, like Google, to understand
 * the content of the webpage, as well as to gather information about the
 * web and the world in general. It is also coded using in-page markup on
 * the page that the information applies to.
 */


/**JSON
 * JavaScript Object Notation (JSON) is a standard text-based format for
 * representing structured data based on JavaScript object syntax. It is
 * commonly used for transmitting data in web applications (e.g.: sending
 * some data from the server to the client, so it can be displayed on a web
 * page, or vice versa)
 */


/**Keyed Collections
 * Keyed collections are data collections that are ordered by key, not
 * index. They are associative in nature. Map and set objects are keyed
 * collections and are iterable in the order of insertion.
 */

/**Map
 * A Map is a collection of keyed data items, just like an 'object.' But
 * the main difference is that map allows keys of any type, where as 
 * regular objects are limited to strings and symbols. I.e. they can be
 * of any value, including functions, objects, and primitive values.
 */
const myMap = new Map();
myMap.set('name', 'Robert');
myMap.set(27, 'His Current Age');
myMap.set({}, 'An empty object');
console.log(typeof myMap); // object
console.table(myMap);

/**Weak Map
 * WeakMap is a Map-like collection of key/value pairs whose keys must be
 * objects, it removes them once they become inaccessible by other means.
 *
 * **Useful for memory sensitive situations.
 */

/**Set
 * The Set object lets you store unique values of any type, whether
 * primitive values or object reference. A value in the Set may occur once;
 * it is unique in the Set's collection.
 */
const mySet = new Set();
mySet.add(1);
mySet.add(3);
mySet.add(3);
mySet.add(11);
console.log(typeof mySet); //object
console.table(mySet);

/**Weak Set
 * WeakSet objects are collections of objects. Just as with Sets, each
 * object in a WeakSet may occur only once; all objects in a WeakSet's
 * collection are unique.
 * 
 * **Useful for memory sensitive situations.
 */
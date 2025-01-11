// JavaScript Variables

/*
To use variables in JavaScript we first need to declare them. To declare 
variables, we use one of the 'var', 'let', or 'const' keywords.
*/

var age = 10
let color = "Blue"
const deathAndTaxes = true

/*
The 'var' statement declares a function-scoped or globally-scoped
variable, optionally initializing it to a value.

The 'let' declaration declares a block-scoped local variable, optionally
initializing it to a value.

Constants are block-scoped, much like variables declared using the 'let'
keyword. The value of a constant can't be changed through reassignment
(i.e. by using the assignment operator), and it can't be re-declared
(i.e. through a variable declaration). However, if a constant is an 
object or array its properties or items can be updated or removed.
*/


/*
Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears
to move the declaration of functions, variables, or classes to the top of
their scope, prior to execution of the code.
*/

console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`)

function sumFunc(a, b) {
  return a + b
}

/*
Even through we've called the function before defining it, the function 
is hoisted to the top once interpreted. This only works for functions 
defined with the 'function' keyword, not with arrow functions.
*/


/*
Variable Scopes

In JavaScript, scope refers to the visibility of a variable or how it can
be used after it is declared. The scope of a variable depends on the
keyword that was used to declare it.

The three types of scope are Global Scope, Function Scope, and Block 
Scope. Before ES6 (2015), JavaScript had only Global Scope and Function
Scope with the var keyword. ES6 introduced 'let' and 'const' which allow
Block Scope in JavaScript.

#
Global Scope: Variables declared outside any function or curly braces {}
have Global Scope, and can be accessed from anywhere within the same 
JavaScript code. 'var', 'let', and 'const' all provide this Scope.

#
Function Scope: Variables declared within a function can only be used
within that same function. Outside that function, they are undefined.
'var', 'let', and 'const' all provide this scope.

#
Block Scope: A block is any part of JavaScript code bounded by '{}'.
Variables declared within a block can not be accessed outside that block.
This Scope is only provided by the 'let', and 'const' keywords. If you 
declare a variable within a block using the 'var' keyword, it will NOT
have Block Scope.

**
Local Scope: Local variables are only recognized inside their functions,
variables with the same name can be used in different functions. Local 
variables are created when a function starts, and deleted when the
function is completed. 'var', 'let', and 'const' all provide this Scope.

*/
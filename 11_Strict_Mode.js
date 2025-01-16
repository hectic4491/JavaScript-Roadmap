// Strict Mode

/**Strict Mode
 * JavaScript's strict mode is a way to opt in to a restricted variant of
 * JavaScript, thereby implicitly opting-out of "sloppy mode". Strict
 * mode isn't just a subset: it intentionally has different semantics
 * from normal code. Strict mode code and non-strict mode code can
 * coexist, so scripts can opt into strict mode incrementally.
 * 
 * Strict mode makes several changes to normal Javascript semantics:
 * Eliminates some JavaScript silent errors by changing them to throw
 * errors.
 * 
 * Fixes mistakes that make it difficult for JavaScript engines to 
 * perform optimizations: strict mode code can sometimes be made to run
 * faster than identical code that's not strict mode.
 * 
 * Prohibits some syntax likely to be defined in future versions of ECMA
 * Script.
 */

/**Invoking strict mode
 * Strict modes applies to entire scripts or to individual functions. It
 * doesn't apply to block statements enclosed in {} braces; attempting to
 * apply it to such contexts does nothing. 'eval' code, 'Function' code,
 * event handler attributes, strings passed to setTimeout(), and related
 * functions are either function bodies or entire scripts, and invoking
 * strict mode in them works as expected.
 */

/**To invoke strict mode for an entire script, put the exact statement
 * "use strict"; (or 'use strict';) on the top before any other
 * statements.
 */

/**Strict mode can also be invoked for functions, modules, and classes.
 */

/**Strict mode Functions:
 * Strict mode can only be applied with functions that have simple
 * parameters. If it has 'rest', 'default', or 'destructured parameters,
 * we get a syntax error.
 */

function myStrictFunction() {
  "use strict";
  function myNestedFunction() {
    console.log("I'm also in strict mode!");
  }
  return `Hi, I'm a strict mode function! ${nested()}`
}

function myNotStrictFunction() {
  console.log("I'm not in strict mode :C")
}

// This will throw an error:
//
// function cantBeStrict(a = 1) {
//   "use strict";
//   return a + 2
// }

/**Read more on mdm:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
 */
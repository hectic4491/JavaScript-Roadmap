// Control Flow

/**The control flow is a way of how your computer runs code from top to
 * bottom. It starts from the first line and ends at the last line unless
 * it hits any statement that changes the control flow of the program such
 * as loops, conditionals, etc.
 * 
 * We can control the flow of the program through any of these control
 * structures:
 * 
 * Sequential (default mode)
 * Conditional Statements
 * Exception Handling
 * Loops and Iterations
 */

/**Conditional statements...
 * In JavaScript we have three conditional statements:
 * if
 * if...else
 * switch
 */

let age = 19;

// using if...else
if (age > 21) {
  console.log("Here's a drink.")
} else if (age === 21) {
  console.log("This ones on the house.")
} else {
  console.log("Here's some milk.")
}

/**Switch
 * The switch statement evaluates an expression, matching the expression's
 * value against a series of case clauses, and executes statements after
 * the first case clause with a matching value, until a break statement is
 * encountered. The default clause of a switch statement will be jumped to
 * if no case matches the expression's value.
 * 
 * The switch statement is typically used for comparing a variable against
 * multiple specific values; not necessarily range-based conditions.
 */

let day = 2;

switch (day) {
  case 0:
    console.log("Sunday")
    break;
  case 1:
    console.log("Monday")
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
    console.log("Wednesday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
    console.log("Friday")
    break;
  case 6:
    console.log("Saturday")
    break;

  default:
    console.log("Invalid day")
}


/**Exception Handling
 * All exceptions are simply objects. While a majority of exceptions are
 * implementations of the global Error class, any old object can be thrown.
 * With this in mind, there are two ways to throw an exception: directly
 * via an Error object, and through a custom object.
 * 
 */

/**Throw Statement
 * The throw statement throws a user-defined exception. Execution of the
 * current function will stop (the statements after throw won't be
 * executed),and control will be passed to the first catch block in the
 * call stack. If no catch block exists among caller functions, the program
 * will terminate.
 * 
 */

// example:

/**The checkAge function has the parameter 'age'. The function checks if
 * age is more than 21 and returns a string on success.
 * If the age is less than 0, it throws an error with it's own custom
 * message. 
 * If the age is less than 21, it throws an error with a different custom
 * message.
 */
function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative.");
  } else if (age < 21) {
    throw new Error("You must be at least 21 years old.");
  }
  return "You are old enough!";
}
/**This is a try...catch block.
 * The try block contains the code that might throw an exception. In this
 * case we're expecting the checkAge function to return the function
 * success string. However if the parameter 'age' produces an error, an
 * error is generated and thrown. We can call this error the "exception".
 * The catch block handles any exception thrown and will execute its
 * code block.
 * In this example, we access the error.message property of the exception
 * object. We log the error to the console.
 * The finally block always executes, both on a successful try block, and
 * when we have an exception. In this case we close out the block with
 * a log to the console.
 */
try {
  const result = checkAge(31);
  console.log(result);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("try...catch block done. Now logging the 'finally' code block.")
}


/**Try, Catch Finally
 * These are ways of handling errors in your JavaScript code. Inside the
 * try code block we have the code to run, inside the catch block we
 * handle the errors, and inside the finally block we have code that runs
 * after the execeution of the previous code blocks, regardless of the 
 * result.
 */

/**Error Objects
 * When a runtime error occurs, a new Error object is created and thrown.
 * With this Error object, we can determine the type of the Error and
 * handle it according to its type.
 * 
 * Types of Errors - Besides error constructors, JavaScript also has other
 * core Error constructors; like:
 * 
 * AggregateError - A collection of errors thrown simultaneously.
 * 
 * EvalError - An error occurred during the evaluation of a JavaScript
 * expression
 * 
 * InternalError - An internal JavaScript, often indicating a bug in the
 * engine.
 * 
 * RangeError - A value is outside the allowed range for a given operation.
 * 
 * ReferenceError - A variable or object is referenced before it's declared
 * or doesn't exist.
 * 
 * SyntaxError - The code contains incorrect syntax, preventing it from
 * being parsed.
 * 
 * 
 * With this we can do things like use if...else logic on error types:
 */


// Here we call a function which doesn't exist. This produces a
// ReferenceError. Our catch block with execute the ReferenceError code.
try {
  willGiveErrorSometime();
} catch (error) {
  if (error instanceof RangeError) {
    console.error("The error thrown was a RangeError, dispatching code...");
  } else if (error instanceof ReferenceError) {
    console.error("The error thrown was a ReferenceError, dispatching code...");
  } else {
    console.error("The error is something else...")
  }
} // -> "The error thrown was a ReferenceError, dispatching code..."
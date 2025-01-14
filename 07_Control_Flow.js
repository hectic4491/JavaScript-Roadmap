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
 * 
 */
// A closer look at labeling

/**
 * You can use labels to create named blocks of code. Labels are useful
 * for controlling the flow of nested loops and statements, particularly
 * when you want to break out of or continue specific loops.
 */

/**Creating Labels: 
 * Labels are created by writing a name followed by a colon (:) before the
 * statement or block code you want to label.
 */

// Example: Using Labels with Loops:
outerLoop: for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i === 1 && j === 1) {
      console.log(`Match! i: ${i}, j: ${j}`);
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

outerLoop: for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i === 2 && j === 0) {
      console.log(`Match! i: ${i}, j: ${j}`);
      continue outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

myLabel : {
  console.log('Before break!');
  break myLabel;
  console.log('After break'); // This line is never executed
}

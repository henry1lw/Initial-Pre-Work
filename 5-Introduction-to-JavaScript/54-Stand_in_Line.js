<!--Learned to stand in line.-->
<!--This looks like a push, pull or shift activity.-->
<!--Remove the element maybe a .shift function-->
<!--Got to var removed before having to review the solution.-->

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();

  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

<!--Learned to Understanding Undefined Value returned from a Function.-->

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
var sum = 8;
function addFive() {
  sum = sum + 5;
}
var returnedValue = addFive(5); // sum will be modified but returned value is undefined

// Only change code above this line
var returnedValue = addFive();

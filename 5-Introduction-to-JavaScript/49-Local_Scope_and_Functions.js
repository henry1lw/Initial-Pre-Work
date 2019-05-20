<!--This is really challenging.-->
<!--I learned to use local scope and functions,-->
<!--It is unclear to me the purpose and syntax locgic.-->
<!--I did this one by trail and error.-->
<!--I also didn't have to remove the console log line to pass the test.-->


function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
var myVar
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test

<!--Use the Rest Operator with Function Parameters.-->
<!--This one was really difficult.-->
<!--I don't completely understand so I referenced online material, the hint file and the internet.-->

const sum = (function() {
  "use strict";
  return function sum(...args) {

    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

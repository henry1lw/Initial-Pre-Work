<!--Write Higher Order Arrow Functions.-->
<!--I got stuck at suared integers should be an array.-->
<!--Used video, text and internet search to help with the solutions.-->


const squareList = (arr) => {
      "use strict";
      const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
      return squaredIntegers;

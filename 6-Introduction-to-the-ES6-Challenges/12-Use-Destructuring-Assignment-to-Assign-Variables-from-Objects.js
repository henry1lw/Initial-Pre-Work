<!--Learn to use Descructing Assignment to Assign Variables for Objects.-->

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};
function getTempOfTmrw(avgTemperatures){
  "use strict";
  // change code below this line
  const {tomorrow : tempOfTomorrow} = avgTemperatures; // change this line

  // change code above this line
return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); //should be 79

<!--Solution to follow.-->
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line

  const resultDisplayArray = arr.map((text) => {
  return `<li class="text-warning">${text}</li>`
});
  // change code above this line
return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
 const resultDisplayArray = makeList(result.failure);

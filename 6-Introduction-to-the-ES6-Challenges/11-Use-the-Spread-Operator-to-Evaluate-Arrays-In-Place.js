<!--Learned to use the Spread Operator to Evaluate Arrays in-Place.-->
<!--Had to remove the function line in order to make this work.-->
<!--It says to only change this line, deceptive.-->
<!--Also used jun first before remembering CAPS.-->

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

  const arr2 = [...arr1]; // change this line
arr1.push("JUN");
console.log(arr2);

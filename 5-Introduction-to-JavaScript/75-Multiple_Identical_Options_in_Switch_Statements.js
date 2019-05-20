<!--Learned multiple Identical Options in Switch Statements.-->

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
    answer = "1, 2, or 3";
    return "Low";
    break;
    case 4:
    answer = "4 alone";
    return "Mid";
    break;
    case 5:
    case 6:
    answer = "5 or 6";
    return "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "7, 8, or 9";
    return "High";
    break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);

<!--Learned golf code.-->>
<!--Off to online video for this one.  I know it is if else statements, however can't figure out how to start.-->
<!--The hardest part was getting the if else started with the == operator.  Once there I am just going to follow a structure..-->
<!--Structure from the previous activity.-->
<!--Used the incorrect conditional operators. Need to us == vs >=-->


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return "Hole-in-one!";
  } else if (strokes <= par -2){
    return "Eagle";
  } else if (strokes <= par -1){
    return "Birdie";
  } else if (strokes == par +0){
    return "Par";
  } else if (strokes == par +1){
    return "Bogey";
  } else if (strokes == par +2){
  return "Double Bogey";
  } else if (strokes >= par +3){
    return "Go Home!";
  } else { return "Change Me";
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

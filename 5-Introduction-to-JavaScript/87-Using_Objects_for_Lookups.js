<!--Learned using objects for lookups-->

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line


  var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank",

  };
return lookup [val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

<!--Learn record collection.-->
<!--This is complex.
<!--Watched a 15 minute YouTube Video.-->
<!--This activity did not provide feedback to syntax and checks along the way.-->
<!--That was worrisome and painstaking.-->
<!--I finally worked this out between the 15 minute video, help and reading.-->

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }
return collection;
}

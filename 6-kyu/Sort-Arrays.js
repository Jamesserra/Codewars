// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

sortme = function( names ){
  names.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return names
}
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  let r = [];
  word.split("").forEach((letter, index) => {
    /[A-Z]/.test(letter) ? r.push(index) : "";
  });
  return r;
};

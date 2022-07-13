// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

function findMissingLetter(array) {
  let x = array.map((letter, index) => letter.charCodeAt(letter));
  let missing = 0;
  let temp = x[0];
  x.forEach((num, index) => {
    if (x[index] + 1 - temp === 2) {
      missing = num - 1;
    }
    temp = x[index] + 1;
  });
  return String.fromCharCode(missing);
}

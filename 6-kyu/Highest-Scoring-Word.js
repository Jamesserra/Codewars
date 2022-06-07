// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let maxSum = 0;
  let wordsNum = [];
  let filter = x.split(" ");

  function alphabetPosition(text) {
    return text
      .split("")
      .map((letter) => letter.charCodeAt(0) - "a".charCodeAt(0) + 1);
  }

  filter.map((word) => {
    wordsNum.push(alphabetPosition(word));
  });

  let wordSum = wordsNum.map((array) => {
    let sum = array.reduce((a, b) => a + b, 0);
    if (sum > maxSum) {
      maxSum = sum;
    }
    return sum;
  });
  return filter[wordSum.indexOf(maxSum)];
}

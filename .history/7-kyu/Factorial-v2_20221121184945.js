// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function factorial(n) {
  let count = 1;
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12.");
  }
  for (let i = 1; i <= n; i++) {
    count *= i;
  }
  return count;
}

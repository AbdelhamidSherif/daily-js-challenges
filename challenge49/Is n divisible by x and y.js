// Code wars Kata8 Solutions

// Is n divisible by x and y?

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) return true;
  return false;
}

console.log(isDivisible(12, 2, 3));

// Code wars Kata8 Solutions

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

/* Solution */

// Create New Empty Array
// Loop though n
// Multiply x * n
// Add the number to the new Array
// Return the new array

/*
function countBy(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}
console.log(countBy(1,10));
*/

// another solution
function countBy(x, n) {
    return Array.from({length: n}, (_, i) => x * (i + 1));
}
console.log(countBy(2,5));


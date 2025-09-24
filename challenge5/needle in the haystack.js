// Code wars Kata8 Solutions

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// Loop Through the Array
// Check if the element === needle
// Return The Message

// function findNeedle(array) {
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (array[i] === "needle") {
//       return `Found the needle at position ${i}`;
//     }
//   }
// }
// console.log(findNeedle(["mid", "needle", "ali"]));

// another solution

function findNeedle(haystack) {
  return haystack.indexOf("needle");
}
console.log(findNeedle(["mid", "needle", "ali"]));

// Code wars Kata8 Solutions

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// 348597 => [7,9,5,8,4,3]

// Change the number to String
// Split the String to an array
// Change the Strings in the array to Numbers
// Reverse the Array

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((m) => Number(m))
    .reverse();
}
console.log(digitize(10000));

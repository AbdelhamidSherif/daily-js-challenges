// Code wars Kata8 Solutions

// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
//  Return the resulting string.

// Note: input will never be an empty string

// Convert the String into Array
// Loop through the array
// Check each element

function fakeBin(x) {
  /*  return x
    .split("")
    .map((n) => (Number(n) >= 5 ? "1" : "0"))
    .join(""); */

  return x.replace(/[1-4]/g, "0").replace(/[5-9]/g, "1");
}

console.log(fakeBin("0123456789"));

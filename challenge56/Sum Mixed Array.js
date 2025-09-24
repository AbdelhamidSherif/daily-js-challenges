// Code wars Kata8 Solutions

// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Loop Through the Array
// Convert every String to a Number
// Sum All The Values

// function sumMix(x) {
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//   }
//   return sum;
// }

//Another Solution
// function sumMix(x) {
//   let newArray = [];

//   for (let i = 0; i < x.length; i++) {
//     if (typeof x[i] === "string") {
//       newArray.push(Number(x[i]));
//     } else {
//       newArray.push(x[i]);
//     }
//   }
//   return newArray.reduce((acc,currentValue)=>acc + currentValue)
// }

//Another Solution
function sumMix(x) {
  return x
    .map((n) => Number(n))
    .reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(sumMix([1, 2, 3, "4", 5, "6", "7", 2]));

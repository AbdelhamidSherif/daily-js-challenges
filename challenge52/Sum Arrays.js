// Code wars Kata8 Solutions

// Sum Arrays

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer.
//  If the array does not contain any numbers then you should return 0.

// Return 0 if the Array is Empty
// Loop through the numbers
// Sum the Array

// Sum Numbers
function sum(numbers) {
  if (numbers.length == 0) return 0;

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;

//Another solution
return numbers.reduce((acc,current) =>acc +current, 0);
}
console.log(sum([1,2,3,4]));

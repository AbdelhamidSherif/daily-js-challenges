// Code wars Kata8 Solutions

// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Loop Through the Array
// Square Each Number
// Sum the result

// function squareSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] * numbers[i];
//   }
//   return sum;
// }

//Another Solution
function squareSum(numbers) {

return numbers.map((n)=>n*n).reduce((acc,curr)=>acc+curr)
}

console.log(squareSum([1, 2, 2]));

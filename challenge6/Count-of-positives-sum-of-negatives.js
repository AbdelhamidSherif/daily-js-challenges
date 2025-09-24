// Code wars Kata8 Solutions

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

/* Solution */

// Create Empty Array for the Positive Numbers
// Create a Variable for the Sum of Negatives
// Loop through the Given Array
// Check if the number is positive add it to the Array , if negative add to the Sum Variable

/*
function countPositivesSumNegatives(input) {
  let positiveArray = [];
  let sumNegative = 0;
  for (let i = 0; i < input.length; i++) {
    if(input[i] > 0){
        positiveArray.push(input[i]);
    }else{
        sumNegative += input[i];
    }
  }
  return [positiveArray.length, sumNegative];
}
console.log(countPositivesSumNegatives([0,2,3,-1,-2,-3]));
*/

//another solution

function countPositivesSumNegatives(input) {
  let positiveArray = input.filter((x) => x > 0).length;
  let sumNegative = input
    .filter((x) => x < 0)
    .reduce((acc, curr) => acc + curr, 0);
  return [positiveArray, sumNegative];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

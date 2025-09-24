// Code wars Kata8 Solutions

// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// Declare Variable = 1
// Loop Through the Integers( Numbers ) Array
// Add the Multiplying result to the Variable
// return the Result

function arr(nums) {
  /*
  let multiple = 1;
  for (let i = 0; i < nums.length; i++) {
    multiple *= nums[i];
  }
  return multiple;
*/
  //Another Solution
  return nums.reduce((acc, currentValue) => acc * currentValue);
}
console.log(arr([1, 2, 3, 4]));

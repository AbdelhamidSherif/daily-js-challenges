// Code wars Kata8 Solutions

// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

/* function findSmallestInt(args) {
  for (let i = 0; i < args.length; i++) {
    for (let j = i + 1; j < args.length; j++) {
      if (args[i] > args[j]) {
        let temp = args[i];
        args[i] = args[j];
        args[j] = temp;
      }
    }
  }

  return args[0];
}

console.log(findSmallestInt([2, 3, 4, 1, 2, 3, 4])); */

//Another Solution

/* function findSmallestInt(args) {
  let smallInt = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallInt) {
        smallInt = args[i];
    }
  }
  return smallInt;
}
console.log(findSmallestInt([10,4,2,3])); */

//Another Solution
function findSmallestInt(args) {
    return Math.max(...args)
}

console.log(findSmallestInt([10,4,2,3])); 




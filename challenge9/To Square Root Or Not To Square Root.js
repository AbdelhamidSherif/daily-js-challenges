// Code wars Kata8 Solutions

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

/* Solution */

// Loop through the Array
// Check if the number has an integer Square root or not
// If true Take the root , if False Square the number
//return the new array

/*
function squareOrSquareRoot(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) === Math.floor(Math.sqrt(array[i]))) {
      arr.push(Math.sqrt(array[i]));
    } else {
      arr.push(array[i] * array[i]);
    }
  }
  return arr;
}
console.log(squareOrSquareRoot([1, 2, 3, 4, 25, 36, 7]));
*/

//another solution
/*
function squareOrSquareRoot(array) {
  return array.map(x => Math.sqrt(x) % 1 === 0? Math.sqrt(x) : x * x);
}
console.log(squareOrSquareRoot([1, 2, 3, 4, 25, 36, 7]));
*/

//another solution
/*
function squareOrSquareRoot(array) {
let arr = [];
array.forEach(element => {
    if(Number.isInteger(Math.sqrt(element))){
        arr.push(Math.sqrt(element));
    }else{
        arr.push(element * element);
    }
});
return arr;
}
console.log(squareOrSquareRoot([1,2,3,4,25,36]));
*/

//another solution

function squareOrSquareRoot(array) {
    //   let newArray = [];
    //   for (let i = 0; i < array.length; i++) {
    //     if (Number.isInteger(Math.sqrt(array[i]))) {
    //       newArray.push(Math.sqrt(array[i]));
    //     } else {
    //       newArray.push(array[i] * array[i]);
    //     }
    //   }
    //   return newArray;
  
    return array.map((number) =>
      Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
    );
  }
  console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
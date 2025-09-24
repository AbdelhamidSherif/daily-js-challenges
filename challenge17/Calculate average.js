// Code wars Kata8 Solutions

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

/* Solution */

// Create Variable = 0
// Loop through the array
// Divide the Varible to the Array length

function find_average(array) {
   if (array.length != 0){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum / array.length;
   }
   else return 0;
}
console.log(find_average([10,10]));

//another solution
/*
function find_average(array) {
  return array.reduce((acc, current) => 
    (acc + current)) / array.length;
 
}
console.log(find_average([]));
*/

// Code wars Kata8 Solutions

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
//  and the negatives become positives.

/* Solution */

// Create Empty new Array
// Loop through the Array
// Inverse the Number
// Return the New Array

/*
function invert(array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(element * -1);
  });
  return newArray;
}
console.log(invert([1, 2, 3, -4, -5, -6]));
*/

// another solution

function invert(array) {
    return array.map(element =>{
        if(element != 0)
            return element * -1;
        else
        return element;
    })
}
console.log(invert([0,1, 2, 3, -4, -5, -6]));







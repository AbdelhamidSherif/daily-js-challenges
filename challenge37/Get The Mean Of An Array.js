// Code wars Kata8 Solutions

// It's the academic year's end, fateful moment of your school report.
//  The averages must be calculated. All the students come to you and entreat you to calculate their average for them.
//   Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// 1- Declare Sum Variable to Sum all the Numbers
// 2- Declare Empty Variable for the average
// 3- Looping through the Array of number
// 4- Add each number to the sum variable
// 5- Divide The Sum / THe array length
// 6- Round the Number to the Nearest Integer
// 7- Return the Average

/*
function getAverage(marks) {
  let sum = 0;
  marks.forEach((element) => {
    sum += element;
  });
  let average = sum / marks.length;
  return average;
}
console.log(Math.round(getAverage([10, 10, 5])));
*/

// another solution

function getAverage(marks) {
return Math.round(marks.reduce((sum,element)=>{
    return (sum+=element)/marks.length;
}))
}
console.log(getAverage([10, 10, 5,4]));


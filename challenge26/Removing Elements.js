// Code wars Kata8 Solutions

// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that

/*Solution*/

// Create the New array
// Loop Through the Coming Array
// Check if the element in the Second Position
// Remove that Element
// Return the New Array

function removeEveryOther(arr) {
  //return arr.filter((elment, index) => index % 2 === 0);

//another solution

let newArray = [];
for (let i = 0; i < arr.length; i++) {
    if(i % 2 ===0){
        newArray.push(arr[i]);
    }    
}
return newArray;

}
console.log(
  removeEveryOther([
    "Keep",
    "Remove",
    "Keep",
    "Remove",
    "Keep",
    "Remove",
    "Keep",
  ])
);

// Code wars Kata8 Solutions

// Thinkful - Logic Drills: Traffic light

// You're writing code to control your town's traffic lights.
//  You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string
//  representing the state the light should change to.

// For example, when the input is green, output should be yellow.


// Create array of lighs
// Check if the Light is red to Return the Green
// Return the Next Color

function updateLight(current) {
// const lightArray = ["green","yellow","red"];

// if(lightArray.indexOf(current)===2)return "green";

// return lightArray[lightArray.indexOf(current)+1]

//Another solution
return current==="green"?"yellow":current==="red"?"green":"red";

}
console.log(updateLight("yellow"));


// Code wars Kata8 Solutions

// Complete the solution so that it reverses the string passed into it.


// Declare empty String
// Loop through the string Given as Parameter
// Add The Last Characters to the Empty String
// Return the String




function reversedString(s) {
  /*
    let arr = s.split("");
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1-i];
    arr[arr.length - 1-i] = temp;
  }
  return arr.join("");
  */
  // Another Solution
  /*
return s.split("").reverse().join("");
*/
  //Another Solution

  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}
console.log(reversedString("missing"));

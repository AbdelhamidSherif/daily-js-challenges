// Code wars Kata8 Solutions

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    /*
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      result += s[i];
    }
  }
  return result;
  */

  //another solution
return s.split("").filter(e => e !=='!').join("");
}
console.log(removeExclamationMarks("!!!!m!i!!do!"));
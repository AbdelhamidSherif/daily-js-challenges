// Code wars Kata8 Solutions

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Create an Array includes the 5 Letters (a, e, i, o, u)
// Loop Through the String given
// Check if the string includes any of the 5 Letters
// Return the result

/*
function shortcut(string) {
  let arr = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!arr.includes(string[i])) {
      result += string[i];
    }
  }
  return result;
}
console.log(shortcut("Abdelhamid"));
*/

// another solution

function shortcut(string) {
  const arr = ["a", "e", "i", "o", "u"];
  let newArr = [];

  for (let i = 0; i < string.length; i++) {
    if (!arr.includes(string[i])) {
      newArr.push(string[i]);
    }
  }

  return newArr.join("");
}

console.log(shortcut("Abdelhamid"));

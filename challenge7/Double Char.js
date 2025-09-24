// Code wars Kata8 Solutions

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Turn the String into Array
// Loop through the Array
// Repeat Each Element Once
// Return the Array Into String again

/*
function doubleChar(str) {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}
console.log(doubleChar("Mido"));
*/
//another solution 
function doubleChar(str) {
return str.split("").map(char => char.repeat(2)).join("");

}
console.log(doubleChar("Mido"));


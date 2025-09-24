// Code wars Kata8 Solutions

// When provided with a letter, return its position in the alphabet.

// 1- Create a String with the Alphapet
// 2- Loop through this String
// 3- Check if the Loopring CHaracter equal the Provided Letter
// 4- Return the Position

// function position(letter) {
//   let alphabet = "abcdefghijklmnopqrstuvwxy";
//   let index = alphabet.indexOf(alphabet.toLowerCase());
//   return `Positions of "${letter}" is: ${index > -1 ? index + 1 : "Not Exists"}`;
// }
// console.log(position("a"));

//another solution

function position(letter) {
  const alphpet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphpet.length; i++) {
    if (letter === alphpet[i])
      return `Positions of "${letter}" is: ${
        i > -1 ? i + 1 : "Not Exists"
      }`;
  }
}
console.log(position("a"));

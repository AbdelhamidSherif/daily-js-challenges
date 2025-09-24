// Code wars Kata8 Solutions

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
    switch(number){
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        default : return "Wrong NUmber";
    }
}
console.log(switchItUp(10));
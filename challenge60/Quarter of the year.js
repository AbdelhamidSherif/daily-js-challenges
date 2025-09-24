// Code wars Kata8 Solutions

// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
//  and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  /*switch (true) {
     case month >= 1 && month <= 3:
       return "Is part is the first quarter.";
     case month >= 4 && month <= 6:
       return "Is part is the two quarter.";
     case month >= 7 && month <= 9:
       return "Is part is the third quarter.";
     case month >= 10 && month <= 12:
       return "Is part is the fourth quarter.";
     default:
       return "Invalid month.";
       break;
   }*/

  //Another Solution
  //return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;

  //Another Solution
  return Math.ceil(month/3)
};
console.log(quarterOf(7));

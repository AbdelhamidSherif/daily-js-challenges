// Code wars Kata8 Solutions

// I'm new to coding and now I want to get the sum of two arrays..
// . Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



function arrayPlusArray(arr1, arr2) {
// let sum = 0;
//     for (let i = 0, j =0; i < arr1.length,j<arr2.length; i++,j++) {
//         sum +=arr1[i] + arr2[j];
//     }

//     return sum;

//Another solution
return arr1.concat(arr2).reduce((acc,currentValue)=>acc + currentValue,0);

}


console.log(arrayPlusArray([1,2,3],[1,2,3]));
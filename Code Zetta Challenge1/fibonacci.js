// Design a function which returns a fibonacci sequence value.

/*
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  else return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log(fibonacci(2));
*/

//another solution

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let result = 0;
  if (n === 0) return 0;
  if (n === 1) return 1;
  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}
console.log(fibonacci(2));

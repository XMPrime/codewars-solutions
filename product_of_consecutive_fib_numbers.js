// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/
function productFib(prod) {
  // ...
  let fib1 = 0;
  let fib2 = 1;
  while (fib1 * fib2 <= prod) {
    if (fib1 * fib2 === prod) return [fib1, fib2, true];
    fib2 += fib1;
    fib1 = fib2 - fib1;
  }
  return [fib1, fib2, false];
}

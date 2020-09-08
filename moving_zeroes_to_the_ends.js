// https://www.codewars.com/kata/52597aa56021e91c93000cb0/
var moveZeros = function (arr) {
  let zeroes = [];
  let filtered = arr.filter((element) => element !== 0);
  arr.forEach((element) => {
    if (element === 0) {
      zeroes.push(element);
    }
  });

  return [...filtered, ...zeroes];
};

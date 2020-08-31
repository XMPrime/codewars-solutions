//https://www.codewars.com/kata/520b9d2ad5c005041100000f/

function pigIt(str) {
  //Code here
  const vowels = ["a", "e", "i", "o", "u"];
  const strArr = str.split(" ");
  let pigLatin = [];

  strArr.map((str) => {
    if (/^[\w|\d]/g.test(str)) {
      let firstLetterAy = str.slice(0, 1) + "ay";
      let restOfIt = str.slice(1);
      pigLatin.push(restOfIt + firstLetterAy);
    } else {
      pigLatin.push(str);
    }
  });
  return pigLatin.join(" ");
}

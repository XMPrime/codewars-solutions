// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/

function parseInt(string) {
  // TODO: it's your task now
  console.log(string);
  let number;
  const stringArr = string.split(" ").filter((str) => str !== "and");
  const strNums = {
    zero: "0",
    on: "1",
    tw: "2",
    th: "3",
    fo: "4",
    fi: "5",
    si: "6",
    se: "7",
    ei: "8",
    ni: "9",
    ten: "10",
    eleven: "11",
    twelve: "12",
  };
  const checkIfDoubleDigit = (string) => {
    if (
      string.includes("teen") ||
      string.includes("ty") ||
      strNums[`${string}`]
    )
      return true;
    return false;
  };

  const solution = stringArr
    .map((str, i) => {
      if (strNums[`${str}`]) return strNums[`${str}`];
      if (str.substr(-2) === "ty") return strNums[`${str.substr(0, 2)}`] + "0";

      if (str.includes("-")) {
        const hyphenArr = str.split("-");
        return (
          strNums[`${hyphenArr[0].substr(0, 2)}`] +
          strNums[`${hyphenArr[1].substr(0, 2)}`]
        );
      }

      if (i === stringArr.length - 1) {
        if (str === "hundred") return "00";
        if (str === "thousand") return "000";
        if (str === "million") return "000000";
        if (str.substr(-2) === "ty")
          return strNums[`${str.substr(0, 2)}`] + "0";
      }

      if (str === "hundred") {
        if (checkIfDoubleDigit(stringArr[i + 1])) return "";
        if (stringArr[i + 1] === "thousand") return "00";
        return "0";
      }

      if (str === "thousand") {
        if (checkIfDoubleDigit(stringArr[i + 1])) return "0";
        if (stringArr[i + 2] === "hundred") return "";
        return "00";
      }

      if (str.includes("teen")) return "1" + strNums[`${str.substr(0, 2)}`];

      return strNums[`${str.substr(0, 2)}`];
    })
    .filter((str) => str !== "")
    .join("");

  return Number(solution);
}

// https://www.codewars.com/kata/54b72c16cd7f5154e9000457

var decodeBits = function (bits) {
  const trimmedBits = bits.replace(/^[0]+|[0]+$/g, "");
  if (trimmedBits.split(0).length === 1) return ".";
  const pauseTimeUnit = trimmedBits
    .split("1")
    .filter((i) => i !== "")
    .sort()[0].length;
  const morseTimeUnit = trimmedBits
    .split("0")
    .filter((i) => i !== "")
    .sort()[0].length;
  const timeUnit =
    pauseTimeUnit < morseTimeUnit ? pauseTimeUnit : morseTimeUnit;

  const btwnDotsDashes = "0".repeat(timeUnit);
  const btwnChars = "0".repeat(timeUnit * 3);
  const btwnWords = "0".repeat(timeUnit * 7);
  const dot = "1".repeat(timeUnit);
  const dash = "1".repeat(timeUnit * 3);

  const btwnDotsDashesRegex = new RegExp(btwnDotsDashes, "g");
  const btwnCharsRegex = new RegExp(btwnDotsDashes.repeat(3), "g");
  const btwnWordsRegex = new RegExp(btwnDotsDashes.repeat(7), "g");
  const dotRegex = new RegExp(dot, "g");
  const dashRegex = new RegExp(dot.repeat(3), "g");

  return trimmedBits
    .replace(btwnWordsRegex, "  ")
    .replace(dashRegex, "-")
    .replace(btwnCharsRegex, " ")
    .replace(dotRegex, ".")
    .replace(btwnDotsDashesRegex, "");
};

var decodeMorse = function (morseCode) {
  const codeArr = morseCode.split(" ");
  const translated = codeArr.map((char, i) => {
    if (codeArr[i] === "") return " ";
    return MORSE_CODE[char];
  });

  return translated.join("");
};

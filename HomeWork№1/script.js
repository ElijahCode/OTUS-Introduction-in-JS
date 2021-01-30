// exercise #1

export function getSumAndMultiplication(numb1, numb2) {
  return [numb1 + numb2, numb1 * numb2];
}

const a = 7;
const b = 8;

console.log(
  `Sum: ${getSumAndMultiplication(a, b)[0]}, multiplication: ${
    getSumAndMultiplication(a, b)[1]
  }`
);

// exercise #2

export function getSumOfStringsLengths(str1, str2) {
  return str1.length + str2.length;
}

const string1 = "Hello";
const string2 = "World";

console.log(
  `The amount of characters for string's "Hello" and "World" is ${getSumOfStringsLengths(
    string1,
    string2
  )}`
);

// exercise #3

export function getSumOfDigitForNumber(number) {
  const input = number > 0 ? number : number * -1;
  const fstDigit = input % 10;
  const sndDigit = ((input % 100) - fstDigit) / 10;
  const tdDigit = ((input % 1000) - fstDigit - 10 * sndDigit) / 100;

  return fstDigit + sndDigit + tdDigit;
}

const numb = 143;

console.log(`Sum of digit number ${numb} is ${getSumOfDigitForNumber(numb)}`);

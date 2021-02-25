// exercise #1

export function getSumAndMultiplication(numb1, numb2) {
  return console.log(numb1 + numb2, numb1 * numb2);
}

// exercise #2

export function getSumOfStringsLengths(str1, str2) {
  return console.log(str1.length + str2.length);
}

// exercise #3

export function getSumOfDigitForNumber(/* number */) {
  const number = prompt("Enter a number");
  const input = number > 0 ? number : number * -1;
  const fstDigit = input % 10;
  const sndDigit = ((input % 100) - fstDigit) / 10;
  const tdDigit = ((input % 1000) - fstDigit - 10 * sndDigit) / 100;

  return console.log(fstDigit + sndDigit + tdDigit);
}

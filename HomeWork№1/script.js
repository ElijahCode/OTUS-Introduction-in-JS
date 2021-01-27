//exercise #1

const a = 7;
const b = 8;
const sum = a + b;
const multiplication = a*b;
console.log(`a + b = ${sum}`);
console.log(`a * b = ${multiplication}`);

//exercise #2

const str1 = "Hello";
const str2 = "World";

console.log(`The amount of characters for string's "Hello" and "World" is ${str1.length + str2.length}`);

//exercise #3

const numb = 143;
const fstDigit = 143%10;
const sndDigit = (143%100 - fstDigit)/10;
const tdDigit = (143%1000 - fstDigit - 10 * sndDigit)/100;
const result = fstDigit + sndDigit + tdDigit;
console.log(`Sum of digit number ${numb} is ${result}`);
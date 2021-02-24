// exercise #1

export function getSumOfNumbers(firstNumb, lastNumb) {
  let sum = 0;

  for (let i = firstNumb; i <= lastNumb; i += 1) {
    sum += i;
  }

  return console.log(sum);
}

// exercise #2

export function getTableOfMultiplication(number, sizeOfTable) {
  const result = [];

  for (let i = 1; i <= sizeOfTable; i += 1) {
    result.push(number * i);
  }

  return console.log(result);
}

// exercise #3

export function getSumOfOddNumbers() {
  const number = prompt("Enter a number");

  let result = 0;
  let counter = 0;

  for (let i = 1; i <= number; i += 1) {
    if (i % 2 > 0) {
      result += i;
      counter += 1;
    }
  }

  result /= counter;

  return console.log(result);
}

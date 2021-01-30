// exercise #1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function getSumOfArray(someArray) {
  let sum = 0;

  for (let i = 0; i < someArray.length; i += 1) {
    sum += someArray[i];
  }

  return sum;
}

console.log("Result for exercise #1:");
console.log(getSumOfArray(numbers));
console.log("");

// exercise #2

export function getChangedArray(array, changeFun) {
  return Object.assign(array).map(changeFun);
}

console.log("Result for exercise #2:");
console.log(getChangedArray(numbers, (elem) => elem * 2));
console.log("");

// exercise #3

export function findMinAndMaxValue(array) {
  let maxElem;
  let minElem;

  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      maxElem = array[i];
      minElem = array[i];
    } else {
      maxElem = maxElem < array[i] ? array[i] : maxElem;
      minElem = minElem > array[i] ? array[i] : minElem;
    }
  }

  return [minElem, maxElem];
}

const [minElem, maxElem] = findMinAndMaxValue(numbers);

console.log("Result for exercise #3:");
console.log(`maxElem = ${maxElem}, minElem = ${minElem}`);
console.log("");

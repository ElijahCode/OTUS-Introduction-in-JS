// exercise #1

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let sum = 0;

for (let i = 0; i < array.length; i += i) {
  sum += array[i];
}

console.log("Result for exercise #1:");
console.log(sum);
console.log("");

// exercise #2

const newArray = Object.assign(
  [],
  array.map((elem) => 2 * elem)
);

console.log("Result for exercise #2:");
console.log(newArray);
console.log("");

// exercise #3

let maxElem;
let minElem;

for (let i = 0; i < array.length; i += i) {
  if (i === 0) {
    maxElem = array[i];
    minElem = array[i];
  } else {
    maxElem = maxElem < array[i] ? array[i] : maxElem;
    minElem = minElem > array[i] ? array[i] : minElem;
  }
}

console.log("Result for exercise #3:");
console.log(`maxElem = ${maxElem}, minElem = ${minElem}`);
console.log("");

// exercise #1

export function diff(a, b) {
  return a > b ? a - b : b - a;
}

console.log("Result for exercise #1");
console.log(`diff(10,2) = ${diff(10, 2)}`);
console.log("");

// exercise #2

export function isWord(str) {
  return str.split(" ").length < 2;
}

console.log("Result for exercise #2:");
console.log(
  `isWord("Hello World!") = ${isWord(
    "Hello World!"
  )}, isWord("Hello!") = ${isWord("Hello!")}`
);
console.log("");

// exercise #3

export function pow(a, x) {
  let result = a;
  for (let i = 1; i < x; i += 1) {
    result *= a;
  }
  return result;
}
console.log("Result for exercise #3:");
console.log(`pow(2, 5) = ${pow(2, 5)}, pow(3, 4) = ${pow(3, 4)}`);
console.log("");

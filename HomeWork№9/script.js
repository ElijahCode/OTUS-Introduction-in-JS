// exercise #1

export function isRightTriangle(a, b, c) {
  const check1 = a ** 2 === b ** 2 + c ** 2;
  const check2 = b ** 2 === a ** 2 + c ** 2;
  const check3 = c ** 2 === b ** 2 + a ** 2;

  return check1 || check2 || check3;
}

console.log("Result for exercise #1");
console.log(
  `isRightTriangle(3, 4, 5) = ${isRightTriangle(
    3,
    4,
    5
  )}, isRightTriangle(6, 7, 8) = ${isRightTriangle(6, 7, 8)} `
);
console.log("");

// exercise #2

export function calculateCircle(R) {
  const l = 2 * Math.PI * R;
  const S = Math.PI * R ** 2;

  return [S, l];
}

console.log("Result for exercise #2:");
const data = calculateCircle(prompt(`Enter a radius of circle:`, "2"));
console.log(
  `Square of circle: ${data[0].toFixed(
    3
  )}, circumference of circle : ${data[1].toFixed(3)}`
);
console.log("");

// exercise #3

export function findRoots(str) {
  let a;
  let b;
  let c;
  const defaultStr = "5 15 4";
  try {
    [a, b, c] = str.split(" ");
  } catch (err) {
    [a, b, c] = defaultStr.split(" ");
  }

  const D = b * b - 4 * a * c;

  let x1;
  let x2;
  const result = [];

  if (D < 0) {
    console.log("Discrimant < 0");

    x1 = `${-b / (2 * a)} + ${Math.sqrt(Math.abs(D)) / (2 * a)} * i`;
    x2 = `${-b / (2 * a)} - ${Math.sqrt(Math.abs(D)) / (2 * a)} * i`;

    result.push(x2, x1);
  }
  if (D === 0) {
    x1 = -b / (2 * a);

    result.push(x1);
  } else {
    x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

    result.push(x2, x1);
  }

  return result;
}

console.log("Result for exercise #3:");
console.log(
  findRoots(prompt("Enter coefficients a b c separated by a space:", "5 15 4"))
);
console.log("");

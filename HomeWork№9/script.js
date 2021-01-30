// exercise #1

function isRightTriangle(a, b, c) {
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

function calculateCircle(R) {
  const l = 2 * Math.PI * R;
  const S = Math.PI * R ** 2;

  console.log(
    `Square of circle: ${S.toFixed(3)}, circumference : ${l.toFixed(3)}`
  );
  return null;
}

console.log("Result for exercise #2:");
calculateCircle(prompt(`Enter a radius of circle:`, "2"));
console.log("");

// exercise #3

function findRoots(str) {
  const [a, b, c] = str.split(" ");

  const D = b * b - 4 * a * c;

  let x1;
  let x2;

  if (D < 0) {
    console.log("Discrimant < 0");

    x1 = -b / (2 * a) + Math.sqrt(Math.abs(D)) / (2 * a);
    x2 = -b / (2 * a) - Math.sqrt(Math.abs(D)) / (2 * a);

    console.log(`For eqution ${a}x^2 + ${b}x + c = 0 have next complex roots:`);
    console.log(`x1 = ${x1.toFixed(3)} * i, x2 = ${x2.toFixed(3)} * i`);
  }
  if (D === 0) {
    x1 = (-b / 2) * a;
    x2 = x1;
  } else {
    x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  }

  console.log(`For eqution ${a}x^2 + ${b}x + c = 0 have next roots:`);
  console.log(`x1 = ${x1.toFixed(3)}, x2 = ${x2.toFixed(3)}`);

  return null;
}

console.log("Result for exercise #3:");
findRoots(prompt("Enter coefficients a b c separated by a space:", "5 15 4"));
console.log("");

// exercise #1

export function isRightTriangle(a, b, c) {
  const check1 = a ** 2 === b ** 2 + c ** 2;
  const check2 = b ** 2 === a ** 2 + c ** 2;
  const check3 = c ** 2 === b ** 2 + a ** 2;

  return check1 || check2 || check3;
}

// exercise #2

export function calculateCircle(R) {
  const l = 2 * Math.PI * R;
  const S = Math.PI * R ** 2;

  return [S, l];
}

// exercise #3

export function findRoots(str) {
  let a;
  let b;
  let c;
  try {
    [a, b, c] = str.split(" ");
  } catch (err) {
    throw new Error("Wrong input data");
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

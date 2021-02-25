import { isRightTriangle, calculateCircle, findRoots } from "./script";

describe("Test for exircise #1", () => {
  it("Returns true for arguments (3, 4, 5)", () => {
    expect(isRightTriangle(3, 4, 5)).toBeTruthy();
  });
  it("Returns false for arguments (6, 7, 8)", () => {
    expect(isRightTriangle(6, 7, 8)).toBeFalsy();
  });
});

describe("Test for exircise #2", () => {
  const rad = 5;
  const Square = Math.PI * rad ** 2;
  const circumference = 2 * Math.PI * rad;

  it("Returns array will equal to [Square, circumference]", () => {
    expect(calculateCircle(rad)).toEqual([Square, circumference]);
  });
});

describe("Test for exircise #3", () => {
  const a = [1, 1, 8];
  const b = [8, 2, 8];
  const c = [0, 1, 4];

  const x = [-1];
  const x1 = [-8, `-8 + 0,5 * i`];
  const x2 = [0, `-8 - 0,5 * i`];

  it("Returns [-8, 0] for (1, 8, 0)", () => {
    expect(findRoots(`${a[0]} ${b[0]} ${c[0]}`)).toEqual([x1[0], x2[0]]);
  });
  it("Returns [-1] for (1, 2, 1)", () => {
    expect(findRoots(`${a[1]} ${b[1]} ${c[1]}`)).toEqual(x);
  });
  it("Returns [-8 + 0,5 * i, -8 - 0,5 * i] for (8, 8, 4)", () => {
    expect(findRoots(`${a[0]} ${b[0]} ${c[0]}`)).toEqual([x1[0], x2[0]]);
  });
});

import { getSumOfArray, getChangedArray, findMinAndMaxValue } from "./script";

describe("Test for exercise #1", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("Return 45 for argument numbers", () => {
    expect(getSumOfArray(numbers)).toBe(45);
  });
});

describe("Test for exercise #2", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const changer = (elem) => elem * 2;

  const chagedNumbers = getChangedArray(numbers, changer);
  it("result is equal [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]", () => {
    expect(chagedNumbers).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
  });
});

describe("Test for exercise #3", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("Return [0, 9] for numbers", () => {
    expect(findMinAndMaxValue(numbers)).toEqual([0, 9]);
  });
});

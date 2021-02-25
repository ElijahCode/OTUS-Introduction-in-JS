import {
  getSumOfNumbers,
  getTableOfMultiplication,
  getSumOfOddNumbers,
} from "./script";

jest.spyOn(console, "log");

describe("Test for exercise #1", () => {
  it("Return 3825 for arguments (50, 100)", () => {
    getSumOfNumbers(50, 100);
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});

describe("Test for exercise #2", () => {
  it("Return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70] for arguments [7, 10]", () => {
    getTableOfMultiplication(7, 10);
    expect(console.log).toHaveBeenCalledWith([
      7,
      14,
      21,
      28,
      35,
      42,
      49,
      56,
      63,
      70,
    ]);
  });
});

describe("Test for exercise #3", () => {
  window.prompt = jest.fn();
  it("Return 25 for argument 10", () => {
    window.prompt.mockReturnValueOnce(10);
    getSumOfOddNumbers(10);
    expect(console.log).toHaveBeenCalledWith(5);
  });
});

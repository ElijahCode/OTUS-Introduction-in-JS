import {
  getSumAndMultiplication,
  getSumOfStringsLengths,
  getSumOfDigitForNumber,
} from "./script";

describe("Test for exercise #1", () => {
  it("Returns [15, 50] for arguments (5, 10) ", () => {
    expect(getSumAndMultiplication(5, 10)).toEqual([15, 50]);
  });
  it("Returns [NaN, NaN] for argument (5) ", () => {
    expect(getSumAndMultiplication(5)).toEqual([NaN, NaN]);
  });
  it('Returns ["510", 50] for arguments ("5", 10) ', () => {
    expect(getSumAndMultiplication("5", 10)).toEqual(["510", 50]);
  });
  it('Returns ["Hello World!", NaN] for arguments ("Hello ", "World!") ', () => {
    expect(getSumAndMultiplication("Hello ", "World!")).toEqual([
      "Hello World!",
      NaN,
    ]);
  });
});

describe("Test for exercise #2", () => {
  it('Returns 6 for arguments ("Hi", "Bob!") ', () => {
    expect(getSumOfStringsLengths("Hi", "Bob!")).toBe(6);
  });
  it('Returns 0 for arguments ("", "")', () => {
    expect(getSumOfStringsLengths("", "")).toBe(0);
  });
  it('Returns NaN for arguments (123, "Jinger") ', () => {
    expect(getSumOfStringsLengths(123, "Jinger")).toBe(NaN);
  });
});

describe("Test for exercise #3", () => {
  it("Returns 9 for argument 333 ", () => {
    expect(getSumOfDigitForNumber(333)).toBe(9);
  });
  it("Returns 0 for argument 0", () => {
    expect(getSumOfDigitForNumber(0)).toBe(0);
  });
  it("Returns 9 for argument -333 ", () => {
    expect(getSumOfDigitForNumber(-333)).toBe(9);
  });
});

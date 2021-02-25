import {
  getSumAndMultiplication,
  getSumOfStringsLengths,
  getSumOfDigitForNumber,
} from "./script";

jest.spyOn(console, "log");

describe("Test for exercise #1", () => {
  it("Returns [15, 50] for arguments (5, 10) ", () => {
    getSumAndMultiplication(5, 10);
    expect(console.log).toHaveBeenCalledWith(15, 50);
  });
  it("Returns [NaN, NaN] for argument (5) ", () => {
    getSumAndMultiplication(5);
    expect(console.log).toHaveBeenCalledWith(NaN, NaN);
  });
  it('Returns ["510", 50] for arguments ("5", 10) ', () => {
    getSumAndMultiplication("5", 10);
    expect(console.log).toHaveBeenCalledWith("510", 50);
  });
  it('Returns ["Hello World!", NaN] for arguments ("Hello ", "World!") ', () => {
    getSumAndMultiplication("Hello ", "World!");
    expect(console.log).toHaveBeenCalledWith("Hello World!", NaN);
  });
});

describe("Test for exercise #2", () => {
  it('Returns 6 for arguments ("Hi", "Bob!") ', () => {
    getSumOfStringsLengths("Hi", "Bob!");
    expect(console.log).toHaveBeenCalledWith(6);
  });
  it('Returns 0 for arguments ("", "")', () => {
    getSumOfStringsLengths("", "");
    expect(console.log).toHaveBeenCalledWith(0);
  });
  it('Returns NaN for arguments (123, "Jinger") ', () => {
    getSumOfStringsLengths(123, "Jinger");
    expect(console.log).toHaveBeenCalledWith(NaN);
  });
});

describe("Test for exercise #3", () => {
  beforeEach(() => {
    window.prompt = jest.fn();
  });
  it("Returns 9 for argument 333 ", () => {
    window.prompt.mockReturnValueOnce(333);
    getSumOfDigitForNumber();
    expect(console.log).toHaveBeenCalledWith(9);
  });
  it("Returns 0 for argument 0", () => {
    window.prompt.mockReturnValueOnce(0);
    getSumOfDigitForNumber();
    expect(console.log).toHaveBeenCalledWith(0);
  });
  it("Returns 9 for argument -333 ", () => {
    window.prompt.mockReturnValueOnce(-333);
    getSumOfDigitForNumber();
    expect(console.log).toHaveBeenCalledWith(9);
  });
});

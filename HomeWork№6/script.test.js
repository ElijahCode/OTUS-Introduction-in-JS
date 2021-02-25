import { diff, isWord, pow } from "./script";

describe("Test for exercise #1", () => {
  it("Return 5 for arguments (5, 10)", () => {
    expect(diff(5, 10)).toBe(5);
  });
  it("Return 3 for arguments (7, 4)", () => {
    expect(diff(7, 4)).toBe(3);
  });
});

describe("Test for exercise #2", () => {
  it("Return true for argument Transistor", () => {
    expect(isWord("Transistor")).toBeTruthy();
  });
  it("Return false for argument Bipolar transistor", () => {
    expect(isWord("Bipolar Transistor")).toBeFalsy();
  });
  it("Return false for argument Bipolar,transistor", () => {
    expect(isWord("Bipolar,Transistor")).toBeFalsy();
  });
});

describe("Test for exercise #3", () => {
  it("Return 16 for arguments (2, 4)", () => {
    expect(pow(2, 4)).toBe(16);
  });
  it("Return 1 for arguments (1, 3)", () => {
    expect(pow(1, 3)).toBe(1);
  });
  it("Return 0 for argumetns (0, 2)", () => {
    expect(pow(0, 2)).toBe(0);
  });
  it("Return -1 for arguments (-1, 5)", () => {
    expect(pow(-1, 5)).toBe(-1);
  });
  it("Return 4 for arguments (-2, 2)", () => {
    expect(pow(-2, 2)).toBe(4);
  });
});

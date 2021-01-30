import {
  getLargerNumber,
  getNameOfMonth,
  isCircleFitIntoASquare,
} from "./script";

describe("Tests for exercise #1", () => {
  it("Returns 50 for arguments (25, 50)", () => {
    expect(getLargerNumber(25, 50)).toBe(50);
  });
  it("Returns 25 for arguments (25, 25)", () => {
    expect(getLargerNumber(25, 25)).toBe(25);
  });
  it('Returns "Hey" for arguments ("Hey", "Hi")', () => {
    expect(getLargerNumber("Hey", "Hi")).toBe("Hi");
  });
  it('Returns "Focus" for argumets ("Focus", "Focus")', () => {
    expect(getLargerNumber("Focus", "Focus")).toBe("Focus");
  });
});

describe("Tests for exercise #2", () => {
  it('Return "January" for argument 1', () => {
    expect(getNameOfMonth("1")).toBe("January");
  });
  it('Return "February" for argument 2', () => {
    expect(getNameOfMonth("2")).toBe("February");
  });
  it('Return "March" for argument 3', () => {
    expect(getNameOfMonth("3")).toBe("March");
  });
  it('Return "April" for argument 4', () => {
    expect(getNameOfMonth("4")).toBe("April");
  });
  it('Return "May" for argument 5', () => {
    expect(getNameOfMonth("5")).toBe("May");
  });
  it('Return "June" for argument 6', () => {
    expect(getNameOfMonth("6")).toBe("June");
  });
  it('Return "Jule" for argument 7', () => {
    expect(getNameOfMonth("7")).toBe("Jule");
  });
  it('Return "August" for argument 8', () => {
    expect(getNameOfMonth("8")).toBe("August");
  });
  it('Return "September" for argument 9', () => {
    expect(getNameOfMonth("9")).toBe("September");
  });
  it('Return "October" for argument 10', () => {
    expect(getNameOfMonth("10")).toBe("October");
  });
  it('Return "November" for argument 11', () => {
    expect(getNameOfMonth("11")).toBe("November");
  });
  it('Return "December" for argument 12', () => {
    expect(getNameOfMonth("12")).toBe("December");
  });
  it('Return "Wrong number" for argument 13', () => {
    expect(getNameOfMonth("13")).toBe("Wrong number");
  });
});

describe("Tests for exercise #3", () => {
  it("Return false for arguments (12, 16)", () => {
    expect(isCircleFitIntoASquare(12, 16)).toBeTruthy();
  });
  it("Return true for arguments (12, 9)", () => {
    expect(isCircleFitIntoASquare(12, 9)).toBeFalsy();
  });
});

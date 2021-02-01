import { whatIsIt } from "./script";

const trueDate = ["01.05.1843", "1.5.43", "01.05.843", "01.05.3"];

const trueEmail = [
  "cyhebycudd-5858@yopmail.com",
  "cyhebycudd-@yopmail.com",
  "-5858@yopmail.com",
  "cyhebycudd5858@yopmail.com",
  "5858@yopmail.com",
  "cyhebycudd@yopmail.com",
  "-@yopmail.com",
];

const trueNumber = [
  "8(973)3527834",
  "8(973)352-78-34",
  "+7(973)3527834",
  "89713527894",
  "8-971-352-78-94",
  "+7(973)352-78-34",
  "8-973-352-78-34",
  "+7-973-352-78-34",
];

const falseData = [
  "0105.1843",
  "01.051843",
  ".05.1843",
  "01..1843",
  "01.05.",
  "5858@yopmail.",
  "5858@yopmailcom",
  "5858@.com",
  "5858yopmail.com",
  "89231а527894",
  "8971327894",
];

describe.each(trueDate)("Test that func can define date", (elem) => {
  it("Return You enter a date", () => {
    expect(whatIsIt(elem)).toBe("You enter a date");
  });
});

describe.each(trueEmail)("Test that func can define email", (elem) => {
  it("Return You enter a email adress", () => {
    expect(whatIsIt(elem)).toBe("You enter a email adress");
  });
});

describe.each(trueNumber)("Test that func can define phone number", (elem) => {
  it("Return You enter a phone number", () => {
    expect(whatIsIt(elem)).toBe("You enter a phone number");
  });
});

describe.each(falseData)("Test that func can define false data", (elem) => {
  it("Return Can't define type of data", () => {
    expect(whatIsIt(elem)).toBe("Can't define type of data");
  });
});

// import { TestScheduler } from "jest";
import {
  getLargerNumber,
  getNameOfMonth,
  isCircleFitIntoASquare,
} from "./script";

describe("Tests for exercise #1", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it("getLargerNumber(25, 50) -> 50", () => {
    getLargerNumber(25, 50);
    expect(console.log).toHaveBeenCalledWith(50);
  });
  it("getLargerNumber(50, 25) -> 50", () => {
    getLargerNumber(50, 25);
    expect(console.log).toHaveBeenCalledWith(50);
  });
  it("getLargerNumber(25, 25) -> 25", () => {
    getLargerNumber(25, 25);
    expect(console.log).toHaveBeenCalledWith(25);
  });
});

describe.each`
  arg     | result
  ${"1"}  | ${"January"}
  ${"2"}  | ${"February"}
  ${"3"}  | ${"March"}
  ${"4"}  | ${"April"}
  ${"5"}  | ${"May"}
  ${"6"}  | ${"June"}
  ${"7"}  | ${"Jule"}
  ${"8"}  | ${"August"}
  ${"9"}  | ${"September"}
  ${"10"} | ${"October"}
  ${"11"} | ${"November"}
  ${"12"} | ${"December"}
  ${"13"} | ${"Wrong number"}
`("getNameOfMonth($arg) -> $result", ({ arg, result }) => {
  beforeEach(() => {
    console.log = jest.fn();
    window.prompt = jest.fn();
  });

  it(`return ${result}`, () => {
    window.prompt.mockReturnValueOnce(arg);
    getNameOfMonth();
    expect(console.log).toHaveBeenCalledWith(result);
  });
});

describe("Tests for exercise #3", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it("Return false", () => {
    isCircleFitIntoASquare(12, 16);
    expect(console.log).toHaveBeenCalledWith(true);
  });
  it("Return true", () => {
    isCircleFitIntoASquare(12, 9);
    expect(console.log).toHaveBeenCalledWith(false);
  });
});

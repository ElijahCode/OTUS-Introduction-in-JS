import {
  getDayOfWeek,
  getNumberOfMinutes,
  defineMoreYangerPerson,
} from "./script";

describe("Test for exercise #1", () => {
  it("Returns Monday for argument 25.01.2021", () => {
    expect(getDayOfWeek("25.01.2021")).toBe("Monday");
  });
  it("Returns Tuesday for argument 26.01.2021", () => {
    expect(getDayOfWeek("26.01.2021")).toBe("Tuesday");
  });
  it("Returns Wednesday for argument 27.01.2021", () => {
    expect(getDayOfWeek("27.01.2021")).toBe("Wednesday");
  });
  it("Returns Thursday for argument 28.01.2021", () => {
    expect(getDayOfWeek("28.01.2021")).toBe("Thursday");
  });
  it("Returns Friday for argument 29.01.2021", () => {
    expect(getDayOfWeek("29.01.2021")).toBe("Friday");
  });
  it("Returns Saturday for argument 30.01.2021", () => {
    expect(getDayOfWeek("30.01.2021")).toBe("Saturday");
  });
  it("Returns Sunday for argument 31.01.2021", () => {
    expect(getDayOfWeek("31.01.2021")).toBe("Sunday");
  });
  it('Return Wrong date for argument "qwertyuiop"', () => {
    expect(getDayOfWeek("qwertyuiop")).toBe("Wrong date");
  });
});

describe("Test for exercise #2", () => {
  const toDayDate = new Date();
  const numberOfMinutes = toDayDate.getHours() * 60 + toDayDate.getMinutes();

  // если одновременно будет проходить тест и смена минуты, то
  // тест провалится, маловероятно что такое произойдет, но
  // стоит поискать вариант получше

  it("Return value will be equal numberOfMinutes", () => {
    expect(getNumberOfMinutes()).toBe(numberOfMinutes);
  });
});

describe("Test for exircise #3", () => {
  const date1 = new Date("1996-06-11");
  const date2 = new Date("1997-01-04");
  const date3 = new Date("1996-03-5");

  const result1 = "First person is more younger";
  const result2 = "Second person is more younger";
  it("Return First person is more younger", () => {
    expect(defineMoreYangerPerson(date1, date3)).toBe(result1);
  });
  it("Return First person is more younger", () => {
    expect(defineMoreYangerPerson(date1, date2)).toBe(result2);
  });
});

import { addAge, getCopyAndAddRole, getProperties } from "./script";

describe("Test for exercise #1", () => {
  jest.spyOn(console, "log");
  window.prompt.mockReturnValueOnce(20);

  let someUser = { name: "John" };
  someUser = addAge(someUser);

  it("someUser is qual object: {name: Jonh, age: 20}", () => {
    expect(someUser).toEqual({ name: "John", age: 20 });
  });
});

describe("Test for exercise #2", () => {
  const someUser = { name: "John", age: 20 };
  const admin = getCopyAndAddRole(someUser, "admin");

  it('admin is equal object: {name: "John", age: 20, role: "admin"}', () => {
    expect(admin).toEqual({ name: "John", age: 20, role: "admin" });
  });
});

describe("Test for exercise #3", () => {
  const admin = { name: "John", age: 20, role: "admin" };
  const { name, age, role } = getProperties(admin);

  it("name is equal admin.name", () => {
    expect(name).toBe(admin.name);
  });
  it("age is equal admin.age", () => {
    expect(age).toBe(admin.age);
  });
  it("role is equal admin.role", () => {
    expect(role).toBe(admin.role);
  });
});

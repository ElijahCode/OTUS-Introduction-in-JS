// exercise #1
let user = { name: "John" };

export function addAge(someObject, age) {
  const result = Object.assign(someObject);
  result.age = age;
  return someObject;
}

const input = prompt("Input a user age:");
user = addAge(user, input);

console.log("Result for exercise #1:");
console.log(addAge(user, input));
console.log("");

// exercise #2

export function getCopyAndAddRole(someObject, role) {
  const result = Object.assign(someObject);
  result.role = role;

  return result;
}

const admin = getCopyAndAddRole(user, "admin");

console.log("Result for exercise #2:");
console.log(admin);
console.log("");

// exercise #3

export function getProperties(someObject) {
  const result = Object.values(someObject);

  return result;
}

const [name, age, role] = getProperties(admin);

console.log("Result for exercise #3:");
console.log(`name = ${name}, age = ${age}, role = ${role}`);
console.log("");

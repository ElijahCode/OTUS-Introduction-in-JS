// exercise #1

export function addAge(someObject) {
  const result = Object.assign(someObject);
  const age = prompt("Enter a user age:");
  result.age = age;
  return someObject;
}

// exercise #2

export function getCopyAndAddRole(someObject, role) {
  const result = Object.assign(someObject);
  result.role = role;

  return result;
}

// exercise #3

export function getProperties(someObject) {
  // const result = Object.values(someObject);
  const result = { ...someObject };
  return result;
}

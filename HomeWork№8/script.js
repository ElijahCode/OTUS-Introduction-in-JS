// exercise #1
export function getDayOfWeek(input) {
  const inputToDate = new Date(input.split(".").reverse().join("-"));
  let numberDayOfWeek;

  try {
    numberDayOfWeek = inputToDate.getDay();
  } catch (err) {
    numberDayOfWeek = 7;
  }

  let result;

  switch (numberDayOfWeek) {
    case 0:
      result = "Sunday";
      break;
    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;
    case 3:
      result = "Wednesday";
      break;
    case 4:
      result = "Thursday";
      break;
    case 5:
      result = "Friday";
      break;
    case 6:
      result = "Saturday";
      break;
    default:
      result = "Wrong date";
      break;
  }

  return result;
}

console.log(getDayOfWeek("31.01.2021"));

// exercise #2

export function getNumberOfMinutes() {
  const toDayDate = new Date();
  return toDayDate.getHours() * 60 + toDayDate.getMinutes();
}

console.log(getNumberOfMinutes());

// exercise #3
export function defineMoreYangerPerson(value1, value2) {
  let result;

  if (value1 - value2 > 0) {
    result = "First person is more younger";
  } else {
    result = "Second person is more younger";
  }

  return result;
}

const firstDateOfBirth = new Date("1996-06-11");
const secondDateOfBirth = new Date("1997-12-04");

console.log(defineMoreYangerPerson(firstDateOfBirth, secondDateOfBirth));

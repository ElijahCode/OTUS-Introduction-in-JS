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

// exercise #2

export function getNumberOfMinutes() {
  const toDayDate = new Date();
  return toDayDate.getHours() * 60 + toDayDate.getMinutes();
}

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

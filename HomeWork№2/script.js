// #1

export function getLargerNumber(numb1, numb2) {
  if (numb1 > numb2) {
    return console.log(numb1);
  }
  return console.log(numb2);
}

// #2
export function getNameOfMonth() {
  const number = prompt("Enter a number");

  let result;

  switch (number) {
    case "1":
      result = "January";
      break;
    case "2":
      result = "February";
      break;
    case "3":
      result = "March";
      break;
    case "4":
      result = "April";
      break;
    case "5":
      result = "May";
      break;
    case "6":
      result = "June";
      break;
    case "7":
      result = "Jule";
      break;
    case "8":
      result = "August";
      break;
    case "9":
      result = "September";
      break;
    case "10":
      result = "October";
      break;
    case "11":
      result = "November";
      break;
    case "12":
      result = "December";
      break;
    default:
      result = "Wrong number";
      break;
  }

  return console.log(result);
}

// #3
export function isCircleFitIntoASquare(SquareOfCircle, SquareOfSquare) {
  return console.log(
    2 * Math.sqrt(SquareOfCircle / Math.PI) <= Math.sqrt(SquareOfSquare)
  );
}

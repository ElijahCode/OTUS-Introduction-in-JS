// #1

export function getLargerNumber(numb1, numb2) {
  if (numb1 > numb2) {
    return numb1;
  }
  if (numb2 > numb1) {
    return numb2;
  }
  return numb2;
}

console.log("Result for exersice #1");
console.log(`What is larger 45 or 32? ${getLargerNumber(45, 32)}`);

// #2
export function getNameOfMonth(number) {
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

  return result;
}

console.log("Result for exersice #2");
console.log(getNameOfMonth(prompt("Enter a value range in 1 to 12")));

// #3
export function isCircleFitIntoASquare(SquareOfCircle, SquareOfSquare) {
  return 2 * Math.sqrt(SquareOfCircle / Math.PI) <= Math.sqrt(SquareOfSquare);
}
console.log("Result for exersice #3");

console.log(isCircleFitIntoASquare(30, 100));

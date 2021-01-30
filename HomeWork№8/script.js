const date = new Date();

const numberDayOfWeek = date.getDay();

//exercise #1
const getDayOfWeek = (number) => {
  const value = number;

  switch (value) {
    case 0:
      console.log("Sunday");
      break;
     case 1:
      console.log("Monday");
      break;
     case 2:
      console.log("Tuesday");
      break;
     case 3:
      console.log("Wednesday");
      break;
     case 4:
      console.log("Thursday");
      break;
     case 5:
      console.log("Friday");
      break;
     case 6:
      console.log("Saturday");
      break;
    default:
      console.log("Wrong number");
      break;
  }
}

//exercise #2
console.log(date.getHours()*60 - toDayDate.getHours()*60);

//exercise #3
const defineMoreYangerPerson = (value1, value2) => {
    if(value1 - value2 > 0) {
        console.log('First person is more younger');
    } else {
        console.log('Second person is more younger');
    }
} 

const toDayDate = new Date('2020-12-27');

const firstDateOfBirth = new Date('1996-06-11');
const secondDateOfBirth = new Date('1997-12-04');



getDayOfWeek(numberDayOfWeek);
defineMoreYangerPerson(firstDateOfBirth, secondDateOfBirth);
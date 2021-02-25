// exercise #1

export function whatIsIt(str) {
  const dateRegEx = /\d{1,2}\.\d{1,2}\.\d{1,4}/;
  const emailRegEx = /\w*\.?-?\w*@{1}\w+\.\w{1,}/;
  const numbRegEx = /\+?\d{11}|\+?\d{1}-?\(?\d{3}-?\)?\d{3}-?\d{2}-?\d{2}/;

  let result;

  if (dateRegEx.test(str)) {
    result = "You enter a date";
  } else if (emailRegEx.test(str)) {
    result = `You enter a email adress`;
  } else if (numbRegEx.test(str)) {
    result = `You enter a phone number`;
  } else {
    result = "Can't define type of data";
  }

  return result;
}

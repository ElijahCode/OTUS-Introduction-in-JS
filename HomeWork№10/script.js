// exercise #1

function whatIsIt(str) {
  const dateRegEx = /d{2}\.d{2}\.d{4}/;
  const emailRegEx = /\w*\.?-?\w*@{1}\w+\.\w*/;
  const numbPhoneRegEx = /\+?\d{11}|\+?\d{1}-?\(?\d{3}-?\)?\d{3}-?\d{2}-?\d{2}/;

  if (dateRegEx.test(str)) {
    console.log("You enter a date");
  }

  if (emailRegEx.test(str)) {
    console.log(`You enter a email adress`);
  }

  if (numbPhoneRegEx.test(str)) {
    console.log(`You enter a phone number`);
  }

  return null;
}

whatIsIt(prompt(`Enter date, email or phone number`));

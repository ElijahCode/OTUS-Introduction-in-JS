//exercise #1

function whatIsIt (str) {

    const dateRegExp = /\d{2}\.\d{2}\.\d{4}/;
    const emailRegExp = /\w*\.?\-?\w*\@{1}\w+\.\w*/;
    const numberOfPhoneRegExp = /\+?\d{11}|\+?\d{1}\-?\(?\d{3}\-?\)?\d{3}\-?\d{2}\-?\d{2}/;

    if (dateRegExp.test(str)) {
        console.log("You enter a date");
    } 
    
    if (emailRegExp.test(str)) {
        console.log(`You enter a email adress`);
    }

    if (numberOfPhoneRegExp.test(str)) {
        console.log(`You enter a phone number`);
    }

    return null;
}

whatIsIt(prompt(`Enter date, email or phone number`));
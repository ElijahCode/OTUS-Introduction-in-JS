const button = document.querySelector('.button');

//exercise #1
function buttonClick () {
    const inputText = getInputText();
    addParagraph(inputText);
}

function hideButton() {
    const text = document.querySelector('.textbox');
    const id = setInterval(() => {
        if (text.value == '') {
            button.hidden = true;
        } else {
            button.hidden = false;
        }
    }, 10);
}

//exercise #2
function getInputText () {
    const text = document.querySelector('.textbox');
    return text.value;
}

function addParagraph (data) {
    const paragraphElem = document.createElement('p');
    paragraphElem.innerText = data;
    const main = document.querySelector('.main');
    main.append(paragraphElem);

    //exercise #3
    if(main.getElementsByTagName('p').length > 5) {
        console.log(main.getElementsByTagName('p').item(0));
        main.removeChild(main.getElementsByTagName('p').item(0));
    }
}

hideButton()
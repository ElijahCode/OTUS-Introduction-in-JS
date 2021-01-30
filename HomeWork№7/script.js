const button = document.querySelector(".button");

function getInputText() {
  const text = document.querySelector(".textbox");
  return text.value;
}

function addParagraph(data) {
  const paragraphElem = document.createElement("p");
  paragraphElem.innerText = data;
  const main = document.querySelector(".main");
  main.append(paragraphElem);

  if (main.getElementsByTagName("p").length > 5) {
    console.log(main.getElementsByTagName("p").item(0));
    main.removeChild(main.getElementsByTagName("p").item(0));
  }
}

export function buttonClick() {
  const inputText = getInputText();
  addParagraph(inputText);
}

function hideButton() {
  const text = document.querySelector(".textbox");
  setInterval(() => {
    if (text.value === "") {
      button.hidden = true;
    } else {
      button.hidden = false;
    }
  }, 10);
}

hideButton();

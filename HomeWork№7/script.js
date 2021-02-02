function createButton(elem) {
  const button = document.createElement("button");

  button.innerHTML = `<button class = "button" onclick = 'buttonClick()'>
    Click!
  </button>`;

  elem.append(button);
}

function createInput(elem) {
  const input = document.createElement("input");

  input.type = "text";
  input.id = "textbox";

  elem.append(input);
}

function createMain(elem) {
  const main = document.createElement("main");
  main.id = "main";

  elem.append(main);
}

function getInputText() {
  const text = document.getElementById("textbox").value;
  return text;
}

function addParagraph(data) {
  const paragraphElem = document.createElement("p");
  paragraphElem.innerText = data;
  const main = document.getElementById("main");
  main.append(paragraphElem);

  if (main.getElementsByTagName("p").length > 5) {
    main.removeChild(main.getElementsByTagName("p").item(0));
  }
}

export function buttonClick() {
  const inputText = getInputText();

  addParagraph(inputText);
}

createMain(document.querySelector("body"));
addParagraph("Test text");
addParagraph("Test text");
addParagraph("Test text");
createInput(document.querySelector("body"));
createButton(document.querySelector("body"));

const button = document.querySelector(".button");

function hideButton() {
  setInterval(() => {
    const text = document.getElementById("textbox").value;
    if (text === "") {
      button.hidden = true;
    } else {
      button.hidden = false;
    }
  }, 10);
}

hideButton();

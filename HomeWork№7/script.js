export function createButton(elem, buttonClass) {
  const button = document.createElement("button");

  button.innerHTML = `<button class = ${buttonClass} onclick = 'buttonClick()'>
    Click!
  </button>`;

  elem.append(button);
}

export function createInput(elem, createElemId) {
  const input = document.createElement("input");

  input.type = "text";
  input.id = createElemId;

  elem.append(input);
}

export function createMain(elem) {
  const main = document.createElement("main");
  main.id = "main";

  elem.append(main);
}

export function getInputText(elemId) {
  const text = document.getElementById(elemId).value;
  return text;
}

export function addParagraph(data) {
  const paragraphElem = document.createElement("p");
  paragraphElem.innerText = data;
  const main = document.getElementById("main");
  main.append(paragraphElem);

  if (main.getElementsByTagName("p").length > 5) {
    main.removeChild(main.getElementsByTagName("p").item(0));
  }
}

export function buttonClick() {
  const inputText = getInputText("textbox");

  addParagraph(inputText);
}

createMain(document.querySelector("body"));
addParagraph("Test text");
addParagraph("Test text");
addParagraph("Test text");
createInput(document.querySelector("body"), "textbox");
createButton(document.querySelector("body"), "button");

const button = document.querySelector(".button");

export function hideButton(spyElemId, spyButton) {
  setInterval(() => {
    const text = document.getElementById(spyElemId).value;
    const hiddenButton = spyButton;
    if (text === "") {
      hiddenButton.hidden = true;
    } else {
      hiddenButton.hidden = false;
    }
  }, 10);
}

hideButton("textbox", button);

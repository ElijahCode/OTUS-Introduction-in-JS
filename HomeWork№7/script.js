export function addParagraph(data) {
  const paragraphElem = document.createElement("p");
  paragraphElem.innerText = data;
  const main = document.getElementById("main");
  main.append(paragraphElem);

  if (main.getElementsByTagName("p").length > 5) {
    main.removeChild(main.getElementsByTagName("p").item(0));
  }
}

export function getInputText(elemId) {
  const text = document.getElementById(elemId).value;
  return text;
}

export function buttonClick() {
  const inputText = getInputText("textbox");
  addParagraph(inputText);
}

export function createButton(elem, buttonClass) {
  const button = document.createElement("button");

  button.innerHTML = `<button class = ${buttonClass}>
    Click!
  </button>`;

  button.addEventListener("click", buttonClick);

  elem.append(button);
}

export function hideButton() {
  const text = document.getElementById("textbox").value;
  const button = document.querySelector(".button");
  if (text === "") {
    button.hidden = true;
  } else {
    button.hidden = false;
  }
}

export function createInput(elem, createElemId) {
  const input = document.createElement("input");

  input.type = "text";
  input.id = createElemId;
  input.addEventListener("change", hideButton);

  elem.append(input);
}

export function createMain(elem) {
  const main = document.createElement("main");
  main.id = "main";

  elem.append(main);
}

createMain(document.querySelector("body"));

for (let i = 0; i < 3; i += 1) {
  addParagraph("Test text");
}

createInput(document.querySelector("body"), "textbox");
createButton(document.querySelector("body"), "button");

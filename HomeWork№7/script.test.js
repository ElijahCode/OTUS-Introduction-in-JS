import {
  createButton,
  createInput,
  createMain,
  getInputText,
  addParagraph,
  buttonClick,
  hideButton,
} from "./script";

const testingModule = require("./script");

describe("Testing drawning of page", () => {
  const body = document.querySelector("body");

  createMain(body);

  it("Testing that main is drawning", () => {
    expect(document.getElementById("main")).toBeTruthy();
  });

  const main = document.getElementById("main");
  addParagraph("Test text");

  it("Testing that paragraph is drawning", () => {
    expect(main.getElementsByTagName("p").length > 0).toBeTruthy();
  });

  createInput(body, "textbox");

  it("Testing that input is drawning", () => {
    expect(document.getElementById("textbox")).toBeTruthy();
  });

  createButton(body, "button");

  it("Testing that button is drawning", () => {
    expect(document.querySelector(".button")).toBeTruthy();
  });

  const button = document.querySelector(".button");

  document.getElementById("textbox").value = "Test text";

  it("Test getInputText. Must return 'Test text'", () => {
    expect(getInputText("textbox")).toBe("Test text");
  });

  const fstValOfLength = main.getElementsByTagName("p").length;

  buttonClick();

  const secValOfLength = main.getElementsByTagName("p").length;

  it("Test buttonClick. fstValOfLength must be more than secValOfLength", () => {
    expect(secValOfLength).toBeGreaterThan(fstValOfLength);
  });

  for (let i = secValOfLength; i < 7; i += 1) {
    addParagraph("Test text");
  }

  const thdValOfLength = main.getElementsByTagName("p").length;

  it("Value of paragraphs must be less than 6", () => {
    expect(thdValOfLength).toBeLessThan(6);
  });

  hideButton();

  it("Check that button is not hide", () => {
    expect(button.hidden).toBeFalsy();
  });
});

describe("Test event listeners", () => {
  const button = document.querySelector(".button");

  const spyButtonClick = jest.spyOn(testingModule, `buttonClick`);
  button.addEventListener("click", spyButtonClick);

  it("button.click() -> buttonClick", () => {
    button.click();
    expect(spyButtonClick).toHaveBeenCalled();
  });
});

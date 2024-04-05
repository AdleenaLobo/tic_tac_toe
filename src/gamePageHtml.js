import { newpage } from "./gamepage";

let title;
let gridcontainer;
let pointercontainer;
function createGamePageElements() {
  createHtml();
}

function createHtml() {
  title = document.createElement("div");
  gridcontainer = document.createElement("div");
  pointercontainer = document.createElement("div");

  addNames();

  let titlexo = document.createElement("div");
  let turn = document.createElement("div");
  let reset = document.createElement("button");
  let resetimage = document.createElement("img");

  let x = document.createElement("span");
  let o = document.createElement("span");
  x = addIDs(x, "x");
  o = addIDs(o, "o");
  x = addElementContent(x, "X");
  o = addElementContent(o, "O");
  turn = addElementContent(turn, "X's turn");
  turn = addIDs(turn, "turn");
  resetimage.src="../assets/reload.webp";
  resetimage.style.height= "20px";
  resetimage.style.width = "20px";
  reset = addChild(reset, [resetimage]);
  reset = addIDs(reset, "resetBun");

  titlexo = addChild(titlexo, [x, o]);
  title = addChild(title, [titlexo, turn, reset]);
  makeGrids();
  makePointer();
  appendElementsGamePage();
}

function addNames() {
  title.classList.add("title1");
  gridcontainer.classList.add("grid");
  pointercontainer.classList.add("pointer");
}

function makePointer() {
  let xPointer = document.createElement("div");
  let ties = document.createElement("div");
  let oPointer = document.createElement("div");

  let titlex= document.createElement('div');
  let scorex= document.createElement('div');

  xPointer = addIDs(xPointer, "xpointer");
  oPointer = addIDs(oPointer, "opointer");
  ties = addIDs(ties, "ties");

  
  titlex = addIDs(titlex , "xScoreTitle");
  scorex = addIDs(scorex , "xScore");
  titlex.textContent = "X's Scores";
  scorex.textContent = "0";
  xPointer = addChild(xPointer, [titlex , scorex]);

  
  
  let titlet= document.createElement('div');
  let scoret= document.createElement('div');
  titlet = addIDs(titlet , "tieTitle");
  scoret = addIDs(scoret , "tieScore");
  titlet.textContent = " Ties";
  scoret.textContent = "0";
  ties = addChild(ties, [titlet , scoret]);

  
  let titleo= document.createElement('div');
  let scoreo= document.createElement('div');
  titleo = addIDs(titleo , "oScoreTitle");
  scoreo = addIDs(scoreo , "oScore");
  titleo.textContent = "O's Scores";
  scoreo.textContent = "0";
  oPointer = addChild(oPointer, [titleo , scoreo]);


  pointercontainer = addChild(pointercontainer, [xPointer, ties, oPointer]);
  console.log(pointercontainer);
}

function appendElementsGamePage() {
  newpage.appendChild(title);
  newpage.appendChild(gridcontainer);
  newpage.appendChild(pointercontainer);
}

function addElementContent(element, valueString) {
  element.textContent = valueString;
  return element;
}

function addChild(element, list) {
  for (let i = 0; i < list.length; i++) {
    element.appendChild(list[i]);
  }
  return element;
}

function addIDs(element, idname) {
  element.setAttribute("id", idname);
  return element;
}

function makeGrids() {
  for (let i = 0; i < 9; i++) {
    let grid = document.createElement("button");
    gridcontainer = addChild(gridcontainer, [grid]);
  }
}

export { createGamePageElements };

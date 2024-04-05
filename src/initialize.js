let buttonO;
let buttonX;
let playerPlayBun;
let cpuPlayBun;
let container;
let body;

function intitalize() {
  container = document.querySelector(".container");
  buttonX = document.querySelector("#button-container > #x-active");
  buttonO = document.querySelector("#button-container > #o");
  playerPlayBun = document.querySelector(".buns > #x-background");
  cpuPlayBun = document.querySelector(".buns > #o-background");
  body = document.querySelector("body");
  console.log(buttonX, buttonO);
}

export {
  body,
  container,
  buttonO,
  buttonX,
  playerPlayBun,
  cpuPlayBun,
  intitalize,
};

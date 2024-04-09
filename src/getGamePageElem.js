let gridButtons;
let turn;
let body;
let resetBun;
let xScore, oScore, tieScore;
function intitalize() {
  gridButtons = document.querySelectorAll(".grid > button");
  turn = document.querySelector(".title1>#turn");
  body = document.querySelector("body");
  resetBun = document.querySelector("#resetBun");
  xScore = document.querySelector("#xScore");
  oScore = document.querySelector("#oScore");
  tieScore = document.querySelector("#tieScore");
}

export {
  gridButtons,
  turn,
  body,
  resetBun,
  xScore,
  oScore,
  tieScore,
  intitalize,
};

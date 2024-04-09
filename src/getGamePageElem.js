
let gridButtons;
let turn ;
let body;
let resetBun;
function intitalize(){
gridButtons = document.querySelectorAll(".grid > button");
turn = document.querySelector(".title1>#turn");
body = document.querySelector("body");
resetBun = document.querySelector("#resetBun");
}

export {gridButtons,turn,body, resetBun , intitalize};
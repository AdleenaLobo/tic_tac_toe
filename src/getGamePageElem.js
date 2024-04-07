
let gridButtons;
let turn ;
let body;
function intitalize(){
gridButtons = document.querySelectorAll(".grid > button");
turn = document.querySelector(".title1>#turn");
body = document.querySelector("body");
}

export {gridButtons,turn,body , intitalize};
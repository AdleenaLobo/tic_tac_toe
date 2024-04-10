import { buttonO, buttonX } from "./initialize";
let selectedxOro= "x";
function buttonListener() {
  buttonO.addEventListener("click", toggleO);
  buttonX.addEventListener("click", toggleX);
}

function toggleO() {
  if (buttonO.id == "o-active") {
    buttonO.id = "o";
    buttonX.id = "x-active";
    selectedxOro="x";
  } else {
    buttonO.id = "o-active";
    buttonX.id = "x";
    selectedxOro="o";
  }
}

function toggleX() {
  if (buttonX.id == "x-active") {
    buttonO.id = "o-active";
    buttonX.id = "x";
    selectedxOro="o";
  } else {
    buttonO.id = "o";
    buttonX.id = "x-active";
    selectedxOro="x";
  }
}

export { buttonListener, selectedxOro};

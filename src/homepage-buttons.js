import { buttonO, buttonX } from "./initialize";

function buttonListener() {
  buttonO.addEventListener("click", toggleO);
  buttonX.addEventListener("click", toggleX);
}

function toggleO() {
  if (buttonO.id == "o-active") {
    buttonO.id = "o";
    buttonX.id = "x-active";
  } else {
    buttonO.id = "o-active";
    buttonX.id = "x";
  }
}

function toggleX() {
  if (buttonX.id == "x-active") {
    buttonO.id = "o-active";
    buttonX.id = "x";
  } else {
    buttonO.id = "o";
    buttonX.id = "x-active";
  }
}

export { buttonListener };

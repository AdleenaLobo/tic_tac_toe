import { body, container } from "./initialize";
import { createGamePageElements } from "./gamePageHtml";
import { intitalize } from "./getGamePageElem";
import { gridListener } from "./playXO";
import { addListenerReset } from "./resetBunGamePahe";

let newpage;
function gamePage() {
  removeElement();
  createNewpage();
  createGamePageElements();
  intitalize();
  gridListener();
  addListenerReset();
}
function createNewpage() {
  newpage = document.createElement("div");
  newpage.classList.add("gamePage");
  body.appendChild(newpage);
}
function removeElement() {
  body.removeChild(container);
}

export { gamePage, newpage };

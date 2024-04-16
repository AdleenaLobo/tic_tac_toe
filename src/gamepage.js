import { body, container } from "./initialize";
import { createGamePageElements } from "./gamePageHtml";
import { intitalize } from "./getGamePageElem";
import { gridListener } from "./playXO";
import { addListenerReset } from "./resetBunGamePahe";
import { playWithCPU } from "./playAI";
import { cpuOrplayer } from "./playerOrCpu";
import { selectedxOro } from "./homepage-buttons";

let newpage;
function gamePage() {
  removeElement();
  createNewpage();
  createGamePageElements();
  intitalize();
  gridListener();
  if(cpuOrplayer == "cpu" && selectedxOro!="x"){
    playWithCPU(newBoard() , 'x');
  }
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

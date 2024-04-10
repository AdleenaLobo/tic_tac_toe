import { playerPlayBun, cpuPlayBun } from "./initialize";
import { gamePage } from "./gamepage";

let cpuOrplayer;
let player;
function playerSelectionBunListener() {
  playerPlayBun.addEventListener("click", () => {
    selected.bind(playerPlayBun)();
    gamePage.bind(playerPlayBun)();
  });

  cpuPlayBun.addEventListener("click", () => {
    selected.bind(cpuPlayBun)();
    gamePage.bind(cpuPlayBun)();
  });
}

function selected() {
  player = this;
  let className = this.getAttribute("id");
  if(className == "o-background"){
    cpuOrplayer = "cpu";
  }else{
    cpuOrplayer="player";
  }
}

export { player,cpuOrplayer, playerSelectionBunListener };

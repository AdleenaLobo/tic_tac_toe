import { playerPlayBun, cpuPlayBun } from "./initialize";
import { gamePage } from "./gamepage";

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
}

export { player, playerSelectionBunListener };

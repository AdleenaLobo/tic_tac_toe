import { newpage } from "./gamepage";
import { container } from "./initialize";
import { wrapper } from "./openModel";
import { resetButtonState } from "./resetBunGamePahe";
import { scoreManupilator } from "./manageScores";
import { XorO, newBoard } from "./playXO";
import { cpuOrplayer } from "./playerOrCpu";
import { playWithCPU } from "./playAI";
import { selectedxOro } from "./homepage-buttons";

let quit;
let nextRound;
let body = document.querySelector("body");
function initialize(){
    quit = document.querySelector('#quit');
    nextRound = document.querySelector('#nextRound');

    addListener();
}

function addListener(){
    quit.addEventListener("click" , goToHome);
    nextRound.addEventListener("click" , goToGamePage);
}

function goToHome(){
    console.log(newpage);
    console.log(wrapper);
    body.removeChild(wrapper);
    body.removeChild(newpage);
    body.appendChild(container);
    XorO=1;
}
function goToGamePage(){
    body.removeChild(wrapper);
    resetButtonState();
    scoreManupilator();
    let board=[];
    for(let i=0; i<9;i++){
        board[i] = null;
    }
    if(cpuOrplayer == 'cpu'){
        let player = selectedxOro=='x'?'o':'x';
        if(player == 'x' && XorO == 1){
            playWithCPU(board , player);
        }else if(player == 'o' && XorO ==0){
            playWithCPU(board , player);
        }
        
    }
}


export {initialize};
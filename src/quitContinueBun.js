import { newpage } from "./gamepage";
import { container } from "./initialize";
import { wrapper } from "./openModel";
import { resetButtonState } from "./resetBunGamePahe";
import { scoreManupilator } from "./manageScores";

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
}
function goToGamePage(){
    body.removeChild(wrapper);
    resetButtonState();
    scoreManupilator();
}


export {initialize};
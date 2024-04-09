import { body } from "./getGamePageElem";
import { initialize } from "./quitContinueBun";


let wrapper;
function declareWin(val){
    if(val!=null){
    wrapper = document.createElement('div');
    let model = document.createElement('div');
    model.classList.add("model");
    wrapper.classList.add("modelWrapper");
    const element1 = winner();
    const element2 = round(val);
    const element3 = quitOrContinue();
    model.appendChild(element1);
    model.appendChild(element2);
    model.appendChild(element3);
    wrapper.appendChild(model);
    body.appendChild(wrapper);
    initialize();
}
}

function winner(){
    let winner = document.createElement('div');
    winner.setAttribute("id" , "winnerDeclare");
    winner.textContent = "Player1 win's";
    return winner;

}

function round(val ){
    let rounder = document.createElement('div');
    rounder.textContent = `${val.toUpperCase()} Takes the round`;
    if(val == 'x'){
        rounder.setAttribute("id" , "x");
    }else{
        rounder.setAttribute("id" , "o");
    }
    return rounder;
}

function quitOrContinue(){
    const quit = document.createElement('button');
    const nextRound = document.createElement('button');
    quit.setAttribute('id' , 'quit');
    quit.textContent = "Quit";
    nextRound.setAttribute('id' , 'nextRound');
    nextRound.textContent = "Next Round";
    const wrappper = document.createElement('div');
    wrappper.appendChild(quit);
    wrappper.appendChild(nextRound);
    return wrappper;

}

export {declareWin, wrapper};


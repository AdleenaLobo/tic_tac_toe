import { body } from "./getGamePageElem";
import { selectedxOro } from "./homepage-buttons";
import { cpuOrplayer } from "./playerOrCpu";
import { initialize } from "./quitContinueBun";


let wrapper;
function declareWin(val){
    if(val!=null){
    wrapper = document.createElement('div');
    let model = document.createElement('div');
    model.classList.add("model");
    wrapper.classList.add("modelWrapper");
    const element1 = winner(val);
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

function winner(val){
    let winner = document.createElement('div');
    winner.setAttribute("id" , "winnerDeclare");
    console.log(cpuOrplayer);
    console.log(selectedxOro);
    console.log(val);
    if(cpuOrplayer == "player"){
        if(selectedxOro == "x" && val=="x"){
            winner.textContent = "Player 1 win's";}
        else if(selectedxOro == "o" && val=="x"){
            winner.textContent = "Player 2 win's";
        }else if(selectedxOro == "x" && val=="o"){
            winner.textContent = "Player 2 win's";
        }else if(selectedxOro == "o" && val=="o"){
            winner.textContent = "Player 1 win's";
        }else{
            winner.textContent ="";
        }}
        else{
            if(selectedxOro == "x" && val=="x"){
                winner.textContent = "Player 1 win's";}
            else if(selectedxOro == "o" && val=="x"){
                winner.textContent = "CPU win's";
            }else if(selectedxOro == "x" && val=="o"){
                winner.textContent = "CPU win's";
            }else if(selectedxOro == "o" && val=="o"){
                winner.textContent = "Player 1 win's";
            }else{
                winner.textContent ="";
            }
        }
    return winner;

}

function round(val ){
    let rounder = document.createElement('div');
    
    rounder.textContent = `${val.toUpperCase()} Takes the round`;
    
    if(val == "full"){
        val = "tie";
        rounder.textContent  = `${val.toUpperCase()} round`;
    }
    if(val == 'x'){
        rounder.setAttribute("id" , "x");
    }else if (val == 'o'){
        rounder.setAttribute("id" , "o");
    }else{
        rounder.setAttribute("id" , "tie");
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


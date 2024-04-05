import { gridButtons } from "./getGamePageElem";
import { updateTurn } from "./UpdateGamePageElem";

let XorO=1;

function gridListener(){
    for(let i = 0 ; i <gridButtons.length;i++){
        gridButtons[i].addEventListener("click" , play);
    }
}
function turns(){
    if(XorO ==1){
        XorO--;
    }else{
        XorO++;
    }
}

function play(){
    if(this.textContent == ""){
        if(XorO==1){
            this.textContent= "X";
            turns();
            updateTurn();}
    else{
        this.textContent = "O";
        turns();
        updateTurn();}
    }
}
export {gridListener};
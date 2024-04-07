import { gridButtons } from "./getGamePageElem";
import { updateTurn } from "./UpdateGamePageElem";
import { checkingWin } from "./boardLogic";
import {declareWin} from "./openModel";

let XorO=1;
let board=[];

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
function setID(element  , id){
    element.setAttribute("id" ,id);
}

function retriveElem(){
    let buttonslist = document.querySelectorAll(".grid > button");
    board = Array.from(buttonslist).map((button)=>{
        return button.getAttribute("id");
    })
}

function play(){
    if(this.textContent == ""){
        if(XorO==1){
            this.textContent= "X";
            turns();
            updateTurn();
            setID(this , "x");}
    else{
        this.textContent = "O";
        turns();
        updateTurn();
        setID(this , "o");}
        retriveElem();
        let val = checkingWin();
        declareWin(val);
    }
}
export {gridListener , board};
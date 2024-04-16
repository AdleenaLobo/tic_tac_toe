import { gridButtons } from "./getGamePageElem";
import { updateTurn } from "./UpdateGamePageElem";
import { checkingWin } from "./boardLogic";
import {declareWin} from "./openModel";
import { cpuOrplayer } from "./playerOrCpu";
import { selectedxOro } from "./homepage-buttons";
import { playWithCPU } from "./playAI";

let XorO=1;
let board=[];
let val;

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
function newBoard(){
    let boardNew = board;
    if(board.length == 0){
        for(let i = 0 ; i < 9 ;i++){
            boardNew[i] = null;
        }
    }
    return boardNew;
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
        val = checkingWin(board);
        declareWin(val);
    }
    if(cpuOrplayer == 'cpu'){
        let player = selectedxOro=="x"?"o":"x";
        playWithCPU(newBoard() ,player );
        retriveElem();
        val = checkingWin(board);
        declareWin(val);
    }
}
export {gridListener,newBoard , board, XorO , val , turns , updateTurn , setID };
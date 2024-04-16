import { cpuPlay2 } from "./cpuPlay";
import { gridButtons } from "./getGamePageElem";
import { XorO } from "./playXO";
import { cpuOrplayer } from "./playerOrCpu";
import { turns , updateTurn , setID , newBoard } from "./playXO";
import { selectedxOro } from "./homepage-buttons";


function playWithCPU(){
        if(selectedxOro == "x"){
            if(XorO == 0){
                let index= cpuPlay2(newBoard() , "o");
                console.log(index);
                console.log(gridButtons[index]);
                gridButtons[index].textContent = "O";
                turns();
                updateTurn();
                setID(gridButtons[index] , "o");
            }
        }
        else{
            if(XorO == 1){
                let index= cpuPlay2(newBoard() , "x");
                console.log(index);
                console.log(gridButtons[index]);
                gridButtons[index].textContent = "X";
                turns();
                updateTurn();
                setID(gridButtons[index] , "X");
            }
    }
}

export{playWithCPU};
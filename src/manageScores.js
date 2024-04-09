import { xScore, oScore , tieScore } from "./getGamePageElem";
import { val } from "./playXO";

function scoreManupilator(){
    if(val == 'x'){
        let value = parseInt(xScore.textContent);
        xScore.textContent = ++value;
    }else if(val == "o"){
        let value = parseInt(oScore.textContent);
        oScore.textContent = ++value;
    }else{
        let value = parseInt(tieScore.textContent);
        tieScore.textContent = ++value;
    }
}

export {scoreManupilator};
import {turn} from './getGamePageElem.js';

function updateTurn(){
if(turn.textContent=="X's turn"){
    turn.textContent = "O's turn";
}else{
    turn.textContent = "X's turn";
}
}
export{updateTurn};
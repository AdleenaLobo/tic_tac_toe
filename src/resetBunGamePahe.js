import { resetBun } from "./getGamePageElem";
import { gridButtons } from "./getGamePageElem";

function addListenerReset(){
    resetBun.addEventListener("click" , resetButtonState);
}

function resetButtonState(){
    let buttons = Array.from(gridButtons);
    for(let i=0; i<buttons.length; i++){
        if(buttons[i].textContent != ""){
            buttons[i].textContent = "";
            buttons[i].removeAttribute("id");
        }
    }
}

export {addListenerReset , resetButtonState};
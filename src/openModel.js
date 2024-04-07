import { body } from "./getGamePageElem";

function declareWin(val){
    if(val!=null){
    let model = document.createElement('div');
    model.classList.add("model");
    body.appendChild(model);}
}

export {declareWin};


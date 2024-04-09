import { board } from "./playXO";

function checkingWin(){
    

        if(board[0]==board[1] && board[1]==board[2]){
            return board[0];
        }
        if(board[3]==board[4] && board[4]==board[5]){
            return board[3];
        }
        if(board[6]==board[7] && board[7]==board[8]){
            return board[6];
        }
        if(board[0]==board[4] && board[4]==board[8]){
            return board[0];
        }
        if(board[2]==board[4] && board[4]==board[6]){
            return board[2];
        }
        if((board[1]!=null) && (board[3]!=null) && (board[5]!=null) && (board[7]!=null)){
            let counter=0;
            board.forEach(element => {
                if(element!=null){counter++;}
            });
            if(counter == 9){
                return "full";
            }
        }
}


export {checkingWin };
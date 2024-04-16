import { checkingWin } from "./boardLogic";
import { selectedxOro } from "./homepage-buttons";



function minimaxAlgo(node , depth , maximizingPlayer){
    if(depth == 0 || node == root){
        return node;
    }
    if(maximizingPlayer){
        let value = Math.min;
        for(let i = 0 ; i< node.length; i++){
            value = max(value , minimaxAlgo(child , depth-1 , false));
            return value;
        }

    }else{
        let value = Math.max;
        for(let i = 0 ; i< node.length; i++){
            value = min(value , minimaxAlgo(child , depth-1 , true));
            return value;
        }
    }
}

function CPUPlay(board, index , maximizingPlayer, minimizingPlayer , player){
    // console.log("run");
    if(checkingWin(board) == minimizingPlayer ){
            let points = -10;    
        return {index :index-1 , points , player : minimizingPlayer};
    }
    else if(checkingWin(board) == maximizingPlayer){
        let points = 10;
        return {index: index-1 , points , player: maximizingPlayer}
    }
    else if(checkingWin(board)== 'full'){
        let points = 0;    
        return {index: index-1 , points , player: player};
    }
    else{
        let best;
        let score;
        if(player == maximizingPlayer){
            best = {points:Number.MIN_SAFE_INTEGER };
            for(let i = 0 ; i<board.length ; i++){
                if(board[i] == null){
                    board[i] = player;
                    // console.log(`maximizing:`);
                    // console.log(board);
                    score = CPUPlay(board , i+1 , maximizingPlayer , minimizingPlayer , minimizingPlayer);
                    // console.log("undo Max");
                    // console.log(i);
                    board[i] = null;
                }
                
            }
            // console.log(score);
            // board[score.index] = score.player;
            // console.log(board);
        }else{
            best = {points: Number.MAX_SAFE_INTEGER}; 
            for(let i = 0 ; i<board.length ; i++){
                if(board[i] == null){
                    board[i] = player;
                    // console.log(`minimizing:`);
                    // console.log(board);
                    score = CPUPlay(board , i+1 , maximizingPlayer , minimizingPlayer , maximizingPlayer);
                    // console.log("undo Min");
                    // console.log(i);
                    board[i] = null;
                }  
        }
        // console.log(score);
        // board[score.index] = score.player;
        // console.log(board);
    }
    if(player == maximizingPlayer){
        if(score.points > best.points){
            best = score;
        }
    }else{
        if(score.points<best.points){
            best = score;
        }
    }
    return best;
}
}

//------------------------------------------------------------------------------------

function cpuPlay2(board , player){
    console.log(scores);
    let bestScore = Number.MIN_SAFE_INTEGER;
    let bestMove;
    for(let i = 0 ; i< board.length; i++){
        if(board[i] == null){
            board[i] = player;
            let score = minimax(board , 0 , false);
            board[i] = null;
            if(score > bestScore){
                bestScore = score;
                bestMove = i;
            }
        }
    }
    return bestMove;
}
function minimax(board , depth , isMaximizing , player){
    let result = checkingWin(board);
    if(result != undefined){
        let score = scores[result];
        return score;
    }
    if(isMaximizing){
    let bestScore = Number.MIN_SAFE_INTEGER;
        for(let i = 0 ; i<board.length; i++){
            if(board[i] == null){
            board[i] = player;
            let score = minimax(board , depth+1 , false , 'o');
            board[i] = null;
            bestScore = Math.max(score , bestScore);
            }
        }
        return bestScore;
    }else{
        let bestScore = Number.MAX_SAFE_INTEGER;
        for(let i = 0 ; i<board.length; i++){
            if(board[i] == null){
            board[i] = player;
            let score = minimax(board , depth+1 , true , 'x');
            board[i] = null;
            bestScore = Math.min(score , bestScore);
            }
        }
        return bestScore;
    }
}



let scores = select();

function select(){
    if(selectedxOro == "x"){
        return {'o': 1, 'x':-1 , 'full':0};
    }else{
        return {'o': -1, 'x':1 , 'full':0};
    }
}
 



export {cpuPlay2}
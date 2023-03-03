var origBoard; 
var Player1;
var Player2;
var activPlayer;
var gameWon = null;
const Playersign1 = "X";
const Playersign2 = "O";
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const cells = document.querySelectorAll('.cell'); 

startGame();

function startGame(){
    Player1 = prompt ("Player 1 name:", "X");
    Player2 = prompt ("Player 2 name:", "O");
    document.querySelector('.endgame').style.display="none";
    origBoard = Array.from(Array(9).keys()); 
    for (var i = 0 ; i < cells.length; i++){ 
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color'); 
        cells[i].addEventListener('click', turnClick, false); 
    }
    activPlayer = Playersign1;
}

function turnClick(square) { 
    if (typeof origBoard[square.target.id] == 'number'){
        turn(square.target.id, activPlayer);
        switch(activPlayer){
            case Playersign1:
                activPlayer = Playersign2;
                break;
            default:
                activPlayer = Playersign1;
                break;
        }
      
    }
  checkTie();
}

function turn(squareId,player){ 
    origBoard[squareId] = player ; //kazanani bulmak icin Arrayi degistirir
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player);
    console.log(gameWon);
    if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
    let plays = board.reduce((a,e,i) =>  
    (e === player) ? a.concat(i) : a, []);
    /* yukaridaki reduce aciklamasidir    
    a (akümülator) en sonda gelen deger 
    sondaki [] isareti a nin ilk degerini atiyor, yani bos array
    e boarddaki elementlerin her biri
     ve i da index
     formülün yaptigi (e playeri esitse, soru isareti (Conditional (ternary) Operator) if else gibi calisiyor, : oncesi if, : sonrasi else. )
    */

   
   
   for (let [index, win] of winCombos.entries() ){
    if (win.every(elem => plays.indexOf(elem) > -1)){
        gameWon = {index: index, player:player};
        break;
    }
   }
   
   return gameWon;
}

function gameOver(gameWon){
    for (let index of winCombos[gameWon.index]){
        document.getElementById(index).style.backgroundColor= gameWon.player == Playersign1 ? "blue" : "red";
    }
    for (var i = 0 ; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == Playersign1 ? `${Player1} Win!` : `${Player2} Win!` )
}

function declareWinner(who){
   
    document.querySelector(".endgame").style.display = "flex";
    document.querySelector(".endgame").style.justifyContent = "center";
    document.querySelector(".endgame").style.alignItems = "center";
    document.querySelector(".endgame .text").innerText= who ;
}

function checkTie(){
    
    if (gameWon != null) return;
    if (emptySquares().length == 0){
        for(var i = 0; i <cells.length; i++){
            cells[i].style.backgroundColor = 'green';
            cells[i].removeEventListener('click', turnClick,false);
        }
        declareWinner("Tie Game!");
        return true;
    }
    return false;
}

function emptySquares(){
    return origBoard.filter(s => typeof s == 'number')
}
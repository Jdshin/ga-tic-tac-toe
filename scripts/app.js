let currMoveNum = 0;
const sideLength = 3;

const $squares = $(".square");
const $gameMsg = $(".gameMsg");
const $startBut = $('#startBut');

let p1Wins = 0;
let p2Wins = 0;
const $p1WinsElem = $('.p1Wins');
const $p2WinsElem = $('.p2Wins');

let gameTimer = 30;
const $p1Timer = $('.p1Timer');
const $p2Timer = $('.p2Timer');

$startBut.on('click', startGame);

function startGame(){
    clearState();
    currMoveNum = 0;
    $squares.html("");

    gameTimer = 30;
    $p1Timer.timer = setInterval(countDown, 1000);

    $gameMsg.html(`Player 1's Turn`);
    $startBut.html('Reset Game');
    $squares.on('click', squareClick);
}

function endGame(){
    clearState();
    $p1Timer.html(`Remaining Time: 0 s`);
    $p2Timer.html(`Remaining Time: 0 s`);
}

function clearState(){
    clearInterval($p1Timer.timer);
    clearInterval($p2Timer.timer);
    $squares.off('click');
}

function squareClick(){
    // Mark and turn off event listener
    let $this = $(this);
    $this.html(getMarker());
    $this.off('click');
    
    let currPlayer = (currMoveNum % 2 == 0) ? 1 : 2;

    //Turn off current player timer and set to zero
    if (currPlayer == 1){
        clearInterval($p1Timer.timer);
        $p1Timer.html(`Remaining Time: 0 s`);
        $p2Timer.html(`Remaining Time: 30s`);
    } else {
        clearInterval($p2Timer.timer);
        $p2Timer.html(`Remaining Time: 0 s`);
        $p1Timer.html(`Remaining Time: 30 s`);
    }

    switch (checkGameOver()){
        case 0:
            $gameMsg.html('Player 1 Wins! Press Reset Game to play again');
            endGame();
            p1Wins += 1;
            $p1WinsElem.html(`Wins: ${p1Wins}`);
            break;
        case 1:
            $gameMsg.html('Player 2 Wins! Press Reset Game to play again');
            endGame();
            p2Wins += 1;
            $p2WinsElem.html(`Wins: ${p2Wins}`);
            break;
        case 2:
            $gameMsg.html('Both players tie! Press Reset Game to play again');
            endGame();
            break;
        default:
            currMoveNum += 1;
            let nextPlayer = (currMoveNum % 2 == 0) ? 1 : 2;
            $gameMsg.html(`Player ${nextPlayer}'s Turn`);
            gameTimer = 30;
            if (nextPlayer == 1){
                $p1Timer.timer = setInterval(countDown, 1000);
            } else {
                $p2Timer.timer = setInterval(countDown, 1000);
            }
    }
}

function getMarker(){
    return (currMoveNum%2==0) ? 'X' : 'O';
}

function countDown(){
    switch (currMoveNum%2){
        case 0:
            $p1Timer.html(`Time Remaining: ${gameTimer} s`);
            break;
        case 1:
            $p2Timer.html(`Time Remaining: ${gameTimer} s`);
            break;
        default:
            break;
    }
    gameTimer -= 1;
}

function checkGameOver(){
    // Check rows
        for (let i = 0; i < 9; i += 3){
            let first = $squares.get(i).innerHTML;
            let second = $squares.get(i+1).innerHTML;
            let third = $squares.get(i+2).innerHTML;
            if (checkWin(first, second, third)){
                return currMoveNum%2;
            }
        }
        // Check columns
        for (let i = 0; i < 3; i++){
            let first = $squares.get(i).innerHTML;
            let second = $squares.get(i+3).innerHTML;
            let third = $squares.get(i+6).innerHTML;
            if (checkWin(first, second, third)){
                return currMoveNum%2;
            }
        }
        // Check diags
        for (let i = 0; i < 3; i += 2){
            let first = $squares.get(i).innerHTML;
            let second = $squares.get(4).innerHTML;
            if (i == 0){
                let third = $squares.get(8).innerHTML;
                if (checkWin(first, second, third)){
                    return currMoveNum%2;
                }
            } else if (i == 2){
                let third = $squares.get(6).innerHTML;
                if (checkWin(first, second, third)){
                    return currMoveNum%2;
                }
            }
        }
    // Check ties
    if (currMoveNum == 8){
        return 2;
    }
}

function checkWin(first, second, third){
    if (first == second && second == third && first){
        return true;
    } else return false;
}
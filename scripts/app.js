let currMoveNum = 0;
const sideLength = 3;

const $squares = $(".square");
const $gameMsg = $(".gameMsg");
const $startBut = $('#startBut');

let p1Wins = 0;
let p2Wins = 0;
const $p1WinsElem = $('.p1Wins');
const $p2WinsElem = $('.p2Wins');

$startBut.on('click', startGame);

function startGame(){
    currMoveNum = 0;
    $squares.off('click');
    $squares.html("");
    $gameMsg.html(`Player 1's Turn`);
    $startBut.html('Reset game');

    $squares.on('click', squareClick);
}

function endGame(){
    $squares.off('click');
}

function squareClick(){
    let $this = $(this);
    $this.html(getMarker());
    $this.off('click');
    switch (checkGameOver()){
        case 0:
            $gameMsg.html('Player 1 Wins! Press Reset Game to play again');
            $squares.off('click');
            p1Wins += 1;
            $p1WinsElem.html(`Wins: ${p1Wins}`);
            break;
        case 1:
            $gameMsg.html('Player 2 Wins! Press Reset Game to play again');
            $squares.off('click');
            p2Wins += 1;
            $p2WinsElem.html(`Wins: ${p2Wins}`);
            break;
        case 2:
            $gameMsg.html('Both players tie! Press Reset Game to play again');
            $squares.off('click');
            break;
        default:
            currMoveNum += 1;
            let currPlayer = (currMoveNum % 2 == 0) ? 1 : 2;
            $gameMsg.html(`Player ${currPlayer}'s Turn`);
    }
}

function getMarker(){
    return (currMoveNum%2==0) ? 'X' : 'O';
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
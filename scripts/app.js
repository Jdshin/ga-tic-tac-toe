let currMoveNum = 1;
let sideLength = 3;
const $squares = $('.square');

const startBut = $('.startBut');
const endBut = $('.endBut');
startBut.on('click', startGame);
endBut.on('click', endGame);

function startGame(){
    $squares.html("");
    console.log("Game started");
    $squares.on('click', onSquareClick);
}

function endGame(){
    $squares.off('click');
}

function onSquareClick(){
    let $this = $(this);
    this.innerHTML = getMarker(currMoveNum);
    $this.off('click');
    checkWin();
    currMoveNum += 1;
}

function checkWin(){
    if (currMoveNum > 4){
        const player = getMarker(currMoveNum);

        // Check rows
        for (let i = 0; i < $squares.length; i += sideLength){
            const first = $squares.get(i);
            const second = $squares.get(i+1);
            const third = $squares.get(i+2);
            printWinAndEnd(first, second, third, player);
        }

        // Check columns
        for (let i = 0; i < sideLength; i++){
            const first = $squares.get(i);
            const second = $squares.get(i+sideLength);
            const third = $squares.get(i+(sideLength*2));
            printWinAndEnd(first, second, third, player);
        }

        // Check diagonals
        for (let i = 0; i < sideLength; i += 2){
            const first = $squares.get(i);
            const second = $squares.get(4);
            if (i == 0){
                const third = $squares.get(8);
                printWinAndEnd(first, second, third, player);  
            } else {
                const third = $squares.get(6);
                printWinAndEnd(first, second, third, player);  
            }
        }
    }
}

function getMarker(i){
    return (i%2==1 ? 'X' : 'O');
}

function printWinAndEnd(first, second, third, player){
    if (first.innerHTML == player && second.innerHTML == player && third.innerHTML == player){
        console.log(`Player ${player} wins!`);
        currMoveNum = 1;
        endGame();
    }
}
let currMoveNum = 1;
let sideLength = 3;
const $squares = $('.square');

const startBut = $('.startBut');
const endBut = $('.endBut');
startBut.on('click', startGame);
endBut.on('click', endGame);

function startGame(){
    console.log("Game started");
    $squares.on('click', onSquareClick);
}

function endGame(){
    $squares.off('click');
    $squares.html("");
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
        console.log(`Player ${player}`);
        // Check rows
        for (let i = 0; i < $squares.length; i += sideLength){
            const first = $squares.get(i);
            const second = $squares.get(i+1);
            const third = $squares.get(i+2);
            if (first.innerHTML == player && second.innerHTML == player && third.innerHTML == player){
                console.log(`Player ${player} wins!`);
                endGame();
            }
        }
        // Check columns

        // Check diagonals
    }
    
}

function getMarker(i){
    return (i%2==1 ? 'X' : 'O');
}
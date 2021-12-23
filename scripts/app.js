let currMoveNum = 1;
const $squares = $('.square');

const startBut = $('.startBut');
const endBut = $('.endBut');
startBut.on('click', startGame);
endBut.on('click', endGame);

let winConditions = [
    []
]

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
    currMoveNum += 1;
    $this.off('click');
}

function getMarker(i){
    return (i%2==1 ? 'X' : 'O');
}
let currMoveNum = 0;
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
    currMoveNum += 1;
    $this.off('click');
}

function getMarker(i){
    return (i%2==0 ? 'X' : 'O');
}
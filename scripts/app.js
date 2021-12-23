const startBut = $('.startBut');
const endBut = $('.endBut');

startBut.on('click', startGame);
endBut.on('click', endGame);

let currMoveNum = 0;

function startGame(){
    console.log("Game started");
    const $squares = $('.square');
    let testSquare = $('#sq9');
    console.log($squares);
    $squares.on('click', onSquareClick);
}

function endGame(){

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
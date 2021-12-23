const startBut = $('.startBut');
const endBut = $('.endBut');

startBut.on('click', startGame);
endBut.on('click', endGame);

function startGame(){
    console.log("Game started");
    const $squares = $('.square');
    const $numSquares = $squares.length;
    $squares.on('click', function(){console.log(this.id)});
}

function endGame(){

}

function getMarker(i){
    return (i%2==0 ? 'X' : 'O');
}
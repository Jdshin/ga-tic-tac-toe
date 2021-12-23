function getMarker(i){
    return (i%2==0 ? 'X' : 'O');
}

const startBut = $('.startBut');
const endBut = $('.endBut');

startBut.on('click', function(){console.log("Game started")});
endBut.on('click', function(){console.log("Game ended")});


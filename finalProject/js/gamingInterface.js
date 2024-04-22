document.getElementById("readme").addEventListener("click",function(){
    window.open("ReadMe.txt","readme","height=600","width=600","menubar=1","scrollbars=1","status=1","toolbar=1","titlebar=1");
})
document.getElementById("home").addEventListener("mouseover",function(){
    document.getElementById("message").innerHTML="<p>Click to select a game, hover over to see a description of the game.</p>";
})
document.getElementById("draganddrop").addEventListener("mouseover",function(){
    document.getElementById("message").innerHTML="<em>Space Drag and Drop</em> lets you drag images on the screen and drop them onto each other.";
})
document.getElementById("breakout").addEventListener("mouseover",function(){
    document.getElementById("message").innerHTML="<em>Breakout</em> is a game where the player uses a paddle to bounce a ball and break bricks at the top of the screen. The game is over when the player misses the ball with the paddle or when all bricks have been destroyed.";
})
document.getElementById("tictactoe").addEventListener("mouseover",function(){
    document.getElementById("message").innerHTML="Retro style two-player TicTacToe. Player 1 is represented by the X symbol and player 2 is represented by the O symbol. The players take alternate turns to complete a row, column, or diagonal in the spaces of the grid.";
})
document.getElementById("readme").addEventListener("mouseover",function(){
    document.getElementById("message").innerHTML="Includes game descriptions, file structure, contact information and copyright information.";
})
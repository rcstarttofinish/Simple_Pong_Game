var gameType = "2Player";
// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;

// Game Objects
var player1;
var player2;
var ball;

// Reset the game when the player catches a monster
var init = function () {
	if(gameType == "2Player") {
		player1 = new Player(10, false, 2);
		player2 = new Player(canvas.width - 10, false, 1);	
		alert("2Player");
	}
	else {
		player1 = new Player(canvas.width - 10, false, 0);
		player2 = new Player(10, true, 1);
	}
	ball = new Ball(canvas.width / 2, canvas.height / 2, 90);
	alert(player1.y);
};

// Update game objects
var update = function (modifier) {
	player1.move();
	player2.move();
	ball.move();
};

// Draw everything
var render = function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	player1.draw();
	player2.draw();
	ball.draw();
};


var main = function () {
	update();
	render();
};

init();
// Handle keyboard controls
var keysDown = {};
addEventListener("keydown", function (e) { keysDown[e.keyCode] = true; }, false);
addEventListener("keyup", function (e) { delete keysDown[e.keyCode]; }, false);

setInterval(main, 15); // Execute as fast as possible

var Ball = function(newX, newY, newDir) {
	var x = newX; // X
	var y = newY; // and Y coordinates
	var speed = 0.5;
	var maxSpeed = 1;
	var xSpeed = 0;
	var ySpeed = 0;
	var direction = newDir; // Ball Direction
	
	this.move = function() {
		xSpeed = speed * Math.cos(direction);
		ySpeed = speed * Math.sin(direction);
		
		if(y < 1 || y > canvas.height - 1) {
			ySpeed *= -1;
		}
		
		collide();
		
		x += xSpeed;
		y += ySpeed;
	};
	
	var collide = function() { // Collide with paddles
		if(y < player1.y + player1.height / 2 && y > player1.y - player1.height / 2 && x <= player1.x + 1) {
			xSpeed *= -1;
			speed += 0.01;
		}
		else if(y < player2.y + player2.height / 2 && y > player2.y - player2.height / 2 && x >= player2.x + 1) {
			xSpeed *= -1;
			speed += 0.01;
		}
	};
	
	this.draw = function() {
		
	};
};
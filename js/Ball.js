var Ball = function(newX, newY, newDir) {
	var x = newX; // X
	var y = newY; // and Y coordinates
	var maxSpeed = 1;
	var acceleration = 0.01;
	var xSpeed = Math.cos(newDir);
	var ySpeed = Math.sin(newDir);
	var size = 5;
	var direction = newDir; // Ball Direction
	
	this.move = function() {
		if(y < 1 || y > canvas.height - 1) {
			ySpeed *= -1;
		}
		
		collide();
		
		x += xSpeed;
		y += ySpeed;
	};
	
	var collide = function() { // Collide with paddles
		if(y < player1.y + player1.height / 2 && y > player1.y - player1.height / 2 && x <= player1.x + 2) {
			xSpeed *= -1;
			if(xSpeed < maxSpeed && ySpeed < maxSpeed) {
				xSpeed += acceleration;
				ySpeed += acceleration;
			}
		}
		else if(y < player2.y + player2.height / 2 && y > player2.y - player2.height / 2 && x >= player2.x + 2) {
			xSpeed *= -1;
			if(xSpeed < maxSpeed && ySpeed < maxSpeed) {
				xSpeed += acceleration;
				ySpeed += acceleration;
			}
		}
	};
	
	this.draw = function() {
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.beginPath();
		ctx.arc(x, y, size, 0, 2 * Math.PI);
		ctx.stroke();
	};
};
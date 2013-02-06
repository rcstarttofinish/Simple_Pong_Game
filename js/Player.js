// W = 87, A = 65, S = 83, D = 68,
// Up = 38, Down = 40, Right = 39, Left = 37

var Player = function(newX, newAI, newControl) {
	this.x = newX;				// X
	this.y = canvas.height / 2;  // and Y Coordinates
	this.speed = 2;
	this.ai = newAI
	this.score = 0;
	this.moveKeys = {};
	this.height = 50;
	if(this.ai == false) {
		if( newControl == 1) {
			this.moveKeys[0] = 38;
			this.moveKeys[1] = 40;
		}
		else {
			this.moveKeys[0] = 87;
			this.moveKeys[1] = 83;
		}
	}
	
	this.move = function() {
		if(this.ai == true) { // Not A Human Player
			//Follow ball
		}
		else {
			if (this.moveKeys[0] in keysDown) { // Player holding up
				this.y -= this.speed; // Move Up
			}
			if (this.moveKeys[1] in keysDown) { // Player holding down
				this.y += this.speed; //Move Down
			}
		}
	};
	
	this.draw = function() {
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.beginPath();
		ctx.moveTo(this.x, this.y - this.height / 2);
		ctx.lineTo(this.x, this.y + this.height / 2);
		ctx.closePath();
		ctx.stroke();
	};
};
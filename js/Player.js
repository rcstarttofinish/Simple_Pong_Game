// W = 87, A = 65, S = 83, D = 68,
// Up = 38, Down = 40, Right = 39, Left = 37

var Player = function(newX, newAI, newControl) {
	var x = newX;				// X
	var y = canvas.height / 2;  // and Y Coordinates
	var speed = 2;
	var ai = newAI
	var score = 0;
	var moveKeys = {};
	var height = 50;
	if(ai == false) {
		if( newControl == 1) {
			moveKeys[0] = 38;
			moveKeys[1] = 40;
		}
		else {
			moveKeys[0] = 87;
			moveKeys[1] = 83;
		}
	}
	
	this.move = function() {
		if(ai == true) { // Not A Human Player
			//Follow ball
		}
		else {
			if (moveKeys[0] in keysDown) { // Player holding up
				y -= speed; // Move Up
			}
			if (moveKeys[1] in keysDown) { // Player holding down
				y += speed; //Move Down
			}
		}
	};
	
	this.draw = function() {
		
	};
};
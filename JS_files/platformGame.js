var platformPlayer;
var playerRunning = true;


function beginPlatformer(){
	platformPlayer = new sjs.Image("https://res.cloudinary.com/df6blhv0i/image/upload/v1653322478/MiniPlayer_BreathingCycle_jjutw1.gif");
	platformPlayer.noBounds = true;
	platformPlayer.friction = .1;
	platformPlayer.node.style.zIndex = 5;
	platformPlayer.moveTo(150,525);

sjs.keyDown(LEFT_KEY, function(){ // somehow find a way to turn this off or smth
	if (window.currentScreen == 0){
		platformPlayer.pushLeft(1);
		if (playerRunning == true){
			playerRunning = false;
			platformPlayer.setImage("https://res.cloudinary.com/df6blhv0i/image/upload/v1653322834/FLIPPEDMiniPlayer_Running_2_ggvyai.gif");
		}}});

sjs.keyDown(RIGHT_KEY, function(){ // same with this. try to turn it off
	if (window.currentScreen == 0){
		platformPlayer.pushRight(1);
		if (playerRunning == true){
			playerRunning = false;
			platformPlayer.setImage("https://res.cloudinary.com/df6blhv0i/image/upload/v1653322585/MiniPlayer_Running_1_dfb33d.gif");
		}}});

window.addEventListener("keyup", function(e){
	playerRunning = true;

	if(e.keyCode == RIGHT_KEY){

		platformPlayer.setImage("https://res.cloudinary.com/df6blhv0i/image/upload/v1653322478/MiniPlayer_BreathingCycle_jjutw1.gif");

	} else if (e.keyCode == LEFT_KEY){

		platformPlayer.setImage("https://res.cloudinary.com/df6blhv0i/image/upload/v1653322796/FLIPPEDMiniPlayer_BreathingCycle_1_eeuhn3.gif");
	} //end if statement
}); //end EventListener function

}


function endPlatformer(){
	window.removeEventListener("keyup", function(e){ // rewriting the function? i think?
	playerRunning = true;

	if(e.keyCode == RIGHT_KEY){

		platformPlayer.setImage("https://res.cloudinary.com/df6blhv0i/image/upload/v1653322478/MiniPlayer_BreathingCycle_jjutw1.gif");

	} else if (e.keyCode == LEFT_KEY){

		platformPlayer.setImage("https://res.cloudinary.com/df6blhv0i/image/upload/v1653322796/FLIPPEDMiniPlayer_BreathingCycle_1_eeuhn3.gif");
	} //end if statement
}); //end EventListener function)

/*sjs.keyDown(RIGHT_KEY, function(){
	null; // tell it to do ABSOLUTELY nothing
	}});

sjs.keyDown(LEFT_KEY, function(){
	null; // same as above
	}});*/

	platformPlayer.destroy();
	platformPlayer = undefined;
	delete(platformPlayer);

	playerRunning = false;
} // end endPLatformer;

function playerDayX(){ // used for the little animation when the player runs across the screen when the "Day x" text appears
	platformPlayer2 = new sjs.Image("https://res.cloudinary.com/df6blhv0i/image/upload/v1653322585/MiniPlayer_Running_1_dfb33d.gif");
	platformPlayer2.noBounds = true;
	platformPlayer2.friction = .1;
	platformPlayer2.node.style.zIndex = 5;
	platformPlayer2.moveTo(0,525);
	console.log(platformPlayer2);

	while (platformPlayer2.x < 1800){
		setTimeout(function(){
			console.log("This has fired");
			platformPlayer2.moveTo(platformPlayer2.x + 10,525);
		}, 30);
	}
	if (platformPlayer2.x >= 1800){
		return true;
	}

}

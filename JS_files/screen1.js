// FIRST SCREEN - HAS CAFE PEOPLE. WHERE YOU HAND OUT ORDERS
// FIXED
var background1;
var player;

function screen1() {
	//bg
	background1 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/screen1_gwjsjx.png");
	background1.node.style.zIndex = 0.01;


	player = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/player_ypynhx.png");
	player.noBounds = true;
	player.moveTo(-100, 225);
	player.node.style.zIndex = 0.01;

}

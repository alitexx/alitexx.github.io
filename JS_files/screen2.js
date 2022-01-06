// SECOND SCREEN, GET DRINK FLAVOR

//globals so i can destroy them
var background2; var moveToScreen3; var button1_scn2; var button2_scn2; var button3_scn2; var button4_scn2; var button5_scn2; var button6_scn2; var button7_scn2; var button8_scn2; var button9_scn2; var button10_scn2; var button11_scn2;

var scoopOfBeans; // made it a global
var scoopOut = false;
function screen2() {
	//bg
	background2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/Screen2_momblr.png");
	background2.node.style.zIndex = 0.01;

	moveToScreen3 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337230/Images/moveDrinkParts/moveToScreen3_cia5jk.png");
	moveToScreen3.moveTo(1500,825);
	moveToScreen3.type = "moveBlock";
	moveToScreen3.node.style.zIndex = 0.01;
	
	button1_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/battery_acid_ktm8yb.png");
	button1_scn2.type = "Game";
	button1_scn2.setSize(95,95);
	button1_scn2.moveTo(307,166);

	button1_scn2.onMouseDown(function(){
		// returns true or false to make sure that you cant take more than one
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopBattery_p2q94u.png", scoopOut);
	});

	button2_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/light_roast_ci73au.png");
	button2_scn2.type = "Game";
	button2_scn2.setSize(95,95);
	button2_scn2.moveTo(437.25,166);

	button2_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopLightEST_vdgjfw.png", scoopOut);
	});

	button3_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/medium_roast_f5yp6k.png");
	button3_scn2.type = "Game";
	button3_scn2.setSize(95,95);
	button3_scn2.moveTo(567.5,166);

	button3_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopLighter_ogzead.png", scoopOut);
	});

	button4_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/mediumDark_roast_qps7dx.png");
	button4_scn2.type = "Game";
	button4_scn2.setSize(95,95);
	button4_scn2.moveTo(307,307.5);

	button4_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopDarker_towe5x.png", scoopOut);
	});

	button5_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/dark_roast_rfdvdn.png");
	button5_scn2.type = "Game";
	button5_scn2.setSize(95,95);
	button5_scn2.moveTo(437.25,307.5);

	button5_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopDarkEST_joihmd.png", scoopOut);
	});

// TEA BEGINS HERE
	button6_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/chamomile_zxawp4.png");
	button6_scn2.type = "Game";
	button6_scn2.setSize(95,95);
	button6_scn2.moveTo(977,166);

	button6_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopChamo_ls0qgf.png", scoopOut);
	});

	button7_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/green_jpomoc.png");
	button7_scn2.type = "Game";
	button7_scn2.setSize(95,95);
	button7_scn2.moveTo(1107.25,166);

	button7_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopGreen_tfrhs4.png", scoopOut);
	});

	button8_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/elderberry_lsbn0r.png");
	button8_scn2.type = "Game";
	button8_scn2.setSize(95,95);
	button8_scn2.moveTo(1237.5,166);

	button8_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopElder_bh5rqk.png", scoopOut);
	});

	button9_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/white_uun5cq.png");
	button9_scn2.type = "Game";
	button9_scn2.setSize(95,95);
	button9_scn2.moveTo(977,307.5);

	button9_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopWhite_pgoifi.png", scoopOut);
	});

	button10_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/chai_bsuud8.png"); // share with med roast
	button10_scn2.type = "Game";
	button10_scn2.setSize(95,95);
	button10_scn2.moveTo(1107.25,307.5);

	button10_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopChai_plhxpz.png", scoopOut);
	});

	button11_scn2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/mint_ixdgce.png"); // share with white
	button11_scn2.type = "Game";
	button11_scn2.setSize(95,95);
	button11_scn2.moveTo(1237.5,307.5);

	button11_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopWhite_pgoifi.png", scoopOut);
	});

	sjs.onHit("Beans","moveBlock", function(x,y){ // on hit, go to 3rd screen
		x.moveTo(5,1000);
		transition(2);
		setTimeout(function (){
			screen3();
			checksForSwitchingScreens(currentScreen,3);
			window.currentScreen = 3;
			x.node.style.zIndex= 2;
		}, 250);
	});

}

function onClickButtons(scoopImage, scoopOut) {
	btn_clickSFX.play();
		if (scoopOut == false){
			scoopOut = true;
			scoopOfBeans = new sjs.Image(scoopImage);
			scoopOfBeans.moveTo(700,600);
			scoopOfBeans.type = "Beans";
			scoopOfBeans.draggable();
			scoopOfBeans.follow(sjs.mouse);
			scoopOfBeans.node.style.zIndex = 1;
			return scoopOut;
		}
		else{ // the "please dont take more than one" prompt
			var tooManyPrompt = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/prompt2user_wworgm.png");
			tooManyPrompt.moveTo(400,425);
			tooManyPrompt.node.style.zIndex = 2;
			var prmpt_Text = new sjs.Text("Only take one at a time!",75,"white");
			prmpt_Text.moveTo(585,515);
			prmpt_Text.node.style.zIndex = 2;
			prmpt_Text.node.style.fontFamily = "Apple Kid";
			setTimeout(function(){
				tooManyPrompt.destroy();
				prmpt_Text.destroy();
				}, 1500)
			}
}









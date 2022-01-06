// grading screen!!!!!!! given you ye score
var background5; var customerImage5; var finished_drink; var textBbl; var customerRatingDisplayed; var face_Score; var continueBtn;

var customerGRADING; // tells us what the customer thinks!!!!!!
var audioS5 = new Audio("Audio/grading.mp3");
audioS5.loop = true;

function screen5(menuImage, spotToBeDeleted){
	background5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337081/Images/grading_screen_eo1vhx.png");
	background5.node.style.zIndex = 3;
	background5.setSize(1600,800);
	background5.center();

	barrier1 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337236/Images/mainMenu/DarkBorder_ewfdgz.png");
	barrier1.node.style.zIndex = 50;
	barrier1.moveTo(0,-1400);

	barrier2 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337236/Images/mainMenu/DarkBorder_ewfdgz.png");
	barrier2.node.style.zIndex = 50;
	barrier2.moveTo(0,1400);

	switch(menuImage){
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/spamton_Menu_r7sabk.png" : // spamton
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/customer1_Flipped_pjcti2.png"); // customer
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337081/Images/L_Finished_u4qqkl.gif"); // size of their drink
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/UG_Menu_krhdya.png" : // UG
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer2_flipped_f4nt3w.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337081/Images/L_Finished_u4qqkl.gif");
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/leo_Menu_gnrbqw.png" : // leo
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/customer3_flipped_nz8fgp.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337081/Images/L_Finished_u4qqkl.gif");
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/robin_Menu_ajcliw.png" : // robin
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer4_nievxr.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/S_Finished_zgrqtt.gif");
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/luigi_Menu_kmznov.png" : // luigi
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer5_flipped_pdxmvu.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/S_Finished_zgrqtt.gif");
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/SG_Menu_gdss61.png" : // SG
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer6_flipped_oun7qy.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337081/Images/L_Finished_u4qqkl.gif");
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/glamrock_Menu_lvbuew.png" : // glamrock
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer7_mfzeea.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/S_Finished_zgrqtt.gif");
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/gingerbrave_Menu_efpx05.png" : //gb
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer8_y0uivk.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/S_Finished_zgrqtt.gif");
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/greg_Menu_lqknvj.png" : // greg
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer9_flipped_uuhgzg.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/S_Finished_zgrqtt.gif");
		break;
		case "https://res.cloudinary.com/java-cafe/image/upload/v1641337302/Images/customerData/autumn_Menu_lrrvck.png" : // autumn
			customerImage5 = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer10_flipped_dk0yx6.png");
			finished_drink = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/S_Finished_zgrqtt.gif");
		break;
	}
	customerImage5.node.style.zIndex = 4;
	customerImage5.setSize(350,525);
	customerImage5.moveTo(600,275);

	finished_drink.node.style.zIndex = 4;
	finished_drink.moveTo(1100,510);

	textBbl = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337082/Images/textBbl_i29jle.gif");
	textBbl.moveTo(50,250);
	textBbl.node.style.zIndex = 4;

	customerRatingDisplayed = new sjs.Text(customerGRADING[0],100,"black");
	customerRatingDisplayed.moveTo(260,325);
	customerRatingDisplayed.node.style.zIndex = 5;
	customerRatingDisplayed.node.style.fontFamily = "Apple Kid";

	switchToDeleteMenu(spotToBeDeleted);


	setTimeout(function(){
		// display image for smile :) or frown >:(
		face_Score = new sjs.Image(customerGRADING[1]);
		face_Score.moveTo (90,295);
		face_Score.node.style.zIndex = 5;

		continueBtn = new sjs.Button("Click To Continue", function (){
			audioS5.pause();
			FINISHEDCUSTOMERS = FINISHEDCUSTOMERS + 1 // add one to the tally of customers completed
			if (endlessMode == true){displayCustomersServed.setText(["Customers served : "+FINISHEDCUSTOMERS.toString()],75,"white");}; // change if player is in endless mode
			if (FINISHEDCUSTOMERS >= 3 && endlessMode == false){
				hooray.load();
				hooray.play();
				currentScreen = 6;
				transition(5);
				setTimeout(function (){
					evalScreen();
				}, 2990);
			} else {
			setTimeout(function (){
				transition(5);
				overworldBGM.load();
				overworldBGM.play();
				checksForSwitchingScreens(currentScreen,1); // cannot fully delete items in a setTimeout function
				currentScreen = 1;
				screen1();
				canChangeScreens = true;
				able2BTopped = true;
			}, 250);
			}
		});
		continueBtn.node.style.zIndex = 51;
		continueBtn.node.style.fontFamily = "Apple Kid";
		continueBtn.node.style.width = '500px';
		continueBtn.node.style.height = '100px';
		continueBtn.node.style.background = 'LightPink';
		continueBtn.node.style.color = 'MistyRose';
		continueBtn.node.style.fontSize = '75px';
		continueBtn.moveTo(550, 800);


		
		}, 1500);
}


function switchToDeleteMenu(spotToBeDeleted){
	switch(spotToBeDeleted){
		case "numOne":
			menu1 = undefined;
			delete(menu1);
		break;
		case "numTwo":
			menu2 = undefined;
			delete(menu2);
		break;
		case "numThree":
			menu3 = undefined;
			delete(menu3);
		break;
		case "numFour":
			menu4 = undefined;
			delete(menu4);
		break;
		case "numFive":
			menu5 = undefined;
			delete(menu5);
		break;
	}
}
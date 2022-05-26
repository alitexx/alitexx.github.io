var drinksBeingMade = {
	numOne: undefined, // drink 1 of type classDrinks
	numTwo: undefined, // drink 2 of type classDrinks
	numThree: undefined // drink 3 of type classDrinks
};


var FINISHEDCUSTOMERS = 0; // VALUE THAT CHANGES BASED ON NUMBER OF CUSTOMERS SERVED

var currentScreen = 0; // keeps track of streen player is currently on
var cupsCurrentlyUsed = 0; // helps check if user made too many

var GcustomerRating1; // stores what customers thought of the drink
var GcustomerRating2;
var GcustomerRating3;

var menu1;
var menu2;
var menu3;
var menu4;
var menu5;

var awaitingOrderCustomer;
var clickToTakeOrder;

var doorbell = new Audio("Audio/doorbellSFX.wav");
var btn_clickSFX = new Audio("Audio/button_click.wav");


var customersBeingServed = { // customer orders you are carrying
	numOne: undefined,
	numTwo: undefined,
	numThree: undefined,
	numFour: undefined,
	numFive: undefined,
};

var DISPLAYED_customer_order = { // IMAGE LINKS FOR EASIER CALLING
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337302/Images/customerData/customer1_hgyyi1.png": { // SPAMTON
				"name": "Spamton",
				"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/large_empty_vu2sxn.png",
				"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/battery_acid_ktm8yb.png",
				"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
				"toppings" : [null,"https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/whipped_btn_scxsav.png"]
				// i made it a list bc other toppings will be in a list
			},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer2_ljtitf.png": { // UG
		"name": "UncleGrandpa",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/large_empty_vu2sxn.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/medium_roast_f5yp6k.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/sugarcubes_Icon_apxoux.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/expresso_piahuk.png"]

		},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/customer3_pbdrls.png": { // LEO
		"name": "Leo",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/large_empty_vu2sxn.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/dark_roast_rfdvdn.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/choco_syrup_rpcpce.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/expresso_piahuk.png"]

	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer4_nievxr.png": { //ROBIN
		"name": "Robin",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/green_jpomoc.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : [null,"https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/vanilla_gzxpuz.png"]

	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer5_fwxeh3.png": { // LUIGI
		"name": "Luigi",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/chai_bsuud8.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/vanilla_gzxpuz.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/peppermint_icon_qdhp1o.png"]

	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer6_ml8ytv.png": { // SCRATCH AND GROUNDER
		"name": "S and G",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/large_empty_vu2sxn.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/battery_acid_ktm8yb.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : [null,"https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/pumpkin_p9acb9.png"]

	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer7_mfzeea.png": { // GLAMROCK
		"name": "Glamrock",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/mediumDark_roast_qps7dx.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/choco_syrup_rpcpce.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/cinnamon_Icon_rqr0rj.png"]

	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer8_y0uivk.png": { // GINGERBRAVE
		"name": "Gingerbrave",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/chai_bsuud8.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/cara_syrup_wualvf.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/cinnamon_Icon_rqr0rj.png"]

	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer9_pcev80.png": { // GREG
		"name": "Greg",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/chamomile_zxawp4.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : [null,"https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/sugarcubes_Icon_apxoux.png"]

	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer10_qqrbai.png": { // AUTUMN
		"name": "Autumn",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/white_uun5cq.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/whipped_btn_scxsav.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/vanilla_gzxpuz.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/cinnamon_Icon_rqr0rj.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653514216/Images/customerData/customer11_vo2syj.png": { // PARAPPA THE FREAKING RAPPER
		"name": "Parappa",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/light_roast_ci73au.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/sugarcubes_Icon_apxoux.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/choco_syrup_rpcpce.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/chocolate_azqwbr.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653571602/Images/customerData/customer12_ivtaxh.png": { // INGO BINGO
		"name": "Ingo",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/mint_ixdgce.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : [null, "https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/peppermint_bifdhl.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653514216/Images/customerData/customer13_gvasgl.png": { // NAGITO KOMAEDA
		"name": "Nagito",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/large_empty_vu2sxn.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/dark_roast_rfdvdn.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/whipped_btn_scxsav.png", "https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/caramel_yiz2je.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/cinnamon_Icon_rqr0rj.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653514226/Images/customerData/customer14_vvudfc.png": { // MONOKUMA
		"name": "Monokuma", // ask rachel abt this one
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/battery_acid_ktm8yb.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/peppermint_bifdhl.png", "https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/peppermint_icon_qdhp1o.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653514227/Images/customerData/customer15_kl87er.png": { // p-o-nix wring
		"name": "Phoenix", // ask rachel abt this one
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/medium_roast_f5yp6k.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/whipped_btn_scxsav.png", "https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/pumpkin_p9acb9.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/cinnamon_Icon_rqr0rj.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653514227/Images/customerData/customer16_e9ma3u.png": { // COCO
		"name": "Coco", 
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/mediumDark_roast_qps7dx.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherNO_l0xvbm.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/choco_syrup_rpcpce.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/chocolate_azqwbr.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/cinnamon_Icon_rqr0rj.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653514820/Images/customerData/customer17_qf0mth.png": { // the king himself mr kelley
		"name": "Kelley", 
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/large_empty_vu2sxn.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/light_roast_ci73au.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/whipped_btn_scxsav.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/peppermint_bifdhl.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/expresso_piahuk.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653514226/Images/customerData/customer18_ndusqh.png": { // girl boss
		"name": "Girl Boss",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/large_empty_vu2sxn.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/elderberry_lsbn0r.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : [null, "https://res.cloudinary.com/java-cafe/image/upload/v1641337223/Images/screen4Items/peppermint_bifdhl.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653514226/Images/customerData/customer19_fnnxgc.png": { // professor laventon
		"name": "Laventon",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/small_empty_hmlzkl.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/elderberry_lsbn0r.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/whipped_btn_scxsav.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/sugarcubes_Icon_apxoux.png"]
	},
	"https://res.cloudinary.com/java-cafe/image/upload/v1653568992/Images/customerData/customer20_efoxf0.png": { // gobble
		"name": "Gobble",
		"size": "https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/large_empty_vu2sxn.png",
		"drinkType": "https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/chai_bsuud8.png",
		"latte": "https://res.cloudinary.com/java-cafe/image/upload/v1641337248/Images/drinkTypeButtons/FrotherYES_uck5jp.png",
		"toppings" : ["https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/cara_syrup_wualvf.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337222/Images/screen4Items/caramel_yiz2je.png", "https://res.cloudinary.com/java-cafe/image/upload/v1641337224/Images/screen4Items/sugarcubes_Icon_apxoux.png"]
	}
}

var NPCstats = null // current npc waiting
var runningValue = 0;

function findNewCustomer(){ // FINDS A NEW CUSTOMER TO BE SPAWNED, DOESNT DO ANY OF THE SPAWNING
	switch (Math.floor(Math.random() * 20)) { // change num according to new npcs being added Math.floor(Math.random() * 20)
		case 0: // spammy
		// spamton still spawns MANY TIMES so have it cut it out
			NPCstats = spawnNPC("Spamton", "https://res.cloudinary.com/java-cafe/image/upload/v1641337302/Images/customerData/customer1_hgyyi1.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/customer1Interract_t5tes0.gif");
			break;
		case 1: // UG
			NPCstats = spawnNPC("UncleGrandpa", "https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer2_ljtitf.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer2Interract_jaaish.gif");
			break;
 		case 2: // leo
			NPCstats = spawnNPC("Leo", "https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/customer3_pbdrls.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/customer3Interract_b2emuu.gif");
			break;
		case 3: // robin
			NPCstats = spawnNPC("Robin", "https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer4_nievxr.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer4Interract_egxvib.gif");
			break;
		case 4: // Luigi
			NPCstats = spawnNPC("Luigi", "https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer5_fwxeh3.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer5Interract_ztaj1d.gif");
			break;
		case 5: // scratch n grounder
			NPCstats = spawnNPC("S and G", "https://res.cloudinary.com/java-cafe/image/upload/v1641337303/Images/customerData/Customer6_ml8ytv.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer6Interract_wc0gb9.gif");
			break;
		case 6: // glamrock
			NPCstats = spawnNPC("Glamrock", "https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer7_mfzeea.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer7Interract_qbrlqm.gif");
			break;
		case 7: // Gingerbrave
			NPCstats = spawnNPC("Gingerbrave", "https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer8_y0uivk.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer8Interract_vsjm61.gif");
			break;
		case 8: // Greg
			NPCstats = spawnNPC("Greg", "https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer9_pcev80.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer9Interract_lp6yry.gif");
			break;
		case 9: // Autumn
			NPCstats = spawnNPC("Autumn", "https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer10_qqrbai.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/Customer10Interract_xb4ch5.gif");
			break;
		case 10: // Parappa
			NPCstats = spawnNPC("Parappa", "https://res.cloudinary.com/java-cafe/image/upload/v1653514216/Images/customerData/customer11_vo2syj.png","https://res.cloudinary.com/java-cafe/image/upload/v1653519835/Images/customerData/customer11Interract_mebru9.gif");
			break;
		case 11: // Ingo
			NPCstats = spawnNPC("Ingo", "https://res.cloudinary.com/java-cafe/image/upload/v1653571602/Images/customerData/customer12_ivtaxh.png","https://res.cloudinary.com/java-cafe/image/upload/v1653571609/Images/customerData/customer12Interract_k9ophw.gif");
			break;
		case 12: // Nagito
			NPCstats = spawnNPC("Nagito", "https://res.cloudinary.com/java-cafe/image/upload/v1653514216/Images/customerData/customer13_gvasgl.png","https://res.cloudinary.com/df6blhv0i/image/upload/v1653326978/output-onlinegiftools_1_oyrk2m.gif"); // nagito gif is from da school account
			break;
		case 13: // Monokuma
			NPCstats = spawnNPC("Monokuma", "https://res.cloudinary.com/java-cafe/image/upload/v1653514226/Images/customerData/customer14_vvudfc.png","https://res.cloudinary.com/java-cafe/image/upload/v1653514227/Images/customerData/customer14Interract_rmwspq.gif");
			break;
		case 14: // Phoenix
			NPCstats = spawnNPC("Phoenix", "https://res.cloudinary.com/java-cafe/image/upload/v1653514227/Images/customerData/customer15_kl87er.png","https://res.cloudinary.com/java-cafe/image/upload/v1653514227/Images/customerData/customer15Interract_bpuzkx.gif");
			break;
		case 15: // Coco
			NPCstats = spawnNPC("Coco", "https://res.cloudinary.com/java-cafe/image/upload/v1653514227/Images/customerData/customer16_e9ma3u.png","https://res.cloudinary.com/java-cafe/image/upload/v1653514227/Images/customerData/customer16Interract_eqx1pw.gif");
			break;
		case 16: // Mr Kelley
			NPCstats = spawnNPC("Kelley", "https://res.cloudinary.com/java-cafe/image/upload/v1653514820/Images/customerData/customer17_qf0mth.png","https://res.cloudinary.com/java-cafe/image/upload/v1653514820/Images/customerData/customer17Interract_yxpmhe.gif");
			break;
		case 17: // Girl Boss
			NPCstats = spawnNPC("Girl Boss", "https://res.cloudinary.com/java-cafe/image/upload/v1653514226/Images/customerData/customer18_ndusqh.png","https://res.cloudinary.com/java-cafe/image/upload/v1653571614/Images/customerData/customer18Interract_ieip6p.gif");
			break;
		case 18: // Laventon
			NPCstats = spawnNPC("Laventon", "https://res.cloudinary.com/java-cafe/image/upload/v1653514226/Images/customerData/customer19_fnnxgc.png","https://res.cloudinary.com/java-cafe/image/upload/v1653514226/Images/customerData/customer19Interract_lq1fpr.gif");
			break;
		case 19: // Gobble
			NPCstats = spawnNPC("Gobble", "https://res.cloudinary.com/java-cafe/image/upload/v1653568992/Images/customerData/customer20_efoxf0.png","https://res.cloudinary.com/java-cafe/image/upload/v1653568986/Images/customerData/customer20Interract_e2h9tq.gif");
			break;
		}
		runningValue += 1;
}// end funct


var customerWaiting = false; // checks if theres a customer
var secondsUntilSpawn = 30000; // changes throughout the game, made it fast for testing



function STARTspawningNPCS(){ // THE LOOP OF SPAWNING CUSTOMERS
	setInterval(function (){
		if (customerWaiting == false){
			findNewCustomer(); // find someone to fill spot
			if (NPCstats != null){
			spawningInACustomer();
				}
			} // ends func
	}, secondsUntilSpawn); // every 5 seconds, initial spawn 2.5 seconds in
} // ends start spawning npcs funct

var newCustomer; // test

function spawningInACustomer(exception){ // ACTUALLY SPAWNS THE GRAPHICS

		if (window.currentScreen != 1 && typeof newCustomer == "undefined"){
			//display bubble near orders
			newCustomer = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/newCustomer_cozd33.gif");
			newCustomer.node.style.zIndex = 10;
			newCustomer.setSize(100,100);
			newCustomer.moveTo(175,10);
		}
		if (window.currentScreen == 1){
			try {
				awaitingOrderCustomer.setImage(NPCstats[0]);
				clickToTakeOrder.setImage("https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/newCustomer_cozd33.gif");
			}
			catch {
				awaitingOrderCustomer = new sjs.Image(NPCstats[0]);
				clickToTakeOrder = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/newCustomer_cozd33.gif");
			}		
			awaitingOrderCustomer.node.style.zIndex = 1;
			awaitingOrderCustomer.moveTo(1200,200);


			clickToTakeOrder.node.style.zIndex = 1;
			clickToTakeOrder.moveTo(850,200);


			clickToTakeOrder.onMouseDown(function(){
				canChangeScreens = false;
				awaitingOrderCustomer.destroy();
				clickToTakeOrder.destroy(); // destroy customer graphics
				awaitingOrderCustomer = undefined;
				clickToTakeOrder = undefined;
				delete(awaitingOrderCustomer);
				delete(clickToTakeOrder);

				var takingCustomersOrder = new sjs.Image(NPCstats[1]);
				takingCustomersOrder.node.style.zIndex = 0;
				//takingCustomersOrder.setSize(412.5,536.25);
				takingCustomersOrder.moveTo(1200,200);

				var ticketForOrder = new sjs.Image("https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/menu_sjdffr.png"); // potential tween
				ticketForOrder.node.style.zIndex = 6;
				ticketForOrder.moveTo(520,70);

				var checkForContinue = display_order(DISPLAYED_customer_order[NPCstats[0]]);
				setTimeout(function(){
					canChangeScreens = true;
					customerWaiting = false;
					ticketForOrder.destroy();
					takingCustomersOrder.destroy();
					spawnOrderForm(NPCstats[0])
				if (typeof newCustomer != "undefined"){ // destroys graphics
					newCustomer.destroy();
				}
					}, 3500);// end timeout
				})// end mouse down
			} // ends if
		} // ends func



function spawnNPC(customerComingIn, imageForspawn, talking_gif){ // CHECKS IF SOMEONE CAN BE SPAWNED, THEN RETURNS VALUE TO SPAWN THEM
	var slotOpen = 0
	for (const [key, value] of Object.entries(customersBeingServed)) { // find npc
		if (value == customerComingIn) {return null;}
		} // end for
		for (const [key, value] of Object.entries(customersBeingServed)) { // checks if customer picked is here
			if (typeof value == "undefined"){
				slotOpen = key; //assign the first open slot to customer
				break;
			} else {
				slotOpen = 0;
			}
			}// end for
			if (slotOpen != 0 && customerWaiting == false) {
					customersBeingServed[slotOpen] = customerComingIn; // sets null as their name
					customerWaiting = true; // someone is here
					if (window.currentScreen < 5){ // makes sure player isnt being graded
						doorbell.play();
					}
				}

			return [imageForspawn, talking_gif];
} // end function


function display_order(customerImages){ // DISPLAYS ORDER WHEN THEY PLAYER WANTS TO TAKE THEIR ORDER
	var writingAudio = new Audio("Audio/5WritingSFX.wav");
	writingAudio.play();
	var cupSize; var frother; var flavor;
	var topping0; var topping1; var topping2;
	// make sure they can be destroyed in the end
	setTimeout(function(){
			cupSize = new sjs.Image(customerImages["size"]);
			cupSize.node.style.zIndex = 6;
			cupSize.setSize(200,300);
			cupSize.moveTo(550,100);
		}, 200);

		setTimeout(function(){
			frother = new sjs.Image(customerImages["latte"]);
			frother.setSize(250,250);
			frother.node.style.zIndex = 6;
			frother.moveTo(550,400);
		}, 1250);

		setTimeout(function(){
			flavor = new sjs.Image(customerImages["drinkType"]);
			flavor.setSize(175,175);
			flavor.node.style.zIndex = 6;
			flavor.moveTo(860,185);
		}, 750);


 		var toppingslist = customerImages["toppings"];
 		if (toppingslist[0] != null){
 			setTimeout(function(){
				var topping0 = new sjs.Image(toppingslist[0]);
				topping0.setSize(150,150);
				topping0.node.style.zIndex = 6;
				topping0.moveTo(570,685);
				setTimeout(function(){
					topping0.destroy();
				}, 1750);
			}, 1750);
		} if (toppingslist[1] != null){
			setTimeout(function(){
				var topping1 = new sjs.Image(toppingslist[1]);
				topping1.setSize(150,150);
				topping1.node.style.zIndex = 6;
				topping1.moveTo(725,685);
				setTimeout(function(){
					topping1.destroy();
				}, 1250);
			}, 2250);
		} if (toppingslist[2] != null){
			setTimeout(function(){
				var topping2 = new sjs.Image(toppingslist[2]); // make new image for all bottle
				topping2.setSize(150,150);
				topping2.node.style.zIndex = 6;
				topping2.moveTo(880,685);
				setTimeout(function(){
					topping2.destroy();
				}, 750);
			}, 2750);
		}
	var returnValue = setTimeout(function(){
		cupSize.destroy();
		frother.destroy();
		flavor.destroy();
	}, 3500); // remember to crop the writing to 3 seconds
}
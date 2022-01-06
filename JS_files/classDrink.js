class Drink { // broken in internet explorer

  brewingSlot = 0;
  
  // Brew Station
  drinkType = "";
  cupSize = "";
  isLatte = false;
  points = 0;
  happiness = "";

  //Toping Station
  toppings = [null];

  // Called on init
  constructor(slotNum, drinkItself, drinkType) {
    this.brewingSlot = slotNum;
    this.cupSize = drinkItself.src;
    this.drinkType = drinkType;
  }


  onClickEventS3(drinkItself, area){
  var onClickDrink;
          onClickDrink = drinkItself.onMouseDown(function(){
            // switch based on slotnum eventually
                drinkItself.canBrew = false;
                drinkItself.draggable();
                drinkItself.type = "doneBrewing";
                drinkItself.isBeingBrewed = false;
                drinkItself.station = undefined;
                delete(drinksBeingMade[drinkItself.station]);
                //window["timer"+area]
                window["timer"+area].setImage("https://res.cloudinary.com/java-cafe/image/upload/v1641337311/Images/brewTimer/timer_null_h8iet9.png");
                window["insertedScoop"+area].destroy();
                window["station"+area+"Taken"] = false;
                window["scoop"+area+"Taken"] = "";
                window["timerComplete"+area] = false;
                onClickDrink = undefined;
          });
  }


  // Helpful Functions
  addTopping(newTopping)
  {
    var valueIsTopping = false;
    for (const [key, value] of Object.entries(this.toppings)) { // still says its undefined??????????????????????????????????????????S
      if (value == newTopping) {
        valueIsTopping = true; // stops the next code from running
        break;
      }
    } // end for
    if (valueIsTopping != true){
      this.toppings.push(newTopping);
    }
  }// end addtopping

  addLatteMilk()
  {
  	 this.isLatte = true;
  }

  customerRating(orderForm)
  {
  	// figure out the score based on actual order */
    switch(orderForm){
      case("https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/spamton_Menu_r7sabk.png"):
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopBattery_p2q94u.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/L_draggable_ytby3n.png", true,[null, 'Whipped Cream', undefined, undefined]);
      // pass a list of his order into another function
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/UG_Menu_krhdya.png" : // UG
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopLighter_ogzead.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/L_draggable_ytby3n.png", true,[null,'Sugar Cube', 'Shot of Expresso', undefined]);
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/leo_Menu_gnrbqw.png" : // leo
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopDarkEST_joihmd.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/L_draggable_ytby3n.png", true,[null,'Chocolate Syrup', 'Shot of Expresso', undefined]);
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/robin_Menu_ajcliw.png" : // robin
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopGreen_tfrhs4.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/S_draggable_dzqv0j.png", false,[null, 'Shot of Vanilla', undefined, undefined]);
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/luigi_Menu_kmznov.png" : // luigi
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopChai_plhxpz.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/S_draggable_dzqv0j.png", true,[null,'Shot of Vanilla', 'Peppermint Candy', undefined]);
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/SG_Menu_gdss61.png" : // SG
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopBattery_p2q94u.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/L_draggable_ytby3n.png", false,[null, 'Shot of Pumpkin', undefined, undefined]);
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/glamrock_Menu_lvbuew.png" : // glamrock
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopDarker_towe5x.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/S_draggable_dzqv0j.png", true,[null,'Chocolate Syrup', 'Cinnamon', undefined]);
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337304/Images/customerData/gingerbrave_Menu_efpx05.png" : //gb
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopChai_plhxpz.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/S_draggable_dzqv0j.png", false,[null,'Caramel Syrup', 'Cinnamon', undefined]);
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337305/Images/customerData/greg_Menu_lqknvj.png" : // greg
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopChamo_ls0qgf.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/S_draggable_dzqv0j.png", false,[null, 'Sugar Cube', undefined, undefined]);
      break;
      case "https://res.cloudinary.com/java-cafe/image/upload/v1641337302/Images/customerData/autumn_Menu_lrrvck.png" : // autumn
        this.happiness = this.GRADING("https://res.cloudinary.com/java-cafe/image/upload/v1641337247/Images/drinkTypeButtons/scoops/scoopWhite_pgoifi.png","https://res.cloudinary.com/java-cafe/image/upload/v1641337246/Images/drinkTypeButtons/S_draggable_dzqv0j.png", true,[null,'Whipped Cream', 'Shot of Vanilla', 'Cinnamon']);
      break;



    }
      return this.happiness;
  }
  GRADING(flavor,size,latteStatus,toppingsList){
    // first, check flavor
    if (this.drinkType == flavor){
      console.log("the point has been given for flavor");
      this.points = this.points + 15;
    } // no else, i wont be taking points away

    // drink size
    if (this.cupSize == size){
      console.log("the point has been given for cup size");
      this.points = this.points + 15;
    }

    // is latte
    if (this.isLatte == latteStatus){
      console.log("the point has been given for latte");
      this.points = this.points + 15;
    }

    // toppings
    for (const [key, value] of Object.entries(toppingsList)) { // find npc
      if (value == this.toppings[key] && value != null) {
        console.log("the point has been given for "+value);
        this.points = this.points + 10;
      } else if (typeof value == "undefined") {
        this.points = this.points + 10;
      }
    } // end for

    console.log(this.points);
    if (this.points <= 35){
      return ["BAD", "https://res.cloudinary.com/java-cafe/image/upload/v1641337080/Images/face_Angry_m8snhf.png", 0];
    } else if (this.points > 35 && this.points <= 70){
      return ["OK", "https://res.cloudinary.com/java-cafe/image/upload/v1641337081/Images/face_Neutral_lxj7xn.png", 1];
    } else if (this.points >= 75){ // 75 is perfect
      return ["PERFECT", "https://res.cloudinary.com/java-cafe/image/upload/v1641337080/Images/face_Happy_vxtz9r.png", 2];
    }
}


}

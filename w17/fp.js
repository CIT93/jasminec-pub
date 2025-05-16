class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    dishWasher,
    washMachine,
    purchases,
    waste,
    recycle,
    car,
    bus,
    plane
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.dishWasher = dishWasher;
    this.washMachine = washMachine;
    this.purchases = purchases;
    this.waste = waste;
    this.recycle = recycle;
    this.car = car;
    this.bus = bus;
    this.plane = plane;
    this.houseHoldPoints();
    this.houseSizePoints();
    this.foodChoicePoints();
    this.foodSourcePoints();
    this.yearlyPurchasesPoints();
    this.dishWasherCalc();
    this.washingMachineCalc();
    this.wasteProducedPoints();
    this.personalCarPoints();
    this.publicTransportPoints();
    this.flightTransportPoints();
    this.calculateTotal();
  }
  houseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }

  houseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }
  foodChoicePoints() {
    if (this.foodChoice === "dailyMeat") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "fewMeat") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "veganOrWild") {
      this.foodChoicePoints = 2;
    }
  }
  foodSourcePoints() {
    if (this.foodSource === "prepacked") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balanced") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "fresh") {
      this.foodSourcePoints = 2;
    }
  }

  dishWasherCalc() {
    if (this.dishWasher > 9) {
      this.dishWasherCalc = 3;
    } else if (this.dishWasher >= 4 && this.dishWasher <= 9) {
      this.dishWasherCalc = 2;
    } else if (this.dishWasher >= 1 && this.dishWasher <= 3) {
      this.dishWasherCalc = 1;
    } else if (this.dishWasher === 0) {
      this.dishWasherCalc = 0;
    }
  }
  washingMachineCalc() {
    if (this.washMachine > 9) {
      this.washingMachineCalc = 3;
    } else if (this.washMachine >= 4 && this.washMachine <= 9) {
      this.washingMachineCalc = 2;
    } else if (this.washMachine >= 1 && this.washMachine <= 3) {
      this.washingMachineCalc = 1;
    } else if (this.washMachine === 0) {
      this.washingMachineCalc = 0;
    }
  }
  yearlyPurchasesPoints() {
    if (this.purchases > 7) {
      this.yearlyPurchasesPoints = 10;
    } else if (this.purchases > 5 && this.purchases < 7) {
      this.yearlyPurchasesPoints = 8;
    } else if (this.purchases > 3 && this.purchases < 5) {
      this.yearlyPurchasesPoints = 6;
    } else if (this.purchases <= 3) {
      this.yearlyPurchasesPoints = 4;
    } else if (this.purchases === 0) {
      this.yearlyPurchasesPoints = 2;
    }
  }
  wasteProducedPoints(){
    if(this.waste === "fourTrash"){
        this.wasteProducedPoints = 50;
    } else if(this.waste === "threeTrash"){
        this.wasteProducedPoints = 40;
    } else if (this.waste === "twoTrash"){
        this.wasteProducedPoints = 30;
    } else if(this.waste === "oneTrash"){
        this.wasteProducedPoints = 20;
    } else if (this.waste === "halfOrLessT"){
        this.wasteProducedPoints = 5;
    }
  }
  personalCarPoints(){
    if(this.car === "15kMiles"){
      this.personalCarPoints = 12;
    } else if(this.car === "10kMiles"){
      this.personalCarPoints = 10;
    } else if(this.car === "1kMiles"){
      this.personalCarPoints = 6;
    } else if(this.car === "lessThan1k"){
      this.personalCarPoints = 4;
    } else if(this.car === "noCar"){
      this.personalCarPoints = 0;
    }
  }
  publicTransportPoints(){
    if(this.bus === "20kMilesPub"){
      this.publicTransportPoints = 12;
    } else if(this.bus === "15kMilesPub"){
      this.publicTransportPoints = 10;
    } else if(this.bus === "10kMilesPub"){
      this.publicTransportPoints = 6;
    } else if(this.bus === "1kMilesPub"){
      this.publicTransportPoints = 4;
    } else if(this.bus === "noPublicT"){
      this.publicTransportPoints = 0;
    }
  }
  flightTransportPoints(){
    if(this.plane === "short"){
      this.flightTransportPoints = 2;
    } else if (this.plane === "further"){
      this.flightTransportPoints = 6;
    } else if (this.plane === "far"){
      this.flightTransportPoints = 20;
    }
  }

  calculateTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePoints +
      this.foodSourcePoints +
      this.dishWasherCalc +
      this.washingMachineCalc +
      this.yearlyPurchasesPoints +
      this.wasteProducedPoints +
      this.personalCarPoints +
      this.publicTransportPoints +
      this.flightTransportPoints +
      this.recycle.recyclePoints;
  }
}

export { FP };

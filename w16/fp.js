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
    purchases
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
    this.houseHoldPoints();
    this.houseSizePoints();
    this.foodChoicePoints();
    this.foodSourcePoints();
    this.yearlyPurchasesPoints();
    this.dishWasherCalc();
    this.washingMachineCalc();
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

  calculateTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePoints +
      this.foodSourcePoints +
      this.dishWasherCalc +
      this.washingMachineCalc +
      this.yearlyPurchasesPoints;
  }
}

export { FP };

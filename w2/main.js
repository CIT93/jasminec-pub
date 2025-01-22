console.log("week 2 - carbon footprint");
// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint //
// Method 1

// 1. Count the members of your household.
const myHouseMembers = 8;
// 2. Consider the size of your home.
const myHouseSize = 2;
// 3. Evaluate your food choice.
const myFoodChoice = 16;
// 4. Examine your water consumption.
const myWaterConsumption = 3;
// 5. Determine how many household purchases you make each year.
const myPurchases = 2;
// 6. Consider how much waste you produce.
const myWasteProduced = 40;
// 7. Identify the amount of waste that you recycle.
const myWasteRecycled = 16;
// 8. Tally up your annual transportation scores.
const myTransport = 0;
// 9. Add up your points.
const myTotal = myHouseMembers + myHouseSize + myFoodChoice + myWaterConsumption + myPurchases + myWasteProduced + myWasteRecycled + myTransport;
// 10. Write JS to update the rendered html (index.html) with total footprint
const myHeading = document.querySelector("h2");
myHeading.textContent = "My total is " + myTotal;

function determineHouseHoldPts(numberInHousehold) {
    console.log("inside the function");
    if (numberInHousehold === 1) {
        carbonFpPoints = carbonFpPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonFpPoints = carbonFpPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFpPoints = carbonFpPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonFpPoints = carbonFpPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonFpPoints = carbonFpPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonFpPoints = carbonFpPoints + 4;
    } else if (numberInHousehold > 6) {
        carbonFpPoints = carbonFpPoints + 2;
    } else {
        console.log("no points updated");
    }
     console.log(`if the number of members of household you have is ${numberInHousehold} then you get ${carbonFpPoints} points.`)
}    
    let carbonFpPoints = 0;
// const numberInHousehold = 3;

// global scope

determineHouseHoldPts(3)
// determineHouseHoldPts(4)

function determineHouseSizePts(houseSize) {
    
    if (houseSize === "large") {
        carbonFpPoints = carbonFpPoints + 10;
    } else if (houseSize === "medium") {
        carbonFpPoints = carbonFpPoints + 7;
    } else if (houseSize === "small") {
        carbonFpPoints = carbonFpPoints + 4;
    } else if (houseSize === "apartment") {
        carbonFpPoints = carbonFpPoints + 2;
    }
    console.log(`if your house size is ${houseSize}, then your points is ${carbonFpPoints} in total.`)
}

determineHouseSizePts("apartment");

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
    console.log(`The number of members of household ${numberInHousehold} and what points you get ${carbonFpPoints}.`)
}

let carbonFpPoints = 0;
// const numberInHousehold = 3;



// global scope

determineHouseHoldPts(3)
determineHouseHoldPts(4)

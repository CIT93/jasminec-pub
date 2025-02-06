const cfpData = [];

console.log("top of file")
function determineHouseSizePts(size) {
    console.log("inside block scope");
    let houseSizePts = 0;
    if(size === "large") {
        houseSizePts = 10;
    } else if(size === "medium") {
        houseSizePts = 7;
    } else if(size === "small") {
        houseSizePts = 4;
    } else if(size === "apartment") {
        houseSizePts = 2;
    } else {
        
    }

return houseSizePts;
}

function determineHouseHoldPts(numberInHousehold) {
    console.log("inside block scope");
    let houseHoldPts = 0;
    if (numberInHousehold === 1) {
        houseHoldPts = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPts = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPts = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPts = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPts = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPts = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPts = 2;
    } else {
        
    }
    
     return houseHoldPts
}   

console.log("global scope");


function start(houseHoldMembers, houseSize) {
    const houseHoldPts = determineHouseHoldPts(houseHoldMembers);
    console.log(houseHoldPts)
    const houseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPts + houseSizePts;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPts, houseSizePts, total]);
}

function displayOutput() {
    
}

start(3, "apartment");
start(4, "large");
start(5, "medium");
start(2, "small");
start(3, "small");
start(5, "large");
start(4, "apartment");
start(2, "medium");
start(5, "apartment");

displayOutput()



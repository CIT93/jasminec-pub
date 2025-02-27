import { renderTb1 } from "./render.js";

const FORM = document.getElementById("form");
const cfpData = [];
const output = document.getElementById("output");

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function displayOutObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newP = document.createElement("p");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint is ${obj.cfpTotal}`;
  const newH3 = document.createElement("h3");
  newH3.textContent = `Based on Number in Household and Size of Home.`
  newP.textContent = `This number is based on the number of members in the home of ${obj.houseM} (score: ${obj.houseMPTS})`;
  newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS})`;
  output.appendChild(newH2);
  output.appendChild(newH3);
  output.appendChild(newP);
}

function start(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstname: firstName,
    lastname: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });

}


  FORM.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const householdm = parseInt(FORM.householdm.value);
    const houses = FORM.houses.value;
    start(householdm, houses, firstName, lastName);
    output.innerHTML = ("");
    //displayOutput();
    renderTb1(cfpData);
    FORM.reset();
  });
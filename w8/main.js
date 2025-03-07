import { renderTb1 } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const FORM = document.getElementById("form");
const cfpData = [];
const output = document.getElementById("output");

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
    renderTb1(cfpData);
    FORM.reset();
  });
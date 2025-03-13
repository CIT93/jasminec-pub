import { renderTb1 } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
const errorElement = document.getElementById("error")

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
    const messages = [];
    if (firstName === "" || firstName == null){
      messages.push("Please enter First name requirment.")
    }
    if (lastName === "" || lastName == null){
      messages.push("Please enter Last name requirment.")
    }
    const householdm = parseInt(FORM.householdm.value);
    const houses = FORM.houses.value;
    start(householdm, houses, firstName, lastName);
    saveLS(cfpData);
    renderTb1(cfpData);
    FORM.reset();
  });

  renderTb1(cfpData);

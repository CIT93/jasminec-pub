import { renderTb1 } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");

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
    const firstNameIsValid = firstNameEl.value !== '';
    const lastNameIsValid = lastNameEl.value !== '';
    const messages = [];
    
    if(firstNameIsValid && lastNameIsValid) {
      
    }

    const householdm = parseInt(FORM.householdm.value);
    const houses = FORM.houses.value;
    start(householdm, houses, firstName, lastName);
    saveLS(cfpData);
    renderTb1(cfpData);
    FORM.reset();
  });

  // renderTb1(cfpData);

  firstNameEl.addEventListener('blur', validateField);
  lastNameEl.addEventListener('blur', validateField);

  function validateField(event) {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);
    if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
    } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
    }
  }


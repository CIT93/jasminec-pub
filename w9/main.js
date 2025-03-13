import { renderTb1 } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const submitEl = document.getElementById("submitError");

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

    const firstName = FORM.firstName.value;
    const lastName = FORM.lastName.value;
    const firstNameIsValid = firstNameEl.value !== '';
    const lastNameIsValid = lastNameEl.value !== '';
    
    if(firstNameIsValid && lastNameIsValid) {
      submitEl.textContent = '';
      const householdm = parseInt(FORM.householdm.value);
      const houses = FORM.houses.value;
      start(householdm, houses, firstName, lastName);
      saveLS(cfpData);
      renderTb1(cfpData);
      FORM.reset();
    } else {
      submitEl.textContent = "Form requires full name.";

    }


  });

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

  firstNameEl.addEventListener('blur', validateField);
  lastNameEl.addEventListener('blur', validateField);

  renderTb1(cfpData);
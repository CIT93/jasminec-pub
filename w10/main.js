import { renderTb1 } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const start = function (houseHoldMembers, houseSize, firstName, lastName) {
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
};

renderTb1(cfpData);

const validateField = function (event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    start(
      parseInt(FORM.householdm.value),
      FORM.houses.value,
      FNAME.value,
      LNAME.value
    );
    saveLS(cfpData);
    renderTb1(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires full name.";
  }
});

// Arrow function
// const add2 = function (a = 10) {
//   return 2 + a;
// };

// const resault = add2();

//Spread argument
const add2 = function (...a) {
    return 2 + a[3];
  };
  
  const resault = add2(1, 2, 3, 4);

//IIFE

const a = 3; //declared

  (function(add2){
    console.log("inside IIFE");
    console.log(a);
  })(a);

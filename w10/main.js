import { renderTb1 } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
// Rest operator
const start = (...i) => {
  const houseHoldPTS = determineHouseHoldPts(i[0]);
  const houseSizePts = determineHouseSizePts(i[1]);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstname: i[2],
    lastname: i[3],
    houseM: i[0],
    houseS: i[1],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
};

renderTb1(cfpData);

const validateField = event => {
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

FORM.addEventListener("submit", e => {
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

// default
// const add2 = function (a = 10) {
//   return 2 + a;
// };

// const result = add2();

// Rest operator
// const add2 = function (...a) {
//     return 2 + a[3];
//   };
  
//   const result = add2(1, 2, 3, 4);


// Arrow function
const add2 = a => 2 + a; //One expression only

  
  const resault = add2(100);

//IIFE

const a = 3; //declared

  (function(add2){
    console.log("inside IIFE");
    console.log(a);
  })(a);

import { renderTb1 } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import {FP} from "./fp.js";


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
    const fpObj = new FP(
    FNAME.value,
    LNAME.value,
    parseInt(e.target.householdm.value),
    e.target.houses.value,
    e.target.foodc.value,
    e.target.foodsc.value,
    parseInt(e.target.waterc.value),
);
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTb1(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires full name.";
  }
});



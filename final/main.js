import { prodTbl } from "./render.js";
import { FORM, ATP, AH, SUBMIT } from "./global.js";
import { saveLS, proData } from "./storage.js";
import { PAP } from "./papC.js";

const validateField = (event) => {
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
  setTimeout(() => {
    fieldError.textContent = "";
  }, 3000);
};

ATP.addEventListener("blur", validateField);
AH.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  const activityType = FORM.activitytype.value;
  const activityHour = FORM.activityhour.value;

  output.innerHTML = "";
  if (ATP.value !== "" && parseInt(AH.value) !== 0) {
    SUBMIT.textContent = "";

    const papObjs = new PAP(activityType, parseInt(activityHour));
    proData.push(papObjs);
    saveLS(proData);
    prodTbl(proData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Enter Activity and Time before submission.";
  }
  setTimeout(() => {
    SUBMIT.textContent = "";
  }, 3000);
});

prodTbl(proData);

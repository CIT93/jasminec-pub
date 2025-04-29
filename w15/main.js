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
    parseInt(FORM.householdm.value),
    FORM.houses.value,
    FORM.foodc.value);
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTb1(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires full name.";
  }
});



// Async JS & Callback Functions vid code along

// Async example

// let shrimp
// function orderShrimp() {
//   console.log('Order shrimp')
//   setTimeout(() => {
//     shrimp = `🦐`
//     console.log(`${shrimp} is ready`)
//   }, 2000)

//   console.log('Shrimp was ordered')
// }
// orderShrimp()
// console.log('Call friend')
// console.log(`Eat ${shrimp}`)

// Callback

// the function is synchronus but what happens inside is async.
// function orderShrimp(callback) {
//   setTimeout(() => {
//     const shrimp = `🦐`
//     callback(shrimp)
//   }, 2000)
// }

// function shrimpReady(shrimp) {
//   console.log(`Eat the ${shrimp}`)
// }

// orderShrimp(shrimpReady)
// console.log(`Call friend`)

// window.addEventListener('click', callback)

// function callback() {
//   console.log('Clicked')
// }

// Callback Hell

// function thing1(callback) {
//   //Call Shrimp shop
//   callback()
// }
// function thing2(callback) {
//   //Order Shrimp shop
//   callback()
// }
// function thing3(callback) {
//   //Eat Shrimp shop
//   callback()
// }

// thing1(() => {
//   thing2(() =>{
//     thing3()
//   })
// })


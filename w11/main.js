import { renderTb1 } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import {FP} from "./fp.js";

// Rest operator
// const start = (...i) => {
//   const houseHoldPTS = determineHouseHoldPts(i[0]);
//   const houseSizePts = determineHouseSizePts(i[1]);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     firstname: i[2],
//     lastname: i[3],
//     houseM: i[0],
//     houseS: i[1],
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePts,
//     cfpTotal: total,
//   });
// };

const start = (firstName, lastName, houseHoldMembers, houseSize,) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
//   const foodChoicePts = foodChoicePts(foodChoice);
  const total = houseHoldPTS + houseSizePts + foodChoicePts;
  cfpData.push({
   firstname: firstName,
   lastname: lastName,
   houseM: houseHoldMembers,
   houseS: houseSize,
//    foodC: foodChoice,
//    foodCPTS: foodChoicePts,
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
    // start(
    //   FNAME.value,
    //   LNAME.value,
    //   parseInt(FORM.householdm.value),
    //   FORM.houses.value,

    // );
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
// const add2 = a => 2 + a; //One expression only

  
//   const resault = add2(100);

// //IIFE

// const a = 3; //declared

//   (function(add2){
//     console.log("inside IIFE");
//     console.log(a);
//   })(a);


// const me = {
//     name: "Jasmine",
//     hairColor: "Black",
//     location: "California",
//     sleepScore: 96,
//     introduce: function() {
//         console.log(this)
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location}.`)
//     }
// }

// const you = {
//     name: "Jane",
//     hairColor: "Brown",
//     location: "Home",
//     sleepScore: 56,
//     introduce: function() {
//         console.log(this)
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location}.`)
//     }
// }

// you.introduce();
// me.introduce();

// class Human {
//     constructor(name, hairColor, location, sleepScore){
//         this.name = name
//         this.hairColor = hairColor
//         this.location = location
//         this.sleepScore = sleepScore
//     }
//     introduce() {
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleep score of ${this.sleepScore}.`)
//     }
// }

// const jasmine = new Human("Jasmine", "Black", "California", 96);
// const jane = new Human("Jane", "Brown", "Home", 56);
// jasmine.introduce();
// jane.introduce();
// jasmine.hrv = 50;



const FORM = document.getElementById("form");
const output = document.getElementById("output");

// MY code
function fitSubmission(exerciseType, exerciseTime, numOfReps) {
  return new Promise((resolve, reject) => {
    if (!exerciseType || !exerciseTime || !numOfReps) {
      reject("Error: No exercise, time, or reps added.");
    } else {
      setTimeout(() => {
        resolve(`${exerciseType}`);
      }, 3000);
    }
  });
  
}

function onSuccess(data){
    const message = document.createElement("p");
    message.textContent = `Stop ${data}.`;
    output.appendChild(message);
    FORM.reset();    
}

function onError(errorCode) {
  const errorMsg = document.createElement("p");
  errorMsg.textContent = `${errorCode}`;
  output.appendChild(errorMsg);
  FORM.reset();
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const exerciseType = FORM.exerciseType.value;
  const numOfReps = FORM.numOfReps.value;
  const exerciseTime = FORM.exerciseTime.value;

  const message = document.createElement("p");
  message.textContent = `Start ${exerciseType} for ${exerciseTime} minute(s) < > Goal reps is ${numOfReps}.`;
  output.appendChild(message);

  fitSubmission(exerciseType, exerciseTime, numOfReps)
    .then(onSuccess)
    .catch(onError);
});










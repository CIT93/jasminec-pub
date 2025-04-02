const FORM = document.getElementById("form");
const output = document.getElementById("output");

// Rios code
// function updateDOM(message, el) {
//     const newEl = document.createElement(el)
//     newEl.textContent = message
//     output.appendChild(newEl)
// }

// const startWorkout = (exerciseType, numOfReps, exerciseTime, callback) => {
//     updateDOM(`Start ${exerciseType} <> Goal reps is ${numOfReps} <> Complete in ${exerciseTime} min!`, "p") // sync
//     setTimeout(()=>{
//         callback(`Stop ${exerciseType}`, "h1") // async
//     }, exerciseTime * 1000)
// }

// FORM.addEventListener('submit', e => {
//     e.preventDefault();
//     const exerciseType = e.target.exerciseType.value
//     const numOfReps = parseFloat(e.target.numOfReps.value)
//     const exerciseTime = parseFloat(e.target.exerciseTime.value)
//     startWorkout(exerciseType, numOfReps, exerciseTime, updateDOM)
//     FORM.reset()
// })

// MY code
function fitSubmission() {
  const heading = document.createElement("h2");
  heading.textContent = "Submit to start!";
  output.appendChild(heading);

  FORM.addEventListener("submit", function (e) {
    e.preventDefault();

    const exerciseType = FORM.exerciseType.value;
    const numOfReps = FORM.numOfReps.value;
    const exerciseTime = FORM.exerciseTime.value;
    
    const message = document.createElement("p");
    message.textContent = `Start ${exerciseType} for ${exerciseTime} minute(s) < > Goal reps is ${numOfReps}.`;
    output.appendChild(message);

    setTimeout(() => {
      const message = document.createElement("p");
      message.textContent = `Stop ${exerciseType}.`;
      output.appendChild(message);
    }, 2000);
  });
}

fitSubmission();





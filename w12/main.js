const FORM = document.getElementById("form");
const output = document.getElementById("output");

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


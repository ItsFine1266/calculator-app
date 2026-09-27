const display = document.querySelector("#display");

function addToDisplay(value) {
  if (display.value === "Error") {
    clearDisplay();
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const expression = display.value;
  let result;

  try {
    result = eval(expression);
  } catch (e) {
    result = "Error";
  }

  display.value = result;
}

const buttons = document.querySelectorAll(".input");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    addToDisplay(button.textContent);
  });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => clearDisplay());

const solveBtn = document.querySelector(".calculate");
solveBtn.addEventListener("click", () => calculate());
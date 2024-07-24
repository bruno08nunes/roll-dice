// Imports
import uncheckRadio from "./modules/uncheckRadio.js";
import submitForm from "./modules/submitForm.js";
import subtractInput from "./modules/subtractInput.js";
import sumInput from "./modules/sumInput.js";
import toggleForm from "./modules/toggleForm.js";

// Unchecks Radios
const checks = document.querySelectorAll("input[name=selected]");
const abortControllers = new Map();
checks.forEach((input) => uncheckRadio(input, abortControllers));

// Submit Form
const formDices = document.querySelector(".form-dices");
formDices.addEventListener("submit", submitForm);

// Increase and Decrease Inputs
const subtractionButtons = document.querySelectorAll(".subtraction-button");
subtractionButtons.forEach(button => {
    button.addEventListener("click", subtractInput);
});

const sumButtons = document.querySelectorAll(".sum-button");
sumButtons.forEach(button => {
    button.addEventListener("click", sumInput);
});

// Open Config Form
const openButton = document.querySelector(".button-open");
const closeButton = document.querySelector(".button-close");
toggleForm(openButton, closeButton)
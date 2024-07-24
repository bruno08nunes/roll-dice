import rollDice from "./modules/rollDice.js";
import createDice from "./modules/createDice.js";
import createDiceElement from "./modules/createDiceElement.js";

const checks = document.querySelectorAll("input[name=selected]");
const abortControllers = new Map();
checks.forEach((input) => {
    input.addEventListener("change", (e) => {
        for (let controller of abortControllers.values()) {
            controller.abort();
        }
        const controller = new AbortController();
        abortControllers.set(e.target, controller);
        e.target.addEventListener(
            "click",
            () => {
                e.target.checked = false;
                controller.abort()
            },
            {
                signal: controller.signal,
            }
        );
    });
});

const formDices = document.querySelector(".form-dices");
formDices.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formDices);
    const diceType = Number(formData.get("dices").slice(1));
    const dice = createDice(diceType);

    const amount = Number(formData.get("amount"));
    const numbers = rollDice(dice, amount);
    let filteredNumber;
    const option = formData.get("selected");

    if (option === "sum") {
        filteredNumber = numbers.reduce((prev, element) => prev + element);
    }

    if (option === "max") {
        filteredNumber = Math.max(...numbers);
    }

    if (option === "min") {
        filteredNumber = Math.min(...numbers);
    }

    if (option) {
        const bonus = Number(formData.get("bonus"));
        const desvantagens = Number(formData.get("desvantagens"));
        filteredNumber += bonus;
        filteredNumber -= desvantagens;
    }

    createDiceElement(filteredNumber === undefined ? numbers : [filteredNumber]);
})
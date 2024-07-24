import rollDice from "./rollDice.js";
import createDice from "./createDice.js";
import createDiceElements from "./createDiceElements.js";

export default function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

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

    const values = filteredNumber === undefined ? numbers : [filteredNumber];

    const sectionOptions = document.querySelector(".section-options");
    if (sectionOptions.classList.contains("open")) {
        sectionOptions.classList.remove("open");
    }

    createDiceElements(values, diceType);
}
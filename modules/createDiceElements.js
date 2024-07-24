const filterDiceType = (diceType) => (diceType === 100) ? 10 : diceType;

const createDiceElement = (diceType, value) => {
    const dice = document.createElement("div");
    dice.classList.add("dice");

    const img = document.createElement("img");
    img.classList.add("img-dice");
    img.src = `assets/dices/d${diceType}.png`;

    const pValue = document.createElement("p");
    pValue.classList.add("dice-value");
    pValue.textContent = value;

    dice.append(img, pValue);
    return dice;
}

export default function createDiceElements(numbers, diceType) {
    const diceSection = document.querySelector(".section-dice");
    diceSection.innerHTML = "";

    diceType = filterDiceType(diceType);

    for (let num of numbers) {
        const dice = createDiceElement(diceType, num);
        diceSection.append(dice);
    }
}
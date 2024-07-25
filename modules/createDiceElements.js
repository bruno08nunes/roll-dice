const filterDiceType = (diceType) => (diceType === 100) ? 10 : diceType;

const filterBonus = (bonus) => bonus === 0 ? "" : Math.sign(bonus) > 0 ? `+${bonus}` : bonus

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

const createAmountValueDiv = ({amount, type, bonus}) => {
    bonus = filterBonus(bonus);

    const div = document.createElement("div");
    div.classList.add("dice-value-amount");
    div.textContent = `${amount}d${type}${bonus}`;
    return div;
}

export default function createDiceElements({numbers, diceType, bonus, amount}) {
    const diceSection = document.querySelector(".section-dice");
    diceSection.innerHTML = "";

    const amountDiv = createAmountValueDiv({amount, type: diceType, bonus});

    diceType = filterDiceType(diceType);
    
    for (let num of numbers) {
        const dice = createDiceElement(diceType, num);
        diceSection.append(dice);
    }
    
    diceSection.append(amountDiv);
}
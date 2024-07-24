export default function createDiceElement(numbers) {
    const diceSection = document.querySelector(".section-dice");
    diceSection.innerHTML = "";

    for (let num of numbers) {
        const dice = document.createElement("div");
        dice.classList.add("dice");

        const img = document.createElement("img");
        img.classList.add("img-dice");
        img.src = "assets/dice.png";

        const pValue = document.createElement("p");
        pValue.classList.add("dice-value");
        pValue.textContent = num;

        dice.append(img, pValue);
        diceSection.append(dice);
    }
}
export default function rollDice(dice, amount) {
    const values = [];
    for (let number of dice.take(amount)) {
        values.push(number);
    }
    return values;
}
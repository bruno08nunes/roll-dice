export default function* createDice(n) {
    while (true) {
        yield Math.floor(Math.random() * n) + 1;
    }
}
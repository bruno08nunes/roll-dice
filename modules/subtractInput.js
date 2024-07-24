export default function subtractInput(e) {
    const inputId = e.target.dataset.input;
    const input = document.querySelector("#" + inputId);
    const value = Number(input.value);
    const min = Number(input.min || -Infinity);
    if (value > min) {
        input.value--;
    }
}
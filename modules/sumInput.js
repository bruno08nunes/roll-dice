export default function sumInput(e) {
    const inputId = e.target.dataset.input;
    const input = document.querySelector("#" + inputId);
    const value = Number(input.value);
    const max = Number(input.max || Infinity);
    if (value < max) {
        input.value++;
    }
}
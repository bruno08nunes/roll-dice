export default function(openButton, closeButton) {
    openButton.addEventListener("click", () => {
        const sectionOptions = document.querySelector(".section-options");
        sectionOptions.classList.add("open");
    })
    closeButton.addEventListener("click", () => {
        const sectionOptions = document.querySelector(".section-options");
        sectionOptions.classList.remove("open");
    })
}
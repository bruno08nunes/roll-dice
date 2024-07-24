export default function uncheckRadio(input, abortControllers) {
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
}
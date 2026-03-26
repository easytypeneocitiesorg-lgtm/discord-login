// Track when the page loads
const formLoadTime = Date.now();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        // If submitted too fast, block it
        if (Date.now() - formLoadTime < 1500) {
            e.preventDefault();
            return;
        }
    });
});

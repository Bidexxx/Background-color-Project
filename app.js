// Color options
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#f1f5f8", "#222", "#09c", "#ff0", "#0f0", "#f00"];
const btn = document.getElementById("btn");
const colorValue = document.getElementById("colorValue");
const resetBtn = document.getElementById("resetBtn");
const toast = document.getElementById("toast");

const DEFAULT_COLOR = "#f1f5f8";

// Change background color and update text
const setBackgroundColor = (newColor) => {
    document.body.style.backgroundColor = newColor;
    colorValue.textContent = newColor;
    colorValue.setAttribute("aria-label", `Current background color is ${newColor}`);
};

// Show toast notification
const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 1200);
};

// Generate random number
const getRandomNumber = () => Math.floor(Math.random() * colors.length);

// Button: Change color
btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    setBackgroundColor(colors[randomNumber]);
    showToast("Color changed!");
});

// Button: Reset color
resetBtn.addEventListener("click", () => {
    setBackgroundColor(DEFAULT_COLOR);
    showToast("Reset to default!");
});

// Click or keyboard: Copy color value
colorValue.addEventListener("click", () => {
    navigator.clipboard.writeText(colorValue.textContent);
    showToast("Copied!");
});
colorValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        navigator.clipboard.writeText(colorValue.textContent);
        showToast("Copied!");
    }
});

// Accessibility: Focus style
colorValue.addEventListener("focus", () => {
    colorValue.style.outline = "2px solid var(--clr-primary-5)";
});
colorValue.addEventListener("blur", () => {
    colorValue.style.outline = "none";
});

// Initialize default color
setBackgroundColor(DEFAULT_COLOR);
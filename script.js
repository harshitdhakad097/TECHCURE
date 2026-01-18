/* =====================================================
   TECHCURE - MAIN JAVASCRIPT FILE
   Purpose: Interactivity + Theme Switch
   Beginner friendly with explanations
===================================================== */

/* -----------------------------
   THEME TOGGLE (LIGHT / DARK)
------------------------------ */

// Select the theme toggle button from HTML
const themeToggle = document.getElementById("themeToggle");

// Check if user already selected a theme before
// localStorage helps browser remember settings
const savedTheme = localStorage.getItem("theme");

// If theme was saved earlier, apply it
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️"; // Sun icon for light mode
}

// When user clicks the theme button
themeToggle.addEventListener("click", () => {

    // Toggle dark class on body
    document.body.classList.toggle("dark");

    // Check current theme and save it
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

/* -----------------------------
   FUTURE JAVSASCRIPT IDEAS
   (You can add later safely)
------------------------------ */

// Example (commented for learning):
// - Contact form validation
// - Mobile menu toggle
// - Page animations


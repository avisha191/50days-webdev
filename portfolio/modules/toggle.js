// toggle.js
export function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  let isDark = false;

  toggleBtn.addEventListener("click", () => {
    isDark = !isDark;

    if (isDark) {
      document.body.classList.add("dark");
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      document.body.classList.remove("dark");
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
}


let count = 0;

const countValue = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countValue.textContent = count;
});
//toggle
const toggleBtn = document.getElementById("theme-toggle");
let isDark = false;

toggleBtn.addEventListener("click", () => {
  isDark = !isDark; // flip state

  if (isDark) {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
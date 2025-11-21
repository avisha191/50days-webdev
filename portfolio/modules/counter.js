// counter.js
let count = 0;

export function initCounter() {
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
}

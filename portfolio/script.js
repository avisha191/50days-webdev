import { getWeather } from "./modules/weather.js";
import { initCounter } from "./modules/counter.js";
import { initThemeToggle } from "./modules/toggle.js";

// Initialize features
initCounter();
initThemeToggle();
document.getElementById("checkWeather").addEventListener("click", getWeather);
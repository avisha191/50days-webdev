//weather
// ---------------- WEATHER WIDGET ----------------
const apiKey = "https://api.open-meteo.com/v1/forecast";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultEl = document.getElementById("weatherResult");

  if (!city) {
    resultEl.textContent = "⚠ Please enter a city name";
    resultEl.style.color = "#ff4e78";
    return;
  }

  resultEl.textContent = "⏳ Fetching weather...";

  try {
    // Step 1: Convert city name -> coordinates
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      resultEl.textContent = "❌ City not found";
      resultEl.style.color = "#ff4e78";
      return;
    }

    const { latitude, longitude } = geoData.results[0];

    // Step 2: Fetch weather using coordinates
    const weatherRes = await fetch(
      `${apiKey}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const condition = weatherData.current_weather.weathercode;

    // 🔥 Map condition code → text + emoji
    const weatherConditions = {
      0: "☀ Clear Sky",
      1: "🌤 Mainly Clear",
      2: "⛅ Partly Cloudy",
      3: "☁ Overcast",
      45: "🌫 Fog",
      48: "🌫 Depositing Rime Fog",
      51: "🌦 Light Drizzle",
      53: "🌦 Moderate Drizzle",
      55: "🌧 Dense Drizzle",
      61: "🌦 Light Rain",
      63: "🌧 Moderate Rain",
      65: "🌧 Heavy Rain",
      71: "🌨 Light Snow",
      73: "❄ Moderate Snow",
      75: "❄ Heavy Snow",
      80: "⛈ Rain Showers",
      95: "🌩 Thunderstorm"
    };
    const conditionText = weatherConditions[condition] || "🌍 Weather Unavailable";

    resultEl.textContent = `🌡 Temperature: ${temp}°C — ${conditionText}`;
    resultEl.style.color = "#555";
  } catch (error) {
    console.error("Weather error:", error);
    resultEl.textContent = "⚠ Something went wrong. Try again later.";
    resultEl.style.color = "#ff4e78";
  }
}
export { getWeather };
# 🌤️ Weather Vision

A modern weather application built with **React**, **TypeScript**, and **tsParticles** for stunning animated weather effects.  
It detects your current city automatically (in development) and provides real-time weather conditions with smooth transitions and a clean UI.

---

## 🚀 Features

- 🌍 **Auto-detect current location** to show local weather (in development)
- ⛅ **Animated weather backgrounds** using `@tsparticles/react`  
- 🌀 **Smooth transitions** between different weather types  
- 🧭 5-day forecast panel with responsive design (in development)
- 🪄 Built-in cache system to avoid unnecessary API calls  
- 📱 Fully responsive — works on mobile and desktop

---

## 🧰 Tech Stack

- ⚛️ **React** + **Vite**
- 🪄 **TypeScript**
- ✨ **tsParticles** — weather animations
- 💾 **Custom hooks** for caching and data fetching
- 🌐 OpenWeatherMap API

---

## 🧭 Weather Types

The app supports multiple weather states with custom effects:

- `Thunderstorm`
- `Drizzle`
- `Rain`
- `Snow`
- `Atmosphere`
- `Clear`
- `Clouds`
- `Haze`

---

## 📁 Project Structure
src/<br/>
├─ assets/<br/>
├─ components/<br/>
│ ├─ WeatherParticles.tsx<br/>
│ ├─ ForecastPanel.tsx<br/>
│ └─ WeatherCard.tsx<br/>
├─ hooks/<br/>
│ └─ useLocalStorage.ts<br/>
├─ types/<br/>
│ └─ weather.ts<br/>
├─ http/<br/>
│ └─ services.ts<br/>
│ └─ instance.ts<br/>
├─ pages/<br/>
│ └─ Home.ts<br/>
│ └─ Presets.ts<br/>
│ └─ NotFound.ts<br/>
├─ utils/<br/>
│ └─ handleWeatherCache.ts<br/>
├─ weather-presets.ts<br/>
├─ nav.ts<br/>
└─ App.tsx

## 🧪 Environment Variables

Create a `.env` file in the root directory with the following content:
VITE_WEATHER_API_KEY=your_openweather_api_key<br/>
VITE_API_BASE_URL=https://api.openweathermap.org


## 🧭 How to Run

```bash
# 1. Clone the repository
git clone https://github.com/polrmn/weather-app.git

# 2. Install dependencies
npm install

# 3. Add your .env file

# 4. Run the app
npm run dev
Then open 👉 http://localhost:5173




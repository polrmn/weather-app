import axios from "axios";

const openWeatherMapInstance = axios.create({
    baseURL: import.meta.env.VITE_OPEN_WEATHER_MAP_API_URL
})

export default openWeatherMapInstance
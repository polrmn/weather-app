import axios from "axios";

const openWeatherMapInstance = axios.create({
    baseURL: import.meta.env.OPEN_WEATHER_MAP_API_UR
})

export default openWeatherMapInstance
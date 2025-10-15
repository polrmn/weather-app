import openWeatherMapInstance from "./instance";

const appid = import.meta.env.OPEN_WEATHER_MAP_API_KEY;

const getWeatherByCoords = async (lat: number, lon: number) => {
  try {
    const { data } = await openWeatherMapInstance.get(
      `/weather?lat=${lat}&lon=${lon}&appid=${appid}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const getWeatherByCityName = async (cityName: string) => {
  try {
    const { data } = await openWeatherMapInstance.get(
      `/weather?q=${cityName}&appid=${appid}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const getWeatherForecastByCoords = async (lat: number, lon: number) => {
  try {
    const { data } = await openWeatherMapInstance.get(
      `/forecast?lat=${lat}&lon=${lon}&appid=${appid}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const getWeatherForecastByCityName = async (cityName: string) => {
  try {
    const { data } = await openWeatherMapInstance.get(
      `/forecast?q=${cityName}&appid=${appid}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
    getWeatherByCoords,
    getWeatherByCityName,
    getWeatherForecastByCoords,
    getWeatherForecastByCityName
}

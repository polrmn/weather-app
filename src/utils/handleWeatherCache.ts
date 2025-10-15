import type { WeatherAPIResponse } from "@/types/weather";

const STORAGE_KEY_PREFIX = "CITY_WEATHER_CACHE";
const CACHE_DURATION = 10 * 60 * 1000;

export const handleWeatherCache = (cityName: string) => {
  const storageKey = `${STORAGE_KEY_PREFIX}_${cityName}`;
  const cachedWeather = localStorage.getItem(storageKey);

  const setCache = (data: WeatherAPIResponse) => {
    const timestamp = Date.now();
    localStorage.setItem(storageKey, JSON.stringify({ timestamp, data }));
  };

  const noValidCache = {
    data: null,
    setCache,
  };

  if (!cachedWeather) {
    return noValidCache;
  }

  const parsedCachedWeather = JSON.parse(cachedWeather) as {
    timestamp: number;
    data: WeatherAPIResponse;
  };

  const isCacheFresh =
    parsedCachedWeather.timestamp - Date.now() < CACHE_DURATION;

  if (!isCacheFresh) {
    localStorage.removeItem(storageKey);
    return noValidCache;
  }

  return {
    data: parsedCachedWeather.data,
  };
};

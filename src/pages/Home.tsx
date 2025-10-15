import { useState } from "react";
import { Center, Container } from "@chakra-ui/react";
import { handleWeatherCache } from "@/utils/handleWeatherCache";
import WeatherPatricles from "@/components/WeatherPatricles";
import services from "@/http/services";
import WeatherForm from "@/components/WeatherForm";
import WeatherCard from "@/components/WeatherCard";

const Home = () => {
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async (city: string) => {
    const cityName = city.toLowerCase().trim();
    const cached = handleWeatherCache(cityName);

    if (cached.data) {
      setWeather(cached.data);
      return;
    }

    try {
      const data = await services.getWeatherByCityName(cityName);
      setWeather(data);
      cached.setCache(data);
    } catch (err) {
      alert("can not found the weather. try again later!");
    }
  };

  return (
    <>
      <WeatherPatricles weatherType={weather?.weather[0]?.main} />
      <Container maxW="container.md" py={8}>
        <WeatherForm onSearch={handleSearch} />
        {weather && (
          <Center mt={4}>
            <WeatherCard
              city={weather.name}
              temp={weather.main.temp}
              weather={weather.weather[0].main}
              description={weather.weather[0].description}
              humidity={weather.main.humidity}
              wind={weather.wind.speed}
              iconCode={weather.weather[0].icon}
            />
          </Center>
        )}
      </Container>
    </>
  );
};

export default Home;

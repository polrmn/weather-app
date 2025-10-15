import type { WeatherType } from "@/types/weather";
import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";

type Props = {
  city: string;
  temp: number;
  weather?: WeatherType | "Default";
  description: string;
  humidity: number;
  wind: number;
  iconCode: string;
};

const WeatherCard = ({
  city,
  temp,
  weather = "Default",
  description,
  humidity,
  wind,
  iconCode,
}: Props) => {
  const bgColorMap: Record<WeatherType | "Default", string> = {
    Clear: "rgba(250, 240, 137, 0.5)",
    Rain: "rgba(100, 181, 246, 0.5)",
    Snow: "rgba(245, 245, 245, 0.5)",
    Clouds: "rgba(200, 200, 200, 0.5)",
    Drizzle: "rgba(187, 222, 251, 0.5)",
    Thunderstorm: "rgba(149, 117, 205, 0.5)",
    Atmosphere: "rgba(224, 224, 224, 0.5)",
    Haze: "rgba(220, 220, 220, 0.5)",
    Default: "rgba(240, 240, 240, 0.5)",
  };

  const bgColor = bgColorMap[weather];

  const lightBackgrounds = [
    "Clear",
    "Snow",
    "Clouds",
    "Drizzle",
    "Atmosphere",
    "Default",
    "Haze",
  ];
  const textColor = lightBackgrounds.includes(weather) ? "gray.800" : "white";

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="md"
      shadow="md"
      textAlign="center"
      color={textColor}
      backdropFilter="blur(0.5rem)"
      minWidth={320}
    >
      <VStack gap={2}>
        <Stack gap={2} flexDirection="row" alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            {city}
          </Text>
          <Image
            src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
            h={16}
          />
        </Stack>
        <Text fontSize="3xl">{temp.toFixed(1)}°C</Text>
        <Text fontSize="lg">
          {weather} - {description}
        </Text>
        <Text>Humidity: {humidity}%</Text>
        <Text>Wind: {wind} m/s</Text>
      </VStack>
    </Box>
  );
};

export default WeatherCard;

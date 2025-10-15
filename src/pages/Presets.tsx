import { useState } from "react";
import { SimpleGrid, Box, Text, VStack } from "@chakra-ui/react";
import type { WeatherType } from "../types/weather";
import WeatherParticles from "../components/WeatherPatricles";

const weatherTypes: WeatherType[] = [
  "Thunderstorm",
  "Drizzle",
  "Rain",
  "Snow",
  "Atmosphere",
  "Clear",
  "Clouds",
  "Haze",
];

const Presets = () => {
  const [weatherType, setWeatherType] = useState<WeatherType>();

  return (
    <>
      <WeatherParticles weatherType={weatherType} />
      <SimpleGrid columns={{ base: 2, sm: 2, md: 4, lg: 6, xl: 8 }} gap={4} p={4}>
        {weatherTypes.map((type) => (
          <Box
            key={type}
            position="relative"
            borderRadius="md"
            overflow="hidden"
            aspectRatio={1}
            shadow={type === weatherType ? "sm" : "lg"}
            onClick={() => setWeatherType(type)}
            cursor="pointer"
          >
            <VStack
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              justify="center"
              align="center"
              bg="rgba(0,0,0,0.3)"
              color="white"
              textAlign="center"
              p={4}
            >
              <Text fontSize="xl" fontWeight="bold">
                {type}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Presets;

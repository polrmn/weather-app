import { useState } from "react";
import { Input, Button, HStack, Text } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

type Props = {
  onSearch: (city: string) => void;
};

const WeatherForm = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) onSearch(city.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) onSearch(city.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mb={4}>
        <Input
          placeholder="City name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          bg="rgba(0,0,0,0.05)"
        />
        <Button colorScheme="teal" onClick={handleSearch}>
          <Text display={{ base: "none", md: "inline" }}>Get weather</Text>
          <CiSearch />
        </Button>
      </HStack>
    </form>
  );
};

export default WeatherForm;

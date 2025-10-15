import { Center, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";

const NotFound = () => {
  return (
    <Center py={16}>
      <Stack alignItems="center">
        <Heading as="h1">Page not found</Heading>
        <ChakraLink asChild>
          <Link to="/">
            <HiHome />
            Home
          </Link>
        </ChakraLink>
      </Stack>
    </Center>
  );
};

export default NotFound;

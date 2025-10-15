import navLinks from "@/nav";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="rgba(30, 58, 138, 0.7)" px={6} py={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link to="/">
            <Heading>Weather app</Heading>
          </Link>
        </Box>

        <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              colorScheme={location.pathname === link.path ? "teal" : "blue"}
              variant={location.pathname === link.path ? "solid" : "ghost"}
            >
              <Link to={link.path}>{link.name}</Link>
            </Button>
          ))}
        </HStack>

        <IconButton
          size="md"
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={open ? onClose : onOpen}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </IconButton>
      </Flex>

      {open && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" gap={2}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                colorScheme={location.pathname === link.path ? "teal" : "blue"}
                variant={location.pathname === link.path ? "solid" : "ghost"}
                onClick={onClose}
              >
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;

import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" px={6} py={2} boxShadow="lg">
      <Flex alignItems="center" justifyContent="space-between">
        <Image src="/src/assets/logo.png" alt="Logo" h={6} />
        <Link href="https://github.com/polrmn" target="_blank" rel="noopener noreferer">
          <FaGithub />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;

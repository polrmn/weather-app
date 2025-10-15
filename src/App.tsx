import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./components/Router";

const App = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex as="main" flex="1" direction="column">
        <Router />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default App;

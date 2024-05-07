import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import ArticlesPage from "./Components/ArticlesPage";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;

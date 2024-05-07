import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import ArticlesPage from "./Components/ArticlesPage";
import theme from "./theme";
import ArticlePage from "./Components/ArticlePage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;

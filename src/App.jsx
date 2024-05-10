import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import ArticlesPage from "./Components/ArticlesPage";
import theme from "./theme";
import ArticlePage from "./Components/ArticlePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LOGGED_IN_USER = {
  username: "grumpy19",
};

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
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;

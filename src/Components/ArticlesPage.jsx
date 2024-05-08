import { useEffect, useState } from "react";
import Articles from "./Articles";
import { getArticles } from "../api/articles";
import { Spinner } from "@chakra-ui/react";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((result) => {
      setIsLoading(false);
      setArticles(result);
    });
  }, []);

  return isLoading ? <Spinner /> : <Articles articles={articles} />;
}
export default ArticlesPage;

import { useEffect, useState } from "react";
import axios from "axios";
import Articles from "./Articles";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://news-api-eben.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
      });
  }, []);

  return <Articles articles={articles} />;
}
export default ArticlesPage;

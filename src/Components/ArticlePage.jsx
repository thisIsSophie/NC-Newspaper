import { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const [article, setArticle] = useState(undefined);

  let { article_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://news-api-eben.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
      });
  }, []);
  return article ? <Article article={article} /> : null;
}

export default ArticlePage;

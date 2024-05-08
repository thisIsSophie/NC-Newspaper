import { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import { useParams } from "react-router-dom";
import { Button, Link, VStack } from "@chakra-ui/react";

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
  return (
    <VStack>
      {article ? <Article article={article} /> : null}
      <Button onClick={() => (window.location.href = "/")}>Back</Button>
    </VStack>
  );
}

export default ArticlePage;

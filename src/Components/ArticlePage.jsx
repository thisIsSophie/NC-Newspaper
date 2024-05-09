import { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import { useParams } from "react-router-dom";
import { Button, VStack } from "@chakra-ui/react";
import Comments from "./Comments";
import Votes from "./Votes";
import { patchArticle } from "../api/articles";

function ArticlePage() {
  const [article, setArticle] = useState(undefined);
  const [err, setErr] = useState(null);

  let { article_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://news-api-eben.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
      });
  }, [article_id]);

  const handleVote = (isPositive) => {
    const newVotes = isPositive ? article.votes + 1 : article.votes - 1;
    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: newVotes,
    }));

    setErr(null);

    patchArticle(article_id, {
      inc_votes: isPositive ? 1 : -1,
    }).catch((err) => {
      setErr("Something went wrong, please try again.");
      setArticle((currentArticle) => ({
        ...currentArticle,
        votes: isPositive ? currentArticle.votes - 1 : currentArticle.votes + 1,
      }));
    });
  };

  return (
    <VStack>
      {article ? (
        <>
          <Article article={article} />
          <Votes votes={article.votes} handleVote={handleVote} />
          <Comments article_id={article.article_id} />
        </>
      ) : null}
      <Button onClick={() => (window.location.href = "/")}>Back</Button>
    </VStack>
  );
}

export default ArticlePage;

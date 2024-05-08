import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../api/comments";
import { Text, VStack } from "@chakra-ui/react";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <VStack spacing={3} p={4}>
      <Text fontSize="xl" fontWeight="bold" align="center">
        Comments
      </Text>
      {comments.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </VStack>
  );
}

export default Comments;

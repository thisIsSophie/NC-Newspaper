import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../api/comments";
import { Text, VStack } from "@chakra-ui/react";
import AddComment from "./AddComment";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((result) => {
      setComments(result);
    });
  }, [article_id]);

  const handleComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <VStack spacing={3} p={4}>
      <Text fontSize="xl" fontWeight="bold" align="center">
        Comments
      </Text>
      <AddComment handleComment={handleComment} article_id={article_id} />
      {comments.map((comment, index) => {
        return <CommentCard key={index} comment={comment} />;
      })}
    </VStack>
  );
}

export default Comments;

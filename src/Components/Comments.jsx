import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../api/comments";
import { Text, VStack } from "@chakra-ui/react";
import AddComment from "./AddComment";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsSubmitting(true);
    getComments(article_id)
      .then((result) => {
        setComments(result);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }, [article_id]);

  const handleComment = (newComment) => {
    setComments([newComment, ...comments]);
  };
  const handleCommentDeleted = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== commentId)
    );
  };
  return (
    <VStack spacing={3} p={4}>
      <Text fontSize="xl" fontWeight="bold" align="center">
        Comments
      </Text>
      <AddComment handleComment={handleComment} article_id={article_id} />
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            handleCommentDeleted={handleCommentDeleted}
          />
        );
      })}
    </VStack>
  );
}

export default Comments;

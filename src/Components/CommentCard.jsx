import { Container, IconButton, Text } from "@chakra-ui/react";
import { deleteComment } from "../api/comments";
import { toast } from "react-toastify";
import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { LOGGED_IN_USER } from "../App";

function CommentCard({ comment, handleCommentDeleted }) {
  const [deleting, setDeleting] = useState(false);

  function handleDelete() {
    setDeleting(true);

    deleteComment(comment.comment_id)
      .then(() => {
        handleCommentDeleted(comment.comment_id);
        toast.success("Your comment has been deleted");
      })
      .catch(() => {
        toast.error("Error deleting comment");
      })
      .finally(() => {
        setDeleting(false);
      });
  }

  return (
    <Container maxW="70%" boxShadow="md">
      <Text fontSize="md" lineHeight="normal">
        {comment.body}
      </Text>
      <Text fontSize="sm" fontWeight="bold">
        {comment.author}
      </Text>
      {LOGGED_IN_USER.username === comment.author && (
        <IconButton
          aria-label="delete"
          icon={<DeleteIcon />}
          onClick={handleDelete}
          isLoading={deleting}
          disabled={deleting}
        ></IconButton>
      )}
    </Container>
  );
}

export default CommentCard;

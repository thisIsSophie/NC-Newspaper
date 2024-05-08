import { Container, Text } from "@chakra-ui/react";

function CommentCard({ comment }) {
  return (
    <Container maxW="70%" boxShadow="md">
      <Text fontSize="md" lineHeight="normal">
        {comment.body}
      </Text>
      <Text fontSize="sm" fontWeight="bold">
        {comment.author}
      </Text>
    </Container>
  );
}

export default CommentCard;

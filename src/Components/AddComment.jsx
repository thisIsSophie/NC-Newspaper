import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { postComment } from "../api/comments";

function AddComment({ handleComment, article_id }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  const [usernameError, setUsernameError] = useState(undefined);
  const [bodyError, setBodyError] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) setUsernameError("Username is required");
    if (!body) setBodyError("Comment is required");

    if (!username || !body) return;

    postComment(article_id, { username, body })
      .then((result) => {
        toast.success("Comment posted successfully!");
        handleComment(result);
        setUsername("");
        setBody("");
        setUsernameError(undefined);
        setBodyError(undefined);
      })
      .catch(() => {
        const errorMessage = "User does not exist";
        setUsernameError(errorMessage);
      });
  };

  return (
    <FormControl isInvalid={usernameError || bodyError} width={600}>
      <VStack>
        <Input
          placeholder="Your username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
            setUsernameError(undefined);
          }}
        />
        {usernameError && <FormErrorMessage>{usernameError}</FormErrorMessage>}

        <Input
          placeholder="Your comment"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
            setBodyError(undefined);
          }}
        />
        {bodyError && <FormErrorMessage>{bodyError}</FormErrorMessage>}
        <Button type="submit" onClick={handleSubmit}>
          Add Comment
        </Button>
      </VStack>
    </FormControl>
  );
}

export default AddComment;

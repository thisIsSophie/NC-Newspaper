import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

function AddComment({ handleComment, error }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isBodyError, setIsBodyError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) setIsUsernameError(true);
    if (!body) setIsBodyError(true);

    if (!username || !body) return;

    handleComment({ username, body });
    setUsername("");
    setBody("");
    setIsUsernameError(false);
    setIsBodyError(false);
  };

  return (
    <FormControl isInvalid={isUsernameError || isBodyError} width={600}>
      <VStack>
        <Input
          placeholder="Your username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
            setIsUsernameError(false);
          }}
        />
        {isUsernameError && (
          <FormErrorMessage>Username is required</FormErrorMessage>
        )}
        {error && <Text color={"red"}>{error}</Text>}

        <Input
          placeholder="Your comment"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
            setIsBodyError(false);
          }}
        />
        {isBodyError && (
          <FormErrorMessage>Comment is required</FormErrorMessage>
        )}
        <Button type="submit" onClick={handleSubmit}>
          Add Comment
        </Button>
      </VStack>
    </FormControl>
  );
}

export default AddComment;

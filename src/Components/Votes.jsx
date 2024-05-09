import { HStack, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

function Votes({ votes, handleVote }) {
  return (
    <HStack>
      <IconButton
        aria-label="upvote"
        icon={<AddIcon />}
        onClick={() => handleVote(true)}
      ></IconButton>
      <span>{votes}</span>
      <IconButton
        aria-label="downvote"
        icon={<MinusIcon />}
        onClick={() => handleVote(false)}
      ></IconButton>
    </HStack>
  );
}

export default Votes;

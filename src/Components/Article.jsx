import React from "react";
import { Text, Image, Tag, VStack, Container } from "@chakra-ui/react";

function Article({ article }) {
  return (
    <Container maxW="70%">
      <VStack spacing={3} p={4}>
        <Text fontSize="xl" fontWeight="bold" align="center">
          {article.title}
        </Text>
        <Tag colorScheme="red">{article.topic}</Tag>
        <Image
          minW={100}
          width={600}
          src={article.article_img_url}
          alt={article.title}
        />
        <Text>{article.body}</Text>
      </VStack>
    </Container>
  );
}

export default Article;

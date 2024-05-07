import {
  HStack,
  Image,
  VStack,
  Link,
  Tag,
  Text,
  Container,
} from "@chakra-ui/react";

function Articles({ articles }) {
  return (
    <VStack spacing={8} align="stretch">
      {articles.map((article) => {
        return (
          <Container key={article.id} p={4} variant="outlined">
            <HStack>
              <Image
                width={250}
                src={article.article_img_url}
                alt={article.title}
                minW={50}
              />
              <VStack alignItems={"start"}>
                <Tag mt={2} colorScheme="red">
                  {article.topic}
                </Tag>
                <Text fontSize="lg" fontWeight="bold" mt={2}>
                  {article.title}
                </Text>
                <Link mt={2} color="blue" href={"/articles/${:article_id}"}>
                  view full article
                </Link>
              </VStack>
            </HStack>
          </Container>
        );
      })}
    </VStack>
  );
}
export default Articles;

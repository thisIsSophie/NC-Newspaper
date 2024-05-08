import { HStack, Image, VStack, Link, Tag, Container } from "@chakra-ui/react";

function Articles({ articles }) {
  return (
    <VStack spacing={8} align="stretch">
      {articles.map((article) => {
        return (
          <Container key={article.article_id} p={4} variant="outlined">
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
                <Link
                  fontSize="xl"
                  href={`/articles/${article.article_id}`}
                  lineHeight={1.2}
                  fontWeight="bold"
                  w="100%"
                  _hover={{ color: "blue.400", textDecoration: "underline" }}
                >
                  {article.title}
                </Link>
                <Link
                  mt={2}
                  color="blue"
                  href={`/articles/${article.article_id}`}
                >
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

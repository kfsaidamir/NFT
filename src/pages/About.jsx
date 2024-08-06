import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Image,
  Button,
  Link,
  Container,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl" py={10}>
      {/* Введение */}
      <Stack spacing={8} mb={12}>
        <Heading as="h1" size="2xl" textAlign="center">
          About NFTs
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600">
          NFTs, or Non-Fungible Tokens, are unique digital assets verified using
          blockchain technology. Unlike cryptocurrencies such as Bitcoin or
          Ethereum, which are fungible and can be exchanged with one another,
          NFTs are one-of-a-kind and cannot be exchanged on a like-for-like
          basis. They represent ownership of unique items or content, such as
          artwork, music, videos, or virtual goods.
        </Text>
      </Stack>

      {/* Что такое NFT */}
      <Flex
        direction={{ base: "column", md: "row" }}
        mb={12}
        align="center"
        justify="center"
      >
        <Box flex={{ base: "none", md: "1" }} mb={{ base: 6, md: 0 }}>
          <Image
            src={
              "https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w1024_r0.9975262832405689_fpx44.98_fpy48.86.jpg"
            }
            alt="NFT Example"
            borderRadius="lg"
            boxSize="full"
            objectFit="cover"
          />
        </Box>
        <Box
          flex={{ base: "none", md: "1" }}
          ml={{ md: 8 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading as="h2" size="xl" mb={4}>
            What is an NFT?
          </Heading>
          <Text fontSize="lg" color="gray.600">
            NFTs are digital certificates of ownership that are stored on a
            blockchain, ensuring that each NFT is unique and can be verified.
            They are commonly used to represent ownership of digital art,
            collectibles, and other types of digital content. Each NFT has
            distinct metadata and attributes that differentiate it from other
            tokens.
          </Text>
        </Box>
      </Flex>

      {/* Как работают NFT */}
      <Stack spacing={8} mb={12}>
        <Heading as="h2" size="xl" textAlign="center">
          How NFTs Work
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600">
          NFTs operate on blockchain networks, such as Ethereum, which store the
          data and metadata of the NFT. When someone purchases an NFT, the
          ownership is recorded on the blockchain, providing transparency and
          security. The NFT's value is often determined by its rarity, demand,
          and the reputation of the creator.
        </Text>
      </Stack>

      {/* Преимущества и будущее NFT */}
      <Flex
        direction={{ base: "column", md: "row" }}
        mb={12}
        align="center"
        justify="center"
      >
        <Box
          flex={{ base: "none", md: "1" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading as="h2" size="xl" mb={4}>
            Benefits and Future of NFTs
          </Heading>
          <Text fontSize="lg" color="gray.600">
            NFTs offer several benefits, including the ability to prove
            ownership, create digital scarcity, and support artists and creators
            directly. The future of NFTs looks promising with the potential for
            new applications in various fields such as gaming, virtual worlds,
            and digital collectibles.
          </Text>
        </Box>
        <Box flex={{ base: "none", md: "1" }} mb={{ base: 6, md: 0 }}>
          <Image
            src={"https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"}
            alt="NFT Future"
            borderRadius="lg"
            boxSize="full"
          />
        </Box>
      </Flex>

      {/* Контактная информация */}
      <Box textAlign="center">
        <Heading as="h3" size="lg" mb={4}>
          Interested in Learning More?
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Feel free to reach out to us if you have any questions or need more
          information about NFTs.
        </Text>
        <Link href="mailto:info@example.com">
          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default About;

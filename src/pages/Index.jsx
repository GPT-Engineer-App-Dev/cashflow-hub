import { Box, Container, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <Box display={{ base: "block", md: "none" }}>
          <FaBars />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>World</Link>
          <Link href="#" p={2}>Business</Link>
          <Link href="#" p={2}>Tech</Link>
          <Link href="#" p={2}>Markets</Link>
          <Link href="#" p={2}>Opinion</Link>
        </Box>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Main Article</Heading>
          <Image src="https://via.placeholder.com/800x400" alt="Main article image" mb={4} />
          <Text fontSize="lg" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Box>

        <Box flex="1" bg="gray.100" p={4}>
          <Heading as="h3" size="lg" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="white" p={4} boxShadow="md">
              <Heading as="h4" size="md" mb={2}>Advertisement</Heading>
              <Image src="https://via.placeholder.com/300x250" alt="Ad image" />
            </Box>
            <Box bg="white" p={4} boxShadow="md">
              <Heading as="h4" size="md" mb={2}>Additional Content</Heading>
              <Text>
                More articles and content can go here.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
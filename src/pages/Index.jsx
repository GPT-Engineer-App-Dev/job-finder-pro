import { Box, Container, VStack, Text, Input, Button, HStack, Flex, Heading, SimpleGrid, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.600" color="white" py={4}>
        <Container maxW="container.lg">
          <HStack spacing={8} justify="space-between">
            <Heading as="h1" size="lg">JobFinder</Heading>
            <HStack spacing={4}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">Jobs</Link>
              <Link href="#" color="white">Post a Job</Link>
              <Link href="#" color="white">Contact</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Container maxW="container.lg" centerContent>
          <VStack spacing={4}>
            <Heading as="h2" size="xl">Find Your Dream Job</Heading>
            <Text fontSize="lg">Search from thousands of job listings</Text>
            <HStack spacing={2} w="full" maxW="md">
              <Input placeholder="Search for jobs..." bg="white" color="black" />
              <Button colorScheme="teal">Search</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Job Listings Section */}
      <Container maxW="container.lg" py={10}>
        <Heading as="h3" size="lg" mb={6}>Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Software Engineer</Heading>
            <Text mt={4}>Company: TechCorp</Text>
            <Text>Location: San Francisco, CA</Text>
            <Text mt={4}>Brief description of the job listing...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Product Manager</Heading>
            <Text mt={4}>Company: InnovateX</Text>
            <Text>Location: New York, NY</Text>
            <Text mt={4}>Brief description of the job listing...</Text>
          </Box>
          {/* Add more job listings as needed */}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text>&copy; 2023 JobFinder. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
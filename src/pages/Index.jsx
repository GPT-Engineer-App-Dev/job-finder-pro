import { Box, Container, VStack, Text, Input, Button, HStack, Flex, Heading, Spacer, Link, SimpleGrid } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.700" color="white" padding={4}>
        <Heading size="md">JobFinder</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Post a Job</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20} textAlign="center">
        <Heading mb={4}>Find Your Dream Job</Heading>
        <Text mb={8}>Search from thousands of job listings</Text>
        <Input placeholder="Search for jobs..." size="lg" width="50%" mb={4} />
        <Button colorScheme="teal" size="lg">Search</Button>
      </Box>

      {/* Job Listings Section */}
      <Container maxW="container.lg" py={10}>
        <Heading size="lg" mb={6}>Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Software Engineer</Heading>
            <Text mt={4}>Company: TechCorp</Text>
            <Text>Location: San Francisco, CA</Text>
            <Text mt={4}>Brief description of the job listing...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Product Manager</Heading>
            <Text mt={4}>Company: Innovate Inc.</Text>
            <Text>Location: New York, NY</Text>
            <Text mt={4}>Brief description of the job listing...</Text>
          </Box>
          {/* Add more job listings as needed */}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 JobFinder. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaLinkedin /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
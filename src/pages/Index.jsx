import { Box, Container, Flex, Heading, Input, VStack, Text, HStack, Link, SimpleGrid, Stack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.700" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">JobFinder</Heading>
            <HStack spacing={8}>
              <Link href="#" fontSize="lg">Home</Link>
              <Link href="#" fontSize="lg">Jobs</Link>
              <Link href="#" fontSize="lg">Post a Job</Link>
              <Link href="#" fontSize="lg">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.50" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={6}>Find Your Dream Job</Heading>
          <Input placeholder="Search for jobs..." size="lg" maxW="600px" mx="auto" />
        </Container>
      </Box>

      {/* Job Listings Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="xl" mb={6}>Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">UX Designer</Heading>
            <Text mt={4}>Company: DesignPro</Text>
            <Text>Location: Austin, TX</Text>
            <Text mt={4}>Brief description of the job listing...</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.700" color="white" py={10}>
        <Container maxW="container.xl">
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
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  Grid,
  useColorModeValue,
} from '@chakra-ui/react';

const Contact = () => {
  const color = useColorModeValue('black', 'white');
  const bg = useColorModeValue('white', '#1F1F1F');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');

  return (
    <Box p={5} bg={bg} color={color}>
      <Heading fontSize="2xl" mb={5}>
        Contact Information
      </Heading>

      <Flex direction={{ base: 'column', md: 'row' }} mb={5}>
        <Box flex="1" mb={{ base: 4, md: 0 }} pr={{ md: 5 }}>
          <Text fontSize="lg" fontWeight="bold">
            Address:
          </Text>
          <Text>123 Example Street, City, Country</Text>

          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Phone:
          </Text>
          <Text>+998 93 561 96 17</Text>

          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Email:
          </Text>
          <Link href="mailto:skadirov2009@gmail.com" color="teal.500">
            skadirov2009@gmail.com
          </Link>
        </Box>

        <Box flex="1">
          <Heading fontSize="lg" mb={4}>
            Reference Information
          </Heading>
          <Grid templateColumns="1fr 1fr" gap={4}>
            <Link href="#faq" color="teal.500">
              FAQ
            </Link>
            <Link href="/support" color="teal.500">
              Support
            </Link>
            <Link href="#careers" color="teal.500">
              Careers
            </Link>
            <Link href="#legal" color="teal.500">
              Legal Information
            </Link>
          </Grid>
        </Box>
      </Flex>

      <Box borderTop={`1px solid ${borderColor}`} pt={5} mt={5}>
        <Text fontSize="sm" textAlign="center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;

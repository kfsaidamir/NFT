import React, { useState } from 'react';
import { Box, Heading, Text, Stack, Button, useColorModeValue, Icon, Grid, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { FaRegStar, FaRocket, FaStar, FaRegLightbulb } from 'react-icons/fa';

const FeatureModal = ({ isOpen, onClose, title, description }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>{description}</Text>
      </ModalBody>
    </ModalContent>
  </Modal>
);

const Discover = () => {
  const bg = useColorModeValue('white', '#1F1F1F');
  const color = useColorModeValue('black', 'white');
  const { isOpen: isOpenFeature1, onOpen: onOpenFeature1, onClose: onCloseFeature1 } = useDisclosure();
  const { isOpen: isOpenFeature2, onOpen: onOpenFeature2, onClose: onCloseFeature2 } = useDisclosure();
  const { isOpen: isOpenFeature3, onOpen: onOpenFeature3, onClose: onCloseFeature3 } = useDisclosure();
  const { isOpen: isOpenFeature4, onOpen: onOpenFeature4, onClose: onCloseFeature4 } = useDisclosure();

  return (
    <Box p={5} bg={bg} color={color}>
      <Heading fontSize="3xl" mb={6} textAlign="center">
        Our Discover Features
      </Heading>

      <Text fontSize="lg" mb={8} textAlign="center">
        Explore the features we offer to enhance your experience.
      </Text>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
        {/* Feature 1 */}
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p={5} borderRadius="md" boxShadow="md" textAlign="center">
          <Icon as={FaRegStar} boxSize={10} color="teal.400" mb={3} />
          <Heading fontSize="xl" mb={3}>
            Feature 1
          </Heading>
          <Text mb={3}>
            Description for feature 1. Learn more about what this feature can do for you.
          </Text>
          <Button colorScheme="teal" variant="solid" onClick={onOpenFeature1}>
            Learn More
          </Button>
        </Box>

        {/* Feature 2 */}
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p={5} borderRadius="md" boxShadow="md" textAlign="center">
          <Icon as={FaRocket} boxSize={10} color="teal.400" mb={3} />
          <Heading fontSize="xl" mb={3}>
            Feature 2
          </Heading>
          <Text mb={3}>
            Description for feature 2. Discover how this feature can benefit you.
          </Text>
          <Button colorScheme="teal" variant="solid" onClick={onOpenFeature2}>
            Learn More
          </Button>
        </Box>

        {/* Feature 3 */}
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p={5} borderRadius="md" boxShadow="md" textAlign="center">
          <Icon as={FaStar} boxSize={10} color="teal.400" mb={3} />
          <Heading fontSize="xl" mb={3}>
            Feature 3
          </Heading>
          <Text mb={3}>
            Description for feature 3. Find out more about the benefits of this feature.
          </Text>
          <Button colorScheme="teal" variant="solid" onClick={onOpenFeature3}>
            Learn More
          </Button>
        </Box>

        {/* Feature 4 */}
        <Box bg={useColorModeValue('gray.100', 'gray.700')} p={5} borderRadius="md" boxShadow="md" textAlign="center">
          <Icon as={FaRegLightbulb} boxSize={10} color="teal.400" mb={3} />
          <Heading fontSize="xl" mb={3}>
            Feature 4
          </Heading>
          <Text mb={3}>
            Description for feature 4. Learn more about what this feature offers.
          </Text>
          <Button colorScheme="teal" variant="solid" onClick={onOpenFeature4}>
            Learn More
          </Button>
        </Box>
      </Grid>

      <Box textAlign="center" mt={10}>
        <Button colorScheme="teal" variant="solid" size="lg">
          Contact Us
        </Button>
      </Box>

      {/* Modals */}
      <FeatureModal
        isOpen={isOpenFeature1}
        onClose={onCloseFeature1}
        title="Feature 1"
        description="Detailed information about Feature 1."
      />
      <FeatureModal
        isOpen={isOpenFeature2}
        onClose={onCloseFeature2}
        title="Feature 2"
        description="Detailed information about Feature 2."
      />
      <FeatureModal
        isOpen={isOpenFeature3}
        onClose={onCloseFeature3}
        title="Feature 3"
        description="Detailed information about Feature 3."
      />
      <FeatureModal
        isOpen={isOpenFeature4}
        onClose={onCloseFeature4}
        title="Feature 4"
        description="Detailed information about Feature 4."
      />
    </Box>
  );
};

export default Discover;

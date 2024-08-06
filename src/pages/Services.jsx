import React, { useState } from 'react';
import { Box, Heading, Text, Button, useColorModeValue, Flex, Icon, Grid, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { AiOutlineDesktop, AiOutlineAppstoreAdd, AiOutlineLineChart, AiOutlineCustomerService } from 'react-icons/ai';

const ServiceCard = ({ icon, title, description, moreInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} borderRadius="md" p={5} boxShadow="md" border={`1px solid ${useColorModeValue('#E2E8F0', '#2D3748')}`} textAlign="center">
      <Icon as={icon} boxSize={10} color="teal.400" mb={3} />
      <Heading fontSize="xl" mb={3}>
        {title}
      </Heading>
      <Text mb={3}>
        {description}
      </Text>
      <Button colorScheme="teal" variant="solid" onClick={onOpen}>
        Learn More
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{moreInfo}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Services = () => {
  const color = useColorModeValue('black', 'white');
  const bg = useColorModeValue('white', '#1F1F1F');

  return (
    <Box p={5} bg={bg} color={color}>
      <Heading fontSize="3xl" mb={6} textAlign="center">
        Our Services
      </Heading>

      <Text fontSize="lg" mb={8} textAlign="center">
        We offer a wide range of services to meet your needs. Learn more about what we can offer.
      </Text>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
        <ServiceCard
          icon={AiOutlineDesktop}
          title="Web Design"
          description="We create unique and functional web designs that help your business stand out."
          moreInfo="Our web design services include responsive design, UI/UX optimization, and custom graphics. We focus on creating designs that are not only visually appealing but also user-friendly and effective in achieving your business goals."
        />

        <ServiceCard
          icon={AiOutlineAppstoreAdd}
          title="App Development"
          description="We develop mobile and web applications to help your business operate more efficiently."
          moreInfo="Our app development services cover a wide range of needs, from custom mobile apps for iOS and Android to complex web applications. We use the latest technologies and best practices to deliver high-quality, scalable solutions tailored to your specific requirements."
        />

        <ServiceCard
          icon={AiOutlineLineChart}
          title="SEO Optimization"
          description="Our SEO services will help your website rank higher in search engines and attract more customers."
          moreInfo="We offer comprehensive SEO optimization services including keyword research, on-page and off-page SEO, and performance tracking. Our goal is to improve your website’s visibility in search engine results and drive more organic traffic to your site."
        />

        <ServiceCard
          icon={AiOutlineCustomerService}
          title="Support"
          description="We offer support and maintenance for your systems to ensure their smooth operation."
          moreInfo="Our support services include regular maintenance, troubleshooting, and updates to ensure your systems run smoothly. We provide prompt assistance and solutions to any issues that may arise, allowing you to focus on your core business activities."
        />
      </Grid>

      <Box textAlign="center" mt={10}>
        <Button colorScheme="teal" variant="solid" size="lg">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Services;

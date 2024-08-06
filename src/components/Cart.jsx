import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Heading mb={4}>Your Cart</Heading>
      <Text mb={4}>Here you can view and purchase items.</Text>
      {/* Add cart items and purchase options */}
      <Button mb={2} width="100%">Item 1 - Buy</Button>
      <Button mb={2} width="100%">Item 2 - Buy</Button>
      <Button mb={2} width="100%">Item 3 - Buy</Button>
      <Button mt={4} onClick={() => navigate(-1)}>Go Back</Button>
    </Box>
  );
};

export default Cart;

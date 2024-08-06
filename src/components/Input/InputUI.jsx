import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";
import React from "react";

const InputUI = () => {
  return (
    <div>
      <Box textAlign="center">
        <Text fontWeight="bold" mb={2}>
          Send us a message
        </Text>
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="center"
          mb={4}
        >
          <Input
            placeholder="Your message..."
            bg="gray.700"
            color="white"
            borderColor="gray.600"
            mb={{ base: 2, sm: 0 }} 
            mr={{ sm: 2 }}
            width={{ base: "100%", sm: "auto" }}
          />
          <Button colorScheme="teal">Send</Button>
        </Flex>
        <Text fontSize="sm">
          &copy; 2024 Your Company. All rights reserved.
        </Text>
      </Box>
    </div>
  );
};

export default InputUI;

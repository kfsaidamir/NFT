import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState('-4216202259'); // Initial chatId

  const color = useColorModeValue('black', 'white');
  const bg = useColorModeValue('white', '#1F1F1F');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');

  const handleSubmit = () => {
    if (chatId.trim() === "") {
      alert("Please enter a valid chat ID.");
      return;
    }

    axios
      .post(
        `https://api.telegram.org/bot6582215174:AAH1G91eN51UAfhUnJrIjcCXcd4xtMeLsPw/sendMessage`,
        {
          chat_id: chatId,
          text: `
            <b>Name: ${name}</b>\n
            <b>Email: ${email}</b>\n
            <b>Problem: ${message}</b> 
          `,
          parse_mode: 'html',
        }
      )
      .then((response) => {
        console.log('Message sent:', response.data);
        setName(''); 
        setEmail('');
        setMessage(''); 
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Error sending message');
      });
  };

  return (
    <Box p={5} bg={bg} color={color} id="support">
      <Heading fontSize="2xl" mb={5}>
        Support
      </Heading>

      <Text fontSize="lg" mb={5}>
        If you have any issues or questions, please fill out the form below, and we will do our best to assist you.
      </Text>

      <Flex
        direction="column"
        maxW="800px"
        mx="auto"
        bg={bg}
        borderRadius="md"
        boxShadow="md"
        p={5}
      >
        <Input
          placeholder="Your Name"
          mb={4}
          borderColor={borderColor}
          bg={bg}
          color={color}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Your Email"
          mb={4}
          type="email"
          borderColor={borderColor}
          bg={bg}
          color={color}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Describe your issue"
          mb={4}
          rows={6}
          borderColor={borderColor}
          bg={bg}
          color={color}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          colorScheme="teal"
          type="button"
          borderRadius="md"
          mt={4}
          onClick={handleSubmit}
        >
          Submit Request
        </Button>
      </Flex>

      <Box borderTop={`1px solid ${borderColor}`} pt={5} mt={5}>
        <Text fontSize="sm" textAlign="center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Support;

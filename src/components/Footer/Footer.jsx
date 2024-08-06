import { Box, Flex, Text, Link, Stack, Input, Button } from "@chakra-ui/react";
import { PiGitlabLogoThin } from "react-icons/pi";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [message, setMessage] = useState(""); // Исправлено: использовано message вместо name
  const [chatId, setChatId] = useState("-4216202259"); // Начальный chatId

  const TelegramPost = () => {
    if (chatId.trim() === "") {
      alert("Пожалуйста, введите корректный идентификатор чата.");
      return;
    }

    axios
      .post(
        `https://api.telegram.org/bot6582215174:AAH1G91eN51UAfhUnJrIjcCXcd4xtMeLsPw/sendMessage`,
        {
          chat_id: chatId,
          text: `
        
        <b>Comment: ${message}</b> 
 `,
          parse_mode: "html",
        }
      )
      .then((response) => {
        console.log("Сообщение отправлено:", response.data);
        setMessage(""); // Очистить поле после отправки сообщения
      })
      .catch((error) => {
        console.error("Ошибка отправки сообщения:", error);
        alert("Ошибка отправки сообщения"); // Добавлено сообщение об ошибке
      });
  };

  return (
    <Box
      bg="gray.900"
      color="white"
      py={10}
      px={{ base: 4, md: 8 }}
      borderTop="1px"
      borderColor="gray.700"
      id="faq"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        wrap="wrap"
        mb={8}
        align={{ base: "center", md: "start" }}
      >
        <Box
          mb={{ base: 6, md: 0 }}
          textAlign={{ base: "center", md: "left" }}
          flex={{ base: "none", md: "1" }}
        >
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            <PiGitlabLogoThin fontSize="33px" />
          </Text>
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Text>
        </Box>

        <Flex
          direction={"row"}
          wrap="wrap"
          flex={4}
          justify={"space-between"}
          align={"start"}
        >
          <Stack
            spacing={4}
            align={{ base: "center", md: "start" }}
            mb={{ base: 6, md: 0 }}
            mr={{ md: 12 }}
            flexBasis={{ base: "100%", md: "20%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontWeight="bold" fontSize="lg">
              Main
            </Text>
            <Link href="#" _hover={{ color: "teal.400" }}>
              Home
            </Link>
            <Link href="/about" _hover={{ color: "teal.400" }}>
              About
            </Link>
            <Link href="/services" _hover={{ color: "teal.400" }}>
              Services
            </Link>
            <Link href="/contact" _hover={{ color: "teal.400" }}>
              Contact
            </Link>
          </Stack>

          <Stack
            spacing={4}
            align={{ base: "center", md: "start" }}
            mb={{ base: 6, md: 0 }}
            mr={{ md: 12 }}
            flexBasis={{ base: "100%", md: "20%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontWeight="bold" fontSize="lg">
              Explore
            </Text>
            <Link href="/discover" _hover={{ color: "teal.400" }}>
              Discover
            </Link>
            <Link href="#" _hover={{ color: "teal.400" }}>
              Features
            </Link>
          </Stack>

          <Stack
            spacing={4}
            align={{ base: "center", md: "start" }}
            mb={{ base: 6, md: 0 }}
            mr={{ md: 12 }}
            flexBasis={{ base: "100%", md: "20%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontWeight="bold" fontSize="lg">
              FAQ
            </Text>
            <Link href="/support" _hover={{ color: "teal.400" }}>
              Help Center
            </Link>
            <Link href="#" _hover={{ color: "teal.400" }}>
              Support
            </Link>
          </Stack>

          <Stack
            spacing={4}
            align={{ base: "center", md: "start" }}
            mb={{ base: 6, md: 0 }}
            mr={{ md: 12 }}
            flexBasis={{ base: "100%", md: "20%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontWeight="bold" fontSize="lg">
              Become Artist
            </Text>
            <Link href="#" _hover={{ color: "teal.400" }}>
              Join Us
            </Link>
            <Link href="#" _hover={{ color: "teal.400" }}>
              Apply Now
            </Link>
          </Stack>
        </Flex>
      </Flex>

      <Box textAlign={{ base: "center", md: "left" }}>
        <Text fontWeight="bold" fontSize="lg" mb={4}>
          Get in Touch
        </Text>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} mb={6}>
          <Input
            placeholder="Your message"
            bg="gray.800"
            color="white"
            borderColor="gray.600"
            borderRadius="md"
            w={{ base: "100%", md: "20%" }}
            value={message} // Исправлено: использовано message вместо name
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            colorScheme="teal"
            variant="solid"
            flexShrink={0}
            onClick={TelegramPost}
          >
            Send
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;

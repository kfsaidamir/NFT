import { Box, Flex, Text, Link, Input, Button, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" p={6}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="flex-start"
        wrap="wrap"
        mb={6}
      >
        {/* Логотип или название компании */}
        <Box mb={{ base: 4, md: 0 }} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize="xl" fontWeight="bold">Your Logo</Text>
        </Box>

        {/* Основные ссылки */}
        <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" mb={{ base: 4, md: 0 }} justify="center">
          <Stack spacing={2} align="center" mb={{ base: 4, md: 0 }} mr={{ md: 8 }}>
            <Text fontWeight="bold">Main</Text>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Contact</Link>
          </Stack>

          {/* Дополнительные секции */}
          <Stack spacing={2} align="center" mb={{ base: 4, md: 0 }} mr={{ md: 8 }}>
            <Text fontWeight="bold">Explore</Text>
            <Link href="#">Discover</Link>
            <Link href="#">Features</Link>
          </Stack>

          <Stack spacing={2} align="center" mb={{ base: 4, md: 0 }} mr={{ md: 8 }}>
            <Text fontWeight="bold">FAQ</Text>
            <Link href="#">Help Center</Link>
            <Link href="#">Support</Link>
          </Stack>

          <Stack spacing={2} align="center" mb={{ base: 4, md: 0 }} mr={{ md: 8 }}>
            <Text fontWeight="bold">Become Artist</Text>
            <Link href="#">Join Us</Link>
            <Link href="#">Apply Now</Link>
          </Stack>

          <Stack spacing={2} align="center" mb={{ base: 4, md: 0 }}>
            <Text fontWeight="bold">About</Text>
            <Link href="#">Our Story</Link>
            <Link href="#">Team</Link>
          </Stack>
        </Flex>
      </Flex>

      {/* Поле для ввода сообщения и кнопка отправки */}

    </Box>
  );
};

export default Footer;

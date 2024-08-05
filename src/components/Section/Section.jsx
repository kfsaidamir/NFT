import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaWallet } from "react-icons/fa";

const Section = () => {
  const color = useColorModeValue("BLACK", "white" )
  return (
    <Box w={"85%"} margin={"5% auto"}>
      <Flex display={{md:"flex", base:"row"}} alignItems={"center"} justifyContent={"space-between"} >
        <Box>
          <Text
            color={"#6B6B6B"}
            fontSize={"14px"}
            fontWeight={"400"}
            letterSpacing={"2px"}
            mb={"12px"}
          >
            WEB 3 NON-FUNGIBLE TOKENS
          </Text>
          <Heading
            color={color}
            fontSize={{md:"68,98px", base:"64px" }}
            fontWeight={"500"}
          >
            Unlock Unique <br /> Digital Ownership <br /> with NFTs
          </Heading>
          <Text
            fontSize={"24px"}
            fontWeight={"400"}
            color={"#6B6B6B"}
            mt={"30px"}
          >
            Experience the Revolutionary World of Non-Fungible <br /> Tokens on
            Our Exclusive NFT Marketplace
          </Text>
          <Button
          mt={"55px"}
          padding={"25.5px 50px"}
            bgGradient="linear(to-r, #FF56BB 100%, #FF8F77 100%)"
            _hover={{
              bgGradient: "linear(to-r, #FF56BB 100%, #FF8F77 100%)",
            }}
            display={"flex"}
            alignItems={"center"}
            gap={"16px"}
            borderRadius={"20px"}
          >
            <FaWallet fontSize={"17px"} color="white" />
            <Text color={"white"} fontSize={"18px"} fontWeight={"500"} >Connect Wallet</Text>
          </Button>
        </Box>
        <Box>
          <Image src="../../public/robot.png"  display={{md:"block", base:"none" }} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Section;

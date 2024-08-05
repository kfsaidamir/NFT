import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Leader = () => {
  return (
    <Box
      w={"100%"}
      height={{ md: "634px", base: "max-content" }}
      padding={{ md: "0", base: "10px" }}
      backgroundColor={"#191919"}
    >
      <Box w={"85%"} margin={"0 auto"}>
        <Box textAlign={"center"} paddingTop={"95px"}>
          <Heading fontSize={"40px"} color={"white"} fontWeight={"700"}>
            Leaderboard of the Week
          </Heading>
        </Box>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }}
          gap={6}
          marginTop={"103px"}
          textAlign={"center"}
          justifyItems={"center"}
        >
          <Box textAlign={"center"}>
            <Image src="../../public/leader.png" />
            <Heading mt={"20px"} fontSize={"26px"} color={"white"} fontWeight={"500"}>
              Perperzon
            </Heading>
            <Text mt={"5px"} fontSize={"18px"} color={"white"} fontWeight={"700"}>
              9.421
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Image src="../../public/leader2.png" />
            <Heading mt={"20px"} fontSize={"26px"} color={"white"} fontWeight={"500"}>
              Richard
            </Heading>
            <Text mt={"5px"} fontSize={"18px"} color={"white"} fontWeight={"700"}>
              8.421
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Image src="../../public/leader3.png" />
            <Heading mt={"20px"} fontSize={"26px"} color={"white"} fontWeight={"500"}>
              Anderson
            </Heading>
            <Text mt={"5px"} fontSize={"18px"} color={"white"} fontWeight={"700"}>
              7.421
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Image src="../../public/leader4.png" />
            <Heading mt={"20px"} fontSize={"26px"} color={"white"} fontWeight={"500"}>
              Michael
            </Heading>
            <Text mt={"5px"} fontSize={"18px"} color={"white"} fontWeight={"700"}>
              5.421
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Image src="../../public/leader5.png" />
            <Heading mt={"20px"} fontSize={"26px"} color={"white"} fontWeight={"500"}>
              Antonson
            </Heading>
            <Text mt={"5px"} fontSize={"18px"} color={"white"} fontWeight={"700"}>
              3.421
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Leader;

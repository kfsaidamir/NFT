import React from "react";
import "./Featured.css";
import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";

const Featured = () => {
  const color = useColorModeValue("BLACK", "white" )
  const bg = useColorModeValue("#FFFFFF", "#1F1F1F" )
  return (
    <Box className="background">
      <Box w={"85%"} margin={"0 auto"}>
        <Heading fontSize={"40px"} color={color} fontWeight={"700"} textAlign={"center"} >Featured Collections</Heading>
        <Flex display={{md:"flex", base:"row"}}   justifyContent={"space-evenly"} alignItems={"center"} marginTop={"58px"}  >
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"30px"}
            backgroundColor={bg}
            borderRadius={"10px"}
            w={{md:"40%", base:"100%" }}
            padding={"10px"}
          >
            <Box w={{md:"54%", base:"100%" }}>
              <Image src="../../public/image2.png" w={"100%"}  />
            </Box>
            <Box>
              <Flex display={"flex"} alignItems={"center"} gap={"8,11px"}>
                <Image src="../../public/people.png" />
                <Text fontSize={"15px"} color={color} fontWeight={"700"}>
                  Perperzon
                </Text>
              </Flex>
              <Box mt={"22px"}>
                <Heading color={color} fontSize={"32px"} fontWeight={"500"}>
                  ExBoot #1
                </Heading>
                <Text
                  mt={"14px"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  color={"#6B6B6B"}
                >
                  Description
                </Text>
                <Heading
                  mt={"14px"}
                  fontSize={"16px"}
                  color={color}
                  fontWeight={"400"}
                >
                  We would like to present you The <br /> Exboot 3D - Watching
                  you~
                </Heading>
              </Box>
              <Flex
                mt={"27px"}
                display={"flex"}
                alignItems={"center"}
                gap={"41px"}
              >
                <Box display={"flex"} flexDirection={"column"} gap={"2px"}>
                  <Text fontSize={"12px"} color={"#6B6B6B"} fontWeight={"400"}>
                    Current Bid
                  </Text>
                  <Text fontSize={"14px"} color={color} fontWeight={"700"}>
                    3.421
                  </Text>
                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={"2px"}>
                  <Text fontSize={"12px"} color={"#6B6B6B"} fontWeight={"400"}>
                    End in
                  </Text>
                  <Text fontSize={"14px"} color={color} fontWeight={"700"}>
                    1h 12m 14s
                  </Text>
                </Box>
              </Flex>
              <Box>
                <Button
                  mt={"21px"}
                  padding={"25.5px 50px"}
                  bgGradient="linear(to-r, #FF56BB 100%, #FF8F77 100%)"
                  _hover={{
                    bgGradient: "linear(to-r, #FF56BB 100%, #FF8F77 100%)",
                  }}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"16px"}
                  borderRadius={"15px"}
                >
                  <FaWallet fontSize={"13px"} color="white" />
                  <Text color={"white"} fontSize={"18px"} fontWeight={"500"}>
                    Place Bid
                  </Text>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"30px"}
            backgroundColor={bg}
            borderRadius={"10px"}
            w={{md:"40%", base:"100%" }}
            mt={{md:"0", base:"90px" }}
            padding={"10px"}
          >
            <Box w={{md:"54%", base:"100%" }}>
              <Image src="../../public/image.png" w={"100%"} />
            </Box>
            <Box>
              <Flex display={"flex"} alignItems={"center"} gap={"8,11px"}>
                <Image src="../../public/people.png" />
                <Text fontSize={"15px"} color={color} fontWeight={"700"}>
                  Perperzon
                </Text>
              </Flex>
              <Box mt={"22px"}>
                <Heading color={color} fontSize={"32px"} fontWeight={"500"}>
                  ExBoot #2
                </Heading>
                <Text
                  mt={"14px"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  color={"#6B6B6B"}
                >
                  Description
                </Text>
                <Heading
                  mt={"14px"}
                  fontSize={"16px"}
                  color={color}
                  fontWeight={"400"}
                >
                  We would like to present you The <br /> Exboot 3D - Watching
                  you~
                </Heading>
              </Box>
              <Flex
                mt={"27px"}
                display={"flex"}
                alignItems={"center"}
                gap={"41px"}
              >
                <Box display={"flex"} flexDirection={"column"} gap={"2px"}>
                  <Text fontSize={"12px"} color={"#6B6B6B"} fontWeight={"400"}>
                    Current Bid
                  </Text>
                  <Text fontSize={"14px"} color={color} fontWeight={"700"}>
                    3.421
                  </Text>
                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={"2px"}>
                  <Text fontSize={"12px"} color={"#6B6B6B"} fontWeight={"400"}>
                    End in
                  </Text>
                  <Text fontSize={"14px"} color={color} fontWeight={"700"}>
                    1h 12m 14s
                  </Text>
                </Box>
              </Flex>
              <Box>
                <Button
                  mt={"21px"}
                  padding={"25.5px 50px"}
                  bgGradient="linear(to-r, #FF56BB 100%, #FF8F77 100%)"
                  _hover={{
                    bgGradient: "linear(to-r, #FF56BB 100%, #FF8F77 100%)",
                  }}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"16px"}
                  borderRadius={"15px"}
                >
                  <FaWallet fontSize={"13px"} color="white" />
                  <Text color={"white"} fontSize={"18px"} fontWeight={"500"}>
                    Place Bid
                  </Text>
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Featured;

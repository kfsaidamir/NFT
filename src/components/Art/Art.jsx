import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'


const Art = () => {
  const color = useColorModeValue("BLACK", "white" )
  const bg = useColorModeValue("#FFFFFF", "#1F1F1F" )
  return (
    <Box w={"85%"} margin={"0 auto"} id='#art' >
      <Heading color={color} fontSize={"40px"} fontWeight={"700"} >Trending Art 🔥</Heading>

      <Flex mt={"50px"} display={{md:"flex", base:"row"}} gap={"11px"} justifyContent={"space-between"}  align={"center"} >
        <Box w={{md:"20%", base:"100%" }} mt={3}  boxShadow="md" padding={"5px 10px "} borderRadius={"11px"}  backgroundColor={bg} >
          <Image src="../../public/image.png" w={"100%"} />
          <Heading color={color} fontSize={"26px"} fontWeight={"600"} mt={"12px"}  >ExBoot #1</Heading>
          <Flex mt={"15px"}  display={"flex"} alignItems={"center"} justifyContent={"space-between"}  >

          <Box display={"flex"} alignItems={"center"} gap={"8px"}  >
            <Image src="../../public/people.png" />
            <Text fontSize={"15px"} color={color} fontWeight={"700"} >Perperzon</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"3px"} >
            <Text color={"#6B6B6B"} fontSize={"12px"} fontWeight={"400"} >Current Bid</Text>
            <Text color={color} fontSize={"15px"} fontWeight={"700"}  >3.421 </Text>
          </Box>

          </Flex>
        </Box>
        <Box  w={{md:"20%", base:"100%" }}  mt={{md:"0", base:"3" }} boxShadow="md" padding={"5px 10px "} borderRadius={"11px"}  backgroundColor={bg} >
          <Image src="../../public/image2.png" w={"100%"} />
          <Heading color={color} fontSize={"26px"} fontWeight={"600"} mt={"12px"}  >ExBoot #2</Heading>
          <Flex mt={"15px"}  display={"flex"} alignItems={"center"} justifyContent={"space-between"}  >

          <Box display={"flex"} alignItems={"center"} gap={"8px"}  >
            <Image src="../../public/people2.png" />
            <Text fontSize={"15px"} color={color} fontWeight={"700"} >Perperzon</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"3px"} >
            <Text color={"#6B6B6B"} fontSize={"12px"} fontWeight={"400"} >Current Bid</Text>
            <Text color={color} fontSize={"15px"} fontWeight={"700"}  >3.421 </Text>
          </Box>

          </Flex>
        </Box>
        <Box w={{md:"20%", base:"100%" }} mt={{md:"0", base:"3" }} boxShadow="md" padding={"5px 10px "} borderRadius={"11px"}  backgroundColor={bg} >
          <Image src="../../public/image3.png" w={"100%"} />
          <Heading color={color} fontSize={"26px"} fontWeight={"600"} mt={"12px"}  >ExBoot #3</Heading>
          <Flex mt={"15px"}  display={"flex"} alignItems={"center"} justifyContent={"space-between"}  >

          <Box display={"flex"} alignItems={"center"} gap={"8px"}  >
            <Image src="../../public/people.png" />
            <Text fontSize={"15px"} color={color} fontWeight={"700"} >Perperzon</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"3px"} >
            <Text color={"#6B6B6B"} fontSize={"12px"} fontWeight={"400"} >Current Bid</Text>
            <Text color={color} fontSize={"15px"} fontWeight={"700"}  >3.421 </Text>
          </Box>

          </Flex>
        </Box>
        <Box  w={{md:"20%", base:"100%" }} mt={{md:"0", base:"3" }} boxShadow="md" padding={"5px 10px "} borderRadius={"11px"}  backgroundColor={bg} >
          <Image src="../../public/image4.png" w={"100%"} />
          <Heading color={color} fontSize={"26px"} fontWeight={"600"} mt={"12px"}  >ExBoot #4</Heading>
          <Flex mt={"15px"}  display={"flex"} alignItems={"center"} justifyContent={"space-between"}  >

          <Box display={"flex"} alignItems={"center"} gap={"8px"}  >
            <Image src="../../public/people2.png" />
            <Text fontSize={"15px"} color={color} fontWeight={"700"} >Perperzon</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"3px"} >
            <Text color={"#6B6B6B"} fontSize={"12px"} fontWeight={"400"} >Current Bid</Text>
            <Text color={color} fontSize={"15px"} fontWeight={"700"}  >3.421 </Text>
          </Box>

          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Art

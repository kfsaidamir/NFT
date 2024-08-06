import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { FaAngleDown, FaAngleUp } from "react-icons/fa";
  
  const Explore = () => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для контроля стрелки и видимости карточек
    const color = useColorModeValue("BLACK", "white");
    const bg = useColorModeValue("#FFFFFF", "#1F1F1F");
    const border = useColorModeValue("#000000", "white");
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const cards = [
      { id: 1, img: "../../public/image.png", title: "ExBoot #1", user: "Perperzon" },
      { id: 2, img: "../../public/img2.png", title: "ExBoot #2", user: "Antonson" },
      { id: 3, img: "../../public/img3.png", title: "Future of Polygon X", user: "Michael" },
      { id: 4, img: "../../public/img5.png", title: "Blue Wave #2", user: "Anderson" },
      { id: 5, img: "../../public/img6.png", title: "ExBoot #1", user: "Michael" },
      { id: 6, img: "../../public/img7.png", title: "ExBoot #2", user: "Richard" },
      { id: 7, img: "../../public/img8.png", title: "Future of Polygon X", user: "Anderson" },
      { id: 8, img: "../../public/robot2.png", title: "Blue Wave #2", user: "Antonson" },
      { id: 9, img: "../../public/img10.png", title: "ExBoot #1", user: "Perperzon" },
      { id: 10, img: "../../public/img11.png", title: "ExBoot #2", user: "Antonson" },
      { id: 11, img: "../../public/img12.png", title: "Future of Polygon X", user: "Michael" },
      { id: 12, img: "../../public/img13.png", title: "Blue Wave #2", user: "Richard" },
    ];
  
    const visibleCards = isOpen ? cards : cards.slice(0, 4);
  
    return (
      <Box w={"85%"} margin={"0 auto"} id="explore">
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Heading color={color} fontSize={"40px"} fontWeight={"700"}>
            Explore
          </Heading>
          <Button
            onClick={toggleDropdown}
            border={`1px solid ${border}`}
            borderRadius={"20px"}
            fontSize={"15px"}
            fontWeight={"700"}
            color={color}
          >
            Recently Added {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </Flex>
  
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}
          marginTop={6}
        >
          {visibleCards.map((card) => (
            <Box
              key={card.id}
              boxShadow="md"
              borderRadius={"11px"}
              backgroundColor={bg}
              padding={3}
            >
              <Image src={card.img} w={"100%"} />
              <Heading
                color={color}
                fontSize={"26px"}
                fontWeight={"600"}
                mt={"12px"}
              >
                {card.title}
              </Heading>
              <Flex
                mt={"15px"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                  <Image src="../../public/people.png" />
                  <Text fontSize={"15px"} color={color} fontWeight={"700"}>
                    {card.user}
                  </Text>
                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={"3px"}>
                  <Text color={"#6B6B6B"} fontSize={"12px"} fontWeight={"400"}>
                    Current Bid
                  </Text>
                  <Text color={color} fontSize={"15px"} fontWeight={"700"}>
                    3.421
                  </Text> 
                </Box>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Explore;
  
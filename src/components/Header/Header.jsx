import React, { useState } from "react";
import { Box, Button, Flex, Input, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { PiGitlabLogoThin } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const Header = ({ walletSelected, setWalletSelected, searchQuery, setSearchQuery }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#fff", "#2D3748");
  const logoColor = useColorModeValue("#FF7795", "#fff");
  const searchIconColor = useColorModeValue("#B7B7B7", "#A0AEC0");
  const linkColor = useColorModeValue("#000", "#fff");
  const linkHoverColor = useColorModeValue("#FF7795", "#B779FF");
  const toggleIconColor = useColorModeValue("#000", "#fff");

  return (
    <Box
      w={"100%"}
      position={"fixed"}
      top={0}
      zIndex={1000}
      transition={"background-color 0.3s ease"}
      bg={bgColor}
    >
      <Box w={"85%"} margin={"1% auto"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={{ md: "102px", base: "30px" }}
          >
            <Box className="logo">
              <Link to="/">
                <PiGitlabLogoThin color={logoColor} fontSize={"33px"} />
              </Link>
            </Box>
            <Flex
              align={"center"}
              gap={"16px"}
              backgroundColor={useColorModeValue("#F3F3F3", "#4A5568")}
              padding={"5px 15px"}
              borderRadius={"20px"}
            >
              <Button variant="unstyled" className="search-icon">
                <BiSearch color={searchIconColor} fontSize={"20px"} />
              </Button>
              <Input
                type="text"
                placeholder="Search"
                variant={"unstyled"}
                w={"90%"}
                color={useColorModeValue("#000", "#fff")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Flex>
          </Box>

          <Menu />
          <Box
            display={{ md: "flex", base: "none" }}
            alignItems={"center"}
            gap={"56px"}
          >
            <a href="#explore" >
              <span
                style={{
                  color: linkColor,
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = linkHoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkColor)}
              >
                Explore
              </span>
            </a>
            <a href="#art">
              <span
                style={{
                  color: linkColor,
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = linkHoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkColor)}
              >
                Trending🔥
              </span>
            </a>
            <a href="#faq">
              <span
                style={{
                  color: linkColor,
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = linkHoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkColor)}
              >
                FAQ
              </span>
            </a>
          </Box>
          <Button
            onClick={toggleColorMode}
            bg={bgColor}
            _hover={{ bg: useColorModeValue("#e2e2e2", "#4A5568") }}
            borderRadius={"50%"}
            p={"10px"}
            transition={"background-color 0.3s ease"}
            color={toggleIconColor}
          >
            {colorMode === "light" ? (
              <IoMoonOutline fontSize={"20px"} />
            ) : (
              <MdOutlineLightMode fontSize={"20px"} />
            )}
          </Button>
          {walletSelected && (
            <IconButton
              aria-label="Open Cart"
              icon={<FaTrash />}
              ml={4}
              onClick={() => window.location.href = '/cart'}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [menuColor, setMenuColor] = useState("#111111");
  const menu = useColorModeValue("#000000", "white")

  const handleMenuClick = () => {
    onOpen();
  };

  return (
    <div>
      <Button
        ref={btnRef}
        variant={"unstyled"}
        onClick={handleMenuClick}
        display={{ md: "none", base: "block" }}
      >
        <IoIosMenu color={menu} fontSize={"40px"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => {
          onClose();
          setMenuColor("#111111");
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={10}>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"} >
              <Link to="/">
                <span className="span">Explore</span>
              </Link>
              <Link to="/">
                <span className="span">Trending🔥</span>
              </Link>
              <Link to="/">
                <span className="span">FAQ</span>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Menu;

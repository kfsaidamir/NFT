import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Art from "../components/Art/Art";
import { Box } from "@chakra-ui/react";
import Featured from "../components/Featured/Featured";
import Leader from "../components/Leader/Leader";
import Explore from "../components/Explore/Explore";
import Phone from "../components/Phone/Phone";
import InputUI from "../components/Input/InputUI";
import Footer from "../components/Footer/Footer";

const Home = ({ walletSelected, setWalletSelected }) => {
  return (
    <>
      <Header walletSelected={walletSelected} setWalletSelected={setWalletSelected} />
      <Box marginTop="100px">
        <Section setWalletSelected={setWalletSelected} />
      </Box>
      <Art />
      <Box marginTop={"151px"}>
        <Featured />
      </Box>
      <Box marginTop={"203px"}>
        <Leader />
      </Box>
      <Box marginTop={"133px"}>
        <Explore />
      </Box>
      <Box marginTop={"170px"} display={{ md: "block", base: "none" }}>
        <Phone />
      </Box>
      <Box marginTop={"170px"}>
        <Footer />
      </Box>
    </>
  );
};

export default Home;

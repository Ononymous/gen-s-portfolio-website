import React from "react";
import "./App.css" 

import PhotoStack from "./blocks/PhotoStack"
import Now from "./blocks/Now.js";
import Experiences from "./blocks/Experiences.js";
import MoreAboutMe from "./blocks/MoreAboutMe.js";
import Skills from "./blocks/Skills.js";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import { Analytics } from '@vercel/analytics/react';
import { Box, Flex } from "@chakra-ui/react";


function App() {
  return (
    <div >
      <Navbar/>
      <Flex 
        justifyContent={"center"} 
        align={"center"} 
        direction="column" 
        mb="20"
        px={{ xl: "16%", lg: "11%", md: "7%", base: "2%" }}>
        <PhotoStack/>
        <Box className="spacer"></Box>
        <Experiences/>
        <Box className="spacer"></Box>
        <Box className="spacer"></Box>
        <Now/>
        <Box className="spacer"></Box>
        <Box className="spacer"></Box>
        <Skills/>
        <Box className="spacer"></Box>
        <Box className="spacer"></Box>
        <MoreAboutMe/>
      </Flex>
      <Footer/>
      <Analytics />
    </div>
  );
}

export default App;

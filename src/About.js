
import React from "react"; 
import { Flex, Box } from "@chakra-ui/react";
import "./App.css"
import Now from "./Now.js";
import Experiences from "./Experiences.js";
import Future from "./Future.js";
import Skills from "./Skills.js";


function About() {
    // an about stack, placed under the photo stack, with a heading "About Me" in large text, center of the page.
    // below the heading, there should be different sections of text, starting with "Now", "Past", and "Future"
    // under the "Now" section, there should be subsections of text, starting with "Education", "Projects", and "Hobbies"
    // under the "Past" section, there should be subsections of text, starting with "Experiences", "Projects", and "Skills"
    // under the "Future" section, there should be subsections of text, starting with "Educational Plans", "Interest", and "Work"
    // this section should mostly use Chakra UI's Text component, with some headings and links

    return (
        <Flex justifyContent={"center"} alignItems={"center"} direction="column" marginBottom="10">
            <Box className="spacer"></Box>
            <Now/>
            <Box className="spacer"></Box>
            <Box className="spacer"></Box>
            <Experiences/>
            <Box className="spacer"></Box>
            <Box className="spacer"></Box>
            <Skills/>
            <Box className="spacer"></Box>
            <Box className="spacer"></Box>
            <Future/>
        </Flex>
    );
}

export default About;
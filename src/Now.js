import React from 'react';
import { Text, Heading, Box, Accordion } from "@chakra-ui/react";
import "./App.css"
import { useColorMode } from "@chakra-ui/react";
import NowAccordion from './NowAccordion';

function Now(){
    const { colorMode } = useColorMode();
    const accordionListData = [
        {
            name: "Data Science Club 2022-2023 Project Pipeline:",
            link: "https://datascienceucsb.org/",
            linkText: "Link to Project Pipeline",
            listText: [
                "My team and I are making a web app that would read photo-scanned text out loud in human-like voice",
                "Help people listen to text instead of having to read them",
                "This would benefit people who reading disabilities and people who want to read paperback books in an audiobook fashion",
                "Users would upload photo scans of texts in English; the app would convert the scans into text and read the transcript in human-like voice"
            ]
        },
        {
            name: "GauchoCourses App Development:",
            link: "https://github.com/data-science-ucsb/gauchocourses",
            linkText: "Link to Github",
            listText: [
                "A UCSB Data Science Club project, and I am joining its backend team",
                "A quarterly course planner that allows students to see possible schedule combinations for the classes they want to take",
                "Using Spring Framework for the backend and Vue.js for frontend",
                "This would benefit students by allowing them to efficiently explore more available options for their class schedule"
            ]
        },
        {
            name: "Coders SB Club 2022-2023 Winter quarter Project Series:",
            link: "https://coderssb.com/",
            linkText: "Link to Club Website",
            listText: [
                "A phone app using React Native",
                "🚧🏗️ In progress... 🚧",
            ]
        }
    ]
    const AccordionList = accordionListData.map((data, index) =>
        <NowAccordion key={index} name={data.name} link={data.link} linkText={data.linkText} listText={data.listText}/>
    )
    return(
        <Box 
        w={{xl:"55%", lg:"68%" , md:"82%", base:"95%"}} 
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}} 
        boxShadow="dark-lg"
        rounded={"2xl"}
        className={colorMode==="light"?"now":"now-dark"}>
            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                Education
                </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
            I am currently taking Data Structures and Algorithms I (CMPSC 130A), Computer Architecture (CMPSC 154), and Introduction to Computational Science (CMPSC 111) this quarter.
            </Text>
            <br/>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
            As for extracurriculars, I am a returning member of the Coders SB Club, which focus mainly on React and web dev, and I have also joined Data Science Club this year.
            </Text>
            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                Ongoing Activities
                </Text>
            </Heading>
            <Accordion allowToggle>
                {AccordionList}
            </Accordion>

            {/* <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                Hobbies
                </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
            In my spare time, I like working out in the gym, playing badminton, and reading novels written in the three languages I am proficient in.
            </Text> */}
        </Box>
    )
}

export default Now;
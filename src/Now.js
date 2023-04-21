import React from 'react';
import { Text, Heading, Box, Accordion } from "@chakra-ui/react";
import "./App.css"
import { useColorMode } from "@chakra-ui/react";
import NowAccordion from './NowAccordion';

function Now(){
    const { colorMode } = useColorMode();
    const accordionListData = [
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
                "A phone app called \"AirNet\" using React Native to allow users to track planes",
                "Users can use their phone camera to scan the sky and the app will display the plane's information",
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
            I am currently taking Data Structures and Algorithms II (CMPSC 130B) and Automata and Formal Languages (CMPSC 138) this quarter.
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
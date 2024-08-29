import React from 'react';
import { Text, Heading, Box, Accordion, Link } from "@chakra-ui/react";
import "../App.css"
import { useColorMode } from "@chakra-ui/react";
import NowAccordion from '../components/NowAccordion';

function Now(){
    const { colorMode } = useColorMode();
    const accordionListData = [
        // {
        //     name: "Data Science Club Project Group:",
        //     link: "https://datascienceucsb.org/",
        //     linkText: "Link to Website",
        //     listText: [
        //         "UCSB's largest data science and computer science club",
        //         "Currently working towards a project that would benefit the UCSB community",
        //     ]
        // },
        // {
        //     name: "GauchoCourses App Development:",
        //     link: "https://github.com/data-science-ucsb/gauchocourses",
        //     linkText: "Link to Github",
        //     listText: [
        //         "A UCSB Data Science Club project, and I am joining its backend team",
        //         "A quarterly course planner that allows students to see possible schedule combinations for the classes they want to take",
        //         "Using Spring Framework for the backend and Vue.js for frontend",
        //         "This would benefit students by allowing them to efficiently explore more available options for their class schedule"
        //     ]
        // },
    ]
    const AccordionList = accordionListData.map((data, index) =>
        <NowAccordion key={index} name={data.name} link={data.link} linkText={data.linkText} listText={data.listText}/>
    )
    return(
        <Box 
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}} 
        boxShadow="dark-lg"
        rounded={"2xl"}>
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
                I am currently a 4th year Computer Science major at the University of California, Santa Barbara (UCSB), progressing through the BS/MS program with an expected completion in June 2026.
            </Text>
            <br/>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                I will be taking Artificial Intelligence (CMPSC 165A), Distributed Systems (CMPSC 171), and Computer Vision (CMPSC 181) next quarter.
            </Text>
            <br/>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                Currently, I am focusing on my Masters planning and courses of the BS/MS program.
            </Text>
            <br/>
            {accordionListData.length !== 0 && <Heading
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
            }
            <Accordion allowToggle>
                {AccordionList}
            </Accordion>

            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                    Organizations
                </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                I was the Professional Development Head of UCSB Theta Tau Professional Engineering Fraternity, currently am the Rush Head for Fall 2024.
            </Text>
            <br/>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                Have participated in the project series of UCSB Data Science Club, Coders SB, SB Hacks in the past, and have successfully risen up the ranks in each of them.
            </Text>
            <br/>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                Most recently, I have just finished my annual <Link color='teal.300' href="https://www.datascienceucsb.org/events" isExternal>UCSB Data Science Club</Link> presentation, got a 2nd place out of 50+ groups
            </Text>
            <br/>

            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                    Other Notes
                </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                I am experienced with the Git, Wix, Wordpress, Cocos Creator, and Fusion 360 softwares and tools.
            </Text>
        </Box>
    )
}

export default Now;
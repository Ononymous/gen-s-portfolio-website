import React from 'react';
import { Text, Heading, Box, Link } from "@chakra-ui/react";
import "../App.css"

function Now(){
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
                I am taking Artificial Intelligence (CMPSC 165A) and Deep Learning (CMPSC 190I) this quarter quarter.
            </Text>

            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"7", md:"4", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                    Research
                </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                I am currently working in <Link color="teal.300" href="https://sites.cs.ucsb.edu/~ckrintz/racelab.html" isExternal>RACELab (The Lab for Research on Adaptive Computing Environments)</Link> at UCSB, directed by Professor Chandra Krintz and Professor Rich Wolski.
            </Text>
            <br/>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                Our Lab focuses on research in the areas of cloud computing, edge computing, and IoT.
            </Text>
            {/* <br/> */}

            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"7", md:"4", base:"2"}}
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
            {/* <br/> */}

            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"7", md:"4", base:"2"}}
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
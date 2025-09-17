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

            {/* <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
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
            </Text> */}

            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"7", md:"4", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                    Education
                </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                I am currently a Computer Science master at the University of California, Santa Barbara (UCSB), progressing through the BS/MS program with an expected completion in June 2026.
            </Text>
            <br/>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                I am taking AI for Science (CMPSC 291A), Neural Information Retrieval (CMPSC 291A), and Computational Geometry (CMPSC 235) this quarter.
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
                    Organizations
                </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                Have participated in the project series of UCSB Data Science Club, Coders SB, SB Hacks in the past, and have successfully risen up the ranks in each of them.
            </Text>
            <br/>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
                Attended previous Finalist Panel for the UCSB Data Science Club for supporting the club's growth and development.
            </Text>
        </Box>
    )
}

export default Now;
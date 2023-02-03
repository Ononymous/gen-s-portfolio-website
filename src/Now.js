import React from 'react';
import { Text, Heading, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import "./App.css"
import { useColorMode } from "@chakra-ui/react";

function Now(){
    const { colorMode } = useColorMode();
    return(
        <Box 
        w={{xl:"60%", md:"70%", base:"90%"}} 
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}} 
        boxShadow="dark-lg"
        rounded={"2xl"}
        className={colorMode==="light"?"now":"now-dark"}>
            <Box className="normal">
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
                    Activities
                    </Text>
                </Heading>
                <Link 
                isExternal
                color='teal.300'
                fontSize={{ base: 'lg', lg: 'xl' }}
                fontWeight={500}
                marginBottom={3}
                href="https://datascienceucsb.org/">
                Data Science Club 2022-2023 Project Pipeline:
                </Link>
                <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }} marginBottom={{xl:"7", md:"5", base:"4"}}>
                    <ListItem>
                        My team and I are making a web app that would read photo-scanned text out loud in human-like voice
                    </ListItem>
                    <ListItem>
                        Help people listen to text instead of having to read them
                    </ListItem>
                    <ListItem>
                        This would benefit people who reading disabilities and people who want to read paperback books in an audiobook fashion
                    </ListItem>
                    <ListItem>
                        Users would upload photo scans of texts in English; the app would convert the scans into text and read the transcript in human-like voice
                    </ListItem>
                </UnorderedList>
                <Link 
                isExternal
                color='teal.300'
                fontSize={{ base: 'lg', lg: 'xl' }}
                fontWeight={500}
                marginBottom={3}
                href="https://coderssb.com/">
                Coders SB Club 2022-2023 Winter quarter Project Series:
                </Link>
                <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }} marginBottom={{xl:"7", md:"5", base:"4"}}>
                    <ListItem>
                    A phone app using React Native
                    </ListItem>
                    <ListItem>
                    🚧🏗️ In progress... 🚧
                    </ListItem>
                </UnorderedList>
                <Heading
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
                </Text>
            </Box>
        </Box>
    )
}

export default Now;
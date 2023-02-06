import React from 'react';
import { Text, Heading, Box, ListItem, UnorderedList, Link, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import "./App.css"
import { useColorMode } from "@chakra-ui/react";

function Past(){
    const { colorMode } = useColorMode();
    return(
        <Box 
        w={{xl:"60%", md:"70%", base:"90%"}} 
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}} 
        boxShadow="dark-lg" 
        rounded={"2xl"}
        className={colorMode==="light"?"past":"past-dark"}>
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
                    Experiences
                    </Text>
                </Heading>
                <Tabs isFitted variant='enclosed'>
                    <TabList mb='1em'>
                    <Tab fontSize={{ base: 'lg', lg: 'xl' }} fontWeight={500} >Internship Experience</Tab>
                        <Tab fontSize={{ base: 'lg', lg: 'xl' }} fontWeight={500} >Other Experiences</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight={500} marginBottom={3}>
                Internship Experience
                </Text>
                <UnorderedList spacing={1} fontSize={{ base: 'lg', lg: 'xl' }} marginBottom={{xl:"7", md:"5", base:"4"}}>
                    <ListItem>
                    Summer 2021:
                    </ListItem>
                    <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }}>
                        <ListItem>
                        Software Developer Intern at SOAR Foundation:
                        </ListItem>
                        <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }}>
                            <ListItem>
                            Created a prototype{' '}
                            <Link 
                            isExternal
                            color='teal.300'
                            href="https://gen8009.wixsite.com/soar-foundation">new website</Link>
                            {' '}for SOAR Foundation using Wix, as a proof of concept
                            </ListItem>
                            <ListItem>
                            The{' '}<Link 
                            isExternal
                            color='teal.300'
                            href="https://soarfoundation.net/en/home/">SOAR Foundation</Link>
                            {' '}was created to distribute scholarships to students in China who are in need of financial aid
                            </ListItem>
                            <ListItem>
                            They were in need of a transition from their old website built on Wordpress; either improve it in terms of aesthetics, or rebuild it completely using a different platform
                            </ListItem>
                            <ListItem>
                            After considering options such as using React.js, Squarespace and many other website builders, we decided to try{' '}<Link 
                            isExternal
                            color='teal.300'
                            href="https://www.wix.com/">Wix</Link>
                            , for it is easier to maintain and customize
                            </ListItem>
                        </UnorderedList>
                    </UnorderedList>
                </UnorderedList>

                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight={500} marginBottom={3}>
                Other Experiences
                </Text>
                <UnorderedList spacing={1} fontSize={{ base: 'lg', lg: 'xl' }} marginBottom={{xl:"7", md:"5", base:"4"}}>
                    <ListItem>
                    2020-2021:
                    </ListItem>
                    <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }}>
                        <ListItem>
                        Spring quarter Coders SB project series (collab with UCSB Blockchain club):
                        </ListItem>
                        <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }}>
                            <ListItem>
                            Created{' '}
                            <Link 
                            isExternal
                            color='teal.300'
                            href="https://cryptaid-calee14.vercel.app/">Cryptaid</Link>
                            {' '}using React.js and{' '}
                            <Link 
                            isExternal
                            color='teal.300'
                            href="https://moralis.io/">Moralis.io</Link>
                            </ListItem>
                            <ListItem>
                            Used Moralis blockchain to create an app that allows users to gather or send donations to which ever cause they are supporting, anonymously
                            </ListItem>
                        </UnorderedList>
                        <ListItem>
                        <Link 
                        isExternal
                        color='teal.300'
                        href="https://sb-hacks-viii.devpost.com/">SB Hacks VIII</Link>
                        </ListItem>
                        <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }}>
                            <ListItem>
                            Created{' '}
                            <Link 
                            isExternal
                            color='teal.300'
                            href="https://seconds-ef259.web.app/interview">30 Seconds</Link>
                            {' '}using one of the sponsors' APIs
                            </ListItem>
                            <ListItem>
                            Used a speech-to-text API,{' '}
                            <Link 
                            isExternal
                            color='teal.300'
                            href="https://www.assemblyai.com/">Assembly AI</Link>, to make an app related to job interview practices
                            </ListItem>
                            <ListItem>
                            Learned and integrated the API into our React.js frontend in a very short amount of time (2 days)
                            </ListItem>
                        </UnorderedList>
                        <ListItem>
                        Fall quarter Coders SB project series:
                        </ListItem>
                        <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }}>
                            <ListItem>
                            Created{' '}
                            <Link 
                            isExternal
                            color='teal.300'
                            href="https://fiesta-5caa1.web.app/">Fiesta</Link>
                            {' '}using React.js
                            </ListItem>
                            <ListItem>
                            Wanted an app that helped students at Santa Barbara to find events happening nearby safely and more efficiently
                            </ListItem>
                            <ListItem>
                            Learning React.js for the first time; experienced API integration for the first time (Google Map)
                            </ListItem>
                        </UnorderedList>
                    </UnorderedList>
                    <ListItem>
                        2022-2023:
                    </ListItem>
                    <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }}>
                        <ListItem>
                        🚧🏗️ In progress... 🚧
                        </ListItem>
                    </UnorderedList>
                </UnorderedList>
            </Box>
        </Box>
    )
}

export default Past;
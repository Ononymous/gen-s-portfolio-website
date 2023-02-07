import React from 'react';
import { Text, Stack, Heading, Box, InputGroup, Input, InputRightElement, IconButton, ListItem, UnorderedList, Button, Link, Menu, MenuList, MenuButton, MenuDivider, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import "./App.css"
import { SearchIcon } from '@chakra-ui/icons';
import { useColorMode } from "@chakra-ui/react";
import CardResult from './CardResult';


function Past(){
    const { colorMode } = useColorMode();
    return(
        <Box 
        w={{xl:"55%", lg:"68%" , md:"82%", base:"95%"}} 
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}} 
        boxShadow="dark-lg" 
        rounded={"2xl"}
        className={colorMode==="light"?"experiences":"experiences-dark"}>
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
            <Box 
            boxShadow="inner" 
            rounded={"2xl"} 
            w="fill" 
            border='1px' 
            borderColor='gray.200'
            minHeight={"50vh"} 
            maxHeight={"80vh"} 
            p="4">
                <Stack direction="row">
                    <Menu closeOnSelect={false}>
                        <MenuButton
                        as={Button}
                        fontSize="sm" 
                        variant={colorMode==="light"? 'solid': 'outline'} 
                        colorScheme='blue'>
                            Type
                        </MenuButton>
                        <MenuList minWidth='240px'>
                            <MenuOptionGroup defaultValue='all' type='radio'>
                                <MenuItemOption value='all'>All</MenuItemOption>
                                <MenuItemOption value='small'>Small Team (4-5 people)</MenuItemOption>
                                <MenuItemOption value='large'>Large Team (6-20 people)</MenuItemOption>
                                <MenuItemOption value='intern'>Internship</MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                    <Menu closeOnSelect={false}>
                        <MenuButton 
                        as={Button} 
                        fontSize="sm" 
                        variant={colorMode==="light"? 'solid': 'outline'} 
                        colorScheme='blue'>
                            Year
                        </MenuButton>
                        <MenuList minWidth='240px'>
                            <MenuOptionGroup defaultValue='all' type='radio'>
                                <MenuItemOption value='all'>All</MenuItemOption>
                                <MenuItemOption value='21'>2021-22</MenuItemOption>
                                <MenuItemOption value='22'>2022-23</MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                    <Menu closeOnSelect={false}>
                        <MenuButton 
                        as={Button} 
                        fontSize="sm" 
                        variant={colorMode==="light"? 'solid': 'outline'} 
                        colorScheme='blue'>
                            Tags
                        </MenuButton>
                        <MenuList minWidth='240px'>
                            <MenuOptionGroup title='Framework' type='checkbox'>
                                {/* <MenuItemOption value='vue'>Vue.js</MenuItemOption>
                                <MenuItemOption value='spring'>Spring Framework</MenuItemOption> */}
                                <MenuItemOption value='react'>React.js</MenuItemOption>
                                {/* <MenuItemOption value='React Native'>React Native</MenuItemOption> */}
                                <MenuItemOption value='wix'>Wix</MenuItemOption>
                            </MenuOptionGroup>
                            <MenuDivider />
                            <MenuOptionGroup title='Languages' type='checkbox'>
                                <MenuItemOption value='javascript'>Javascript</MenuItemOption>
                                <MenuItemOption value='jsx'>JSX (React)</MenuItemOption>
                                <MenuItemOption value='html'>HTML/CSS</MenuItemOption>
                                <MenuItemOption value='solidity'>Solidity (Web 3.0)</MenuItemOption>
                                {/* <MenuItemOption value='Python'>Python</MenuItemOption> */}
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                    <InputGroup size='md' flex='1'>
                        <Input
                            pr='4.5rem'
                            placeholder='Enter keyword'
                        />
                        <InputRightElement width='4.5rem'>
                            <IconButton aria-label='Search database' h='1.75rem' icon={<SearchIcon />} />
                        </InputRightElement>
                    </InputGroup>
                </Stack>
                <Box w="100%" minHeight={"40vh"} maxHeight={"65vh"} rounded="2xl" mt="5" overflow="auto">
                    <CardResult/>
                </Box>
            </Box>



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
    )
}

export default Past;
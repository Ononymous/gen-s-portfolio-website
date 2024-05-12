import React from 'react';
import { Text, Stack, Heading, Box, InputGroup, Input, InputRightElement, IconButton, Button, Menu, MenuList, MenuButton, MenuDivider, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import "./App.css"
import { SearchIcon } from '@chakra-ui/icons';
import { useColorMode } from "@chakra-ui/react";
import CardResult from './CardResult';
import { useState } from 'react';


function Experiences(){
    const { colorMode } = useColorMode();
    const [type, setType] = useState('all');
    const [year, setYear] = useState('all');
    const [lang, setLang] = useState([]);
    const [frame, setFrame] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [send, setSend] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSend(keyword.trim().toLowerCase());
        }
    };

    return(
        <Box 
        w={{xl:"55%", lg:"68%" , md:"82%", base:"95%"}} 
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
            maxHeight={"100vh"}
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
                            <MenuOptionGroup onChange={setType} value={type} defaultValue='all' type='radio'>
                                <MenuItemOption value='all'>All</MenuItemOption>
                                <MenuItemOption value='Small Team'>Small Team (4-5 people)</MenuItemOption>
                                <MenuItemOption value='Large Team'>Large Team (6-20 people)</MenuItemOption>
                                <MenuItemOption value='Internship'>Internship</MenuItemOption>
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
                            <MenuOptionGroup onChange={setYear} value={year} defaultValue='all' type='radio'>
                                <MenuItemOption value='all'>All</MenuItemOption>
                                <MenuItemOption value='2021-22'>2021-22</MenuItemOption>
                                <MenuItemOption value='2022-23'>2022-23</MenuItemOption>
                                <MenuItemOption value='2023-24'>2023-24</MenuItemOption>
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
                            <MenuOptionGroup value={frame} onChange={(e) => setFrame(e)} title='Tech' type='checkbox'>
                                <MenuItemOption value='vue'>Vue.js</MenuItemOption>
                                <MenuItemOption value='Spring Boot'>Spring Boot</MenuItemOption>
                                <MenuItemOption value='React.js'>React.js</MenuItemOption>
                                <MenuItemOption value='React Native'>React Native</MenuItemOption>
                                <MenuItemOption value='PyTorch'>PyTorch</MenuItemOption>
                                <MenuItemOption value='Cocos Creator'>Cocos Creator</MenuItemOption>
                                <MenuItemOption value='AWS'>AWS</MenuItemOption>
                            </MenuOptionGroup>
                            <MenuDivider />
                            <MenuOptionGroup value={lang} onChange={(e) => setLang(e)} title='Languages' type='checkbox'>
                                <MenuItemOption value='JavaScript'>Javascript</MenuItemOption>
                                <MenuItemOption value='Solidity'>Solidity (Web 3.0)</MenuItemOption>
                                <MenuItemOption value='Python'>Python</MenuItemOption>
                                <MenuItemOption value='C'>C</MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                    <InputGroup size='md' flex='1'>
                        <Input
                            pr='4.5rem'
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder='Search by keyword in title, description, and tags'
                            onKeyDown={handleKeyDown}
                            onSubmit={() => setSend(keyword.trim().toLowerCase())}
                        />
                        <InputRightElement width='4.5rem'>
                            <IconButton onClick={() => setSend(keyword.trim().toLowerCase())} aria-label='Search database' h='1.75rem' icon={<SearchIcon />} />
                        </InputRightElement>
                    </InputGroup>
                </Stack>
                <Box w="100%" minHeight={"40vh"} maxHeight={"80vh"} rounded="2xl" mt="5" overflow="auto">
                    <CardResult type={type} year={year} lang={lang} frame={frame} send={send}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Experiences;
import React from 'react';
import { Text, Stack, Heading, Box, InputGroup, Input, InputRightElement, IconButton, Button, Menu, MenuList, MenuButton, MenuDivider, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
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
        </Box>
    )
}

export default Past;
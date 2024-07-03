// a stack that has a photo on the left, occupying 1/2 of the screen, and the big letters "Gen Tamada" on the right, occupying 1/2 of the screen
// Under the name, there should be 3 buttons: "About", "Projects", and "Contact"
// The buttons should be spaced evenly across the space below the name

import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Stack,
    Link,
    Button,
    Wrap,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
} from '@chakra-ui/react';

import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub, FiMail } from 'react-icons/fi'
import { ChevronDownIcon } from '@chakra-ui/icons';

import photo from './images/photo.jpg';
import { useColorMode } from '@chakra-ui/react';
import FullResume from './images/FullResume.pdf'
import BackResume from './images/BackResume.pdf'

// add some space before the stack

function PhotoStack() {
    const { colorMode } = useColorMode();
    return (
        <Flex align={'center'} justifyContent={"center"} w="100%">
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 16 }}
                py={{ base: 12, md: 16 }}
                w={{ xl: "55%", lg: "68%", md: "82%", base: "95%" }}
                direction={{ base: 'column', md: 'row' }}>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Box
                        position={'relative'}
                        height={{ xl: '350px', md: '280px', base: '250px' }}
                        rounded={'10'}
                        boxShadow={'dark-lg'}
                        width={{ xl: "full", md: "80%", base: "70%" }}
                        overflow={'hidden'}>

                        <Image
                            alt={'selfie'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={photo}
                        />
                    </Box>
                </Flex>
                <Stack flex={1} spacing={{ base: 5, md: 10 }} w="100%">
                    <Heading
                        lineHeight={1.1}
                        fontWeight={700}
                        fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}>
                            Gen Tamada
                        </Text>
                    </Heading>
                    <Text color={'gray.500'} fontSize={{ md: 'md', lg: 'lg' }}>
                        I am passionate about Machine Learning, Computer Networking, Security, OS, and Distributed Systems. <br/>
                        My goal is to become a developer who can bring real value to the world through my work.
                    </Text>
                    <Wrap spacing={3} align="center" justify="center">
                        <Link href="https://www.linkedin.com/in/gen-tamada/" isExternal>
                            <Button
                                colorScheme={"orange"}
                                variant={colorMode === "light" ? "solid" : "outline"}
                                leftIcon={<FaLinkedinIn />}
                            >
                                LinkedIn
                            </Button>
                        </Link>

                        <Link href="https://github.com/Ononymous" isExternal>
                            <Button
                                colorScheme={"orange"}
                                variant={colorMode === "light" ? "solid" : "outline"}
                                leftIcon={<FiGithub />}
                            >
                                GitHub
                            </Button>
                        </Link>

                        <Link href="mailto:gtamada@cs.ucsb.edu" isExternal>
                            <Button
                                variant={colorMode === "light" ? "solid" : "outline"}
                                leftIcon={<FiMail />}
                                colorScheme={"orange"}
                            >
                                Email
                            </Button>
                        </Link>

                        <Menu>
                            <MenuButton
                                as={Button}
                                leftIcon={<ChevronDownIcon />}
                                variant={colorMode === "light" ? "solid" : "outline"}
                                colorScheme={"orange"}
                            >
                                Resume
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={(event) => {
                                        event.preventDefault();
                                        window.open(FullResume);
                                    }}
                                >
                                    Full-Stack
                                </MenuItem>
                                <MenuItem
                                    onClick={(event) => {
                                        event.preventDefault();
                                        window.open(BackResume);
                                    }}
                                >
                                    System
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Wrap>
                </Stack>
            </Stack>
        </Flex>
    );
}

export default PhotoStack;
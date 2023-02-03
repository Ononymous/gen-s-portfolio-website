// a stack that has a photo on the left, occupying 1/2 of the screen, and the big letters "Gen Tamada" on the right, occupying 1/2 of the screen
// Under the name, there should be 3 buttons: "About", "Projects", and "Contact"
// The buttons should be spaced evenly across the space below the name

import {
    Box,
    Flex,
    IconButton,
    Image,
    Heading,
    Text,
    Stack,
    Link,
} from '@chakra-ui/react';

import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub, FiMail} from 'react-icons/fi'
import {IoNewspaperOutline} from 'react-icons/io5'

import photo from './images/photo.jpg';
import { useColorMode } from '@chakra-ui/react';
import Resume from './images/Resume.pdf'

// add some space before the stack

function PhotoStack() {
    const { colorMode } = useColorMode();
    return (
        <Flex align={'center'} justifyContent={"center"}>
            <Stack
            align={'center'}
            spacing={{ base: 8, md: 16 }}
            py={{ base: 12, md: 16 }}
            w={{xl:"60%", md:"70%", base:"90%"}}
            direction={{ base: 'column', md: 'row' }}>
                <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}>
                <Box
                    position={'relative'}
                    height={{xl:'350px', md:'280px', base:'250px'}}
                    rounded={'10'}
                    boxShadow={'dark-lg'}
                    width={{xl:"full", md:"80%", base:"70%"}}
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
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
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
                    <Text color={'gray.500'} fontSize={{ md: 'lg', lg: 'xl' }}>
                    Currently a student at the University of California Santa Barbara, studying Computer Science. I am passionate about technology and its impact on society.
                    </Text>
                    <Stack direction={'row'} spacing={3}>      
                    {colorMode==="light"?<>
                        <Link href="https://www.linkedin.com/in/gen-tamada-59a7b8220/" isExternal>
                        <IconButton 
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            icon={<FaLinkedinIn/>}
                            _hover={{ bg: 'orange.500' }}/>
                        </Link>
                        
                        <Link href="https://github.com/Ononymous" isExternal>
                        <IconButton 
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            icon={<FiGithub/>}
                            _hover={{ bg: 'orange.500' }}/>
                        </Link>
                        
                        <Link href="mailto:gtamada@cs.ucsb.edu" isExternal>
                        <IconButton 
                            icon={<FiMail/>}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}/>
                        </Link>

                        <IconButton 
                            icon={<IoNewspaperOutline/>}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}
                            onClick={(event) => { event.preventDefault(); window.open(Resume); }}/>
                        </>:

                        <>
                        
                        <Link href="https://www.linkedin.com/in/gen-tamada-59a7b8220/" isExternal>
                        <IconButton 
                            variant={'outline'}
                            colorScheme={'orange'}
                            icon={<FaLinkedinIn/>}/>
                        </Link>
                        
                        <Link href="https://github.com/Ononymous" isExternal>
                        <IconButton 
                            colorScheme={'orange'}
                            icon={<FiGithub/>}
                            variant={'outline'}/>
                        </Link>
                        
                        <Link href="mailto:gtamada@cs.ucsb.edu" isExternal>
                        <IconButton 
                            icon={<FiMail/>}
                            colorScheme={'orange'}
                            variant={'outline'}/>
                        </Link>

                        <IconButton 
                            icon={<IoNewspaperOutline/>}
                            colorScheme={'orange'}
                            variant={'outline'}
                            onClick={(event) => { event.preventDefault(); window.open(Resume); }}/>
                            
                        </>}

                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    );
}

export default PhotoStack;
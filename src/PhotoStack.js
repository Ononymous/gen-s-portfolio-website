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
    Icon,
} from '@chakra-ui/react';

import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub, FiMail} from 'react-icons/fi'
import {IoNewspaperOutline} from 'react-icons/io5'

import photo from './photo.jpg';
// import { useColorMode } from '@chakra-ui/react';

// add some space before the stack

function PhotoStack() {
    // const { colorMode } = useColorMode();
    return (
        <Flex align={'center'} justifyContent={"center"}>
            <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
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
                    height={{xl:'300px', md:'280px', base:'250px'}}
                    rounded={'10'}
                    boxShadow={'2xl'}
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
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}>
                            Gen Tamada
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                    Currently a student at the University of California Santa Barbara, studying Computer Science. I am passionate about technology and its impact on society.
                    </Text>
                    <Stack direction={'row'} spacing={3}>            
                        <IconButton 
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            icon={<FaLinkedinIn/>}
                            _hover={{ bg: 'orange.500' }}/>
                        
                        <IconButton 
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            icon={<FiGithub/>}
                            _hover={{ bg: 'orange.500' }}/>
                        
                        <IconButton 
                            icon={<FiMail/>}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}/>

                        <IconButton 
                            icon={<IoNewspaperOutline/>}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}/>

                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    );
}
export const Blob = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };

export default PhotoStack;
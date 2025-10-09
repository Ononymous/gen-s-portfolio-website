import type { MouseEvent } from 'react';
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
} from '@chakra-ui/react';
import { FaLinkedinIn, FaRegNewspaper } from 'react-icons/fa';
import { FiGithub, FiMail } from 'react-icons/fi';
import { useColorMode } from '@chakra-ui/react';

import photo from '../images/photo.jpg';
import Resume from '../images/Resume.pdf';

import '../App.css';

const PhotoStack = () => {
  const { colorMode } = useColorMode();

  const handleResumeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(Resume, '_blank', 'noopener,noreferrer');
  };

  const buttonVariant = colorMode === 'light' ? 'solid' : 'outline';

  return (
    <Flex align="center" justifyContent="center" w="100%">
      <Stack
        align="center"
        spacing={{ base: 8, md: 12 }}
        pt={{ base: 12, md: 24 }}
        pb={{ base: 12, md: 16 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box
          position="relative"
          height={{ xl: '350px', md: '280px', base: '250px' }}
          flex={1}
          width={{ xl: 'full', md: '80%', base: '70%' }}
          overflow="hidden"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            alt="selfie"
            fit="contain"
            borderRadius="2xl"
            h="100%"
            src={photo}
            objectPosition="center"
          />
        </Box>
        <Stack flex={1} spacing={{ base: 5, md: 5 }} w="100%" justify="start">
          <Heading lineHeight={1.1} fontWeight={700} fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
            <Text as="span" position="relative">
              Gen Tamada
            </Text>
          </Heading>
          <Text color="gray.500" fontSize={{ md: 'md', lg: 'lg' }}>
            CS MS student at UCSB, passionate about Computer Networking, Distributed Systems, Machine Learning, and Operating Systems.
            <br />
            My goal is to become a developer who can bring real value to the world through my work.
          </Text>
          <Wrap spacing={3} align="center" justify="left" w="100%">
            <Link href="https://github.com/Ononymous" isExternal>
              <Button colorScheme="orange" variant={buttonVariant} leftIcon={<FiGithub />}>
                GitHub
              </Button>
            </Link>

            <Link href="https://www.linkedin.com/in/gen-tamada/" isExternal>
              <Button colorScheme="orange" variant={buttonVariant} leftIcon={<FaLinkedinIn />}>
                LinkedIn
              </Button>
            </Link>

            <Button colorScheme="orange" variant={buttonVariant} leftIcon={<FaRegNewspaper />} onClick={handleResumeClick}>
              Resume
            </Button>

            <Link href="mailto:gtamada@cs.ucsb.edu" isExternal>
              <Button variant={buttonVariant} leftIcon={<FiMail />} colorScheme="orange">
                Email
              </Button>
            </Link>
          </Wrap>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default PhotoStack;

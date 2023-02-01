import {
  Box,
  Flex,
  Button,
  Image,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import logo from './images/logo.svg';
import darklogo from './images/darklogo.svg';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// a navbar that has a logo, some buttons for links, and a toggle for dark mode

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Image src={colorMode==='dark'?logo:darklogo} alt="logo" h={8} />
            

            <Flex alignItems={'center'}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
        </Flex>
    </Box>
  );
}
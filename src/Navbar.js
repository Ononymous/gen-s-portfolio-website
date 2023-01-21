import {
  Box,
  Flex,
  Button,
  Image,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import logo from './logo.svg';
import darklogo from './darklogo.svg';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} justifyContent={'fixed'}>
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
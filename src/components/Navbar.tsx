import { Box, Flex, Button, Image, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import logo from '../images/logo.svg';
import darkLogo from '../images/darklogo.svg';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue('gray.100', 'gray.900');
  const logoSrc = colorMode === 'dark' ? logo : darkLogo;

  return (
    <Box bg={backgroundColor} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Image src={logoSrc} alt="logo" h={8} />

        <Flex alignItems="center">
          <Button onClick={toggleColorMode} aria-label="Toggle color mode">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

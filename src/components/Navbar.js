import {
  Box,
  Flex,
  Button,
  Image,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import logo from '../images/logo.svg';
import darklogo from '../images/darklogo.svg';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { useState } from 'react';

// a navbar that has a logo, some buttons for links, and a toggle for dark mode

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode(null);
  // const [deferredPrompt, setDeferredPrompt] = useState(null);

  // window.addEventListener('beforeinstallprompt', (e) => {
  //   // Prevent the mini-infobar from appearing on mobile
  //   e.preventDefault();
  //   // Stash the event so it can be triggered later.
  //   setDeferredPrompt(e);
  //   // Optionally, send analytics event that PWA install promo was shown.
  //   console.log(`'beforeinstallprompt' event was fired.`);
  // });

  // async function handleInstallClick () {
  //   // Show the install prompt
  //   deferredPrompt.prompt();
  //   // Wait for the user to respond to the prompt
  //   const { outcome } = await deferredPrompt.userChoice;
  //   // Optionally, send analytics event with outcome of user choice
  //   console.log(`User response to the install prompt: ${outcome}`);
  //   // We've used the prompt, and can't use it again, throw it away
  //   setDeferredPrompt(null)
  // }
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Image src={colorMode==='dark'?logo:darklogo} alt="logo" h={8} />
            

            <Flex alignItems={'center'}>
                {/* {deferredPrompt && (
                  <Button onClick={handleInstallClick} mr="10px">
                      Install
                  </Button>
                )} */}
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
        </Flex>
    </Box>
  );
}
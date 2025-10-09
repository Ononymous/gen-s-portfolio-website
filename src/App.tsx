import './App.css';

import PhotoStack from './blocks/PhotoStack';
import Now from './blocks/Now';
import Experiences from './blocks/Experiences';
import Skills from './blocks/Skills';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Analytics } from '@vercel/analytics/react';
import { Box, Flex, Spacer, Stack } from '@chakra-ui/react';

const App = () => {
  return (
    <div>
      <Navbar />
      <Flex
        justifyContent="center"
        align="center"
        direction="column"
        mb="20"
        px={{ xl: '16%', lg: '11%', md: '7%', base: '2%' }}
      >
        <PhotoStack />
        <Box className="spacer"></Box>
        <Experiences />
        <Box className="spacer"></Box>
        <Box className="spacer"></Box>
        <Stack direction={{ base: 'column', '2xl': 'row' }} w="100%" spacing={{ base: '100px', '2xl': 12 }}>
          <Box flex={1}>
            <Skills />
            <Spacer />
          </Box>
          <Box flex={1}>
            <Now />
            <Spacer />
          </Box>
        </Stack>
      </Flex>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;

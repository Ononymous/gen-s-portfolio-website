import { Box, Heading, Text } from '@chakra-ui/react';

import '../App.css';

const Now = () => {
  return (
    <Box
      py={{ xl: '10', md: '7', base: '4' }}
      px={{ xl: '10', md: '7', base: '4' }}
      boxShadow="dark-lg"
      rounded="2xl"
    >
      <Heading
        lineHeight={1.5}
        fontWeight={600}
        marginTop={{ xl: '4', md: '3', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
      >
        <Text as="span" position="relative">
          Experience
        </Text>
      </Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        Incoming Software Engineer at Arista Networks, starting September 2026 — returning to the Layer 1 Network team I interned with in 2025.
      </Text>

      <Heading
        lineHeight={1.5}
        fontWeight={600}
        marginTop={{ xl: '7', md: '4', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
      >
        <Text as="span" position="relative">
          Education
        </Text>
      </Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        M.S. in Computer Science at the University of California, Santa Barbara (UCSB), graduated June 2026 through the BS/MS program.
      </Text>
      <br />
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        M.S. project: <i>A Hardware DHCP Client Tile for Beehive</i>, advised by Prof. Jonathan Balkind in the UCSB ArchLab: designing a CPU-free hardware DHCP client for FPGA-based network stacks.
      </Text>

      <Heading
        lineHeight={1.5}
        fontWeight={600}
        marginTop={{ xl: '7', md: '4', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
      >
        <Text as="span" position="relative">
          Teaching
        </Text>
      </Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        Teaching Assistant at UCSB for CMPSC 148 (Computer Science Project Course) in Winter 2026–27.
      </Text>
      <br />
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        Teaching Assistant at UCSB for CMPSC 32 (Advanced Topics in Object-Oriented Computing) in Spring 2026–27, where I worked with the professor to rework the course content with additional OS and C-language topics.
      </Text>
    </Box>
  );
};

export default Now;

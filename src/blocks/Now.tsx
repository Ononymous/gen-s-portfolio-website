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
        marginTop={{ xl: '7', md: '4', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
      >
        <Text as="span" position="relative">
          Education
        </Text>
      </Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        I am currently a Computer Science master at the University of California, Santa Barbara (UCSB), progressing through the BS/MS program with an expected completion in June 2026.
      </Text>
      <br />
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        I am taking Scalable Internet Services (CMPSC 291A), Neural Information Retrieval (CMPSC 291A), and Computational Geometry (CMPSC 235) this quarter.
      </Text>

      <Heading
        lineHeight={1.5}
        fontWeight={600}
        marginTop={{ xl: '7', md: '4', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
      >
        <Text as="span" position="relative">
          Organizations
        </Text>
      </Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        Have participated in the project series of UCSB Data Science Club, Coders SB, SB Hacks in the past, and have successfully risen up the ranks in each of them.
      </Text>
      <br />
      <Text fontSize={{ base: 'md', lg: 'lg' }}>
        Attended previous Finalist Panel for the UCSB Data Science Club for supporting the club's growth and development.
      </Text>
    </Box>
  );
};

export default Now;

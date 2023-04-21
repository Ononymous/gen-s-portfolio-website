import React from 'react';
import { VStack, IconButton, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react';
import { MdSchool, MdGroup, MdCode, MdComputer, MdLanguage, MdSettings } from 'react-icons/md';
import { classMap, clubMap, pyMap, nodeMap, langMap, techMap } from './moreData';

function MoreAboutMe() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = React.useState('');

  const handleClick = (content) => {
    setModalContent(content);
    onOpen();
  };

  const renderGridItem = (icon, label, description, content) => (
    <VStack key={label}>
      <IconButton
        colorScheme={'orange'}
        variant={colorMode==="light"? 'solid': 'outline'}
        aria-label={label}
        fontSize="4xl"
        icon={icon}
        onClick={() => handleClick(content)}
      />
      <Text fontSize="lg" fontWeight="bold" mt={2}>{label}</Text>
      <Text fontSize="sm" textAlign="center">{description}</Text>
    </VStack>
  );
  
  const gridItems = [
    { icon: <MdSchool />, label: 'Classes', content: classMap, description: 'A list of computer science classes taken or currently being taken, along with their completion status.' },
    { icon: <MdGroup />, label: 'Clubs', content: clubMap, description: 'A list of clubs joined, including the number of projects completed in each club.' },
    { icon: <MdCode />, label: 'Python related', content: pyMap, description: 'An array of Python libraries and frameworks, along with experience levels in each.' },
    { icon: <MdComputer />, label: 'Node.js related', content: nodeMap, description: 'A collection of Node.js-related technologies and libraries, with experience levels for each.' },
    { icon: <MdLanguage />, label: 'Languages', content: langMap, description: 'A compilation of programming languages known, with experience levels for each.' },
    { icon: <MdSettings />, label: 'Technologies', content: techMap, description: 'A list of various technologies and tools used, with experience levels in each.' },
  ];

  return (
    <Box
      w={{ xl: '55%', lg: '68%', md: '82%', base: '95%' }}
      py={{ xl: '10', md: '7', base: '4' }}
      px={{ xl: '10', md: '7', base: '4' }}
      minH="50vh"
      boxShadow="dark-lg"
      rounded={'2xl'}
    >
      <Heading
        lineHeight={1.5}
        fontWeight={600}
        marginTop={{ xl: '4', md: '3', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
      >
        <Text as={'span'} position={'relative'}>
          More About Me
        </Text>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {gridItems.map((item) => renderGridItem(item.icon, item.label, item.description, item.content))}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent py={{ xl: '10', md: '7', base: '4' }} px={{ xl: '10', md: '7', base: '4' }}>
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} alignItems="stretch">
              {modalContent}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default MoreAboutMe;
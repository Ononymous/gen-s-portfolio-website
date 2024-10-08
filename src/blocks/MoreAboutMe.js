import React from 'react';
import { VStack, Button, Icon, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Box, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react';
import { MdSchool, MdGroup, MdSettings } from 'react-icons/md';
import { classMap, clubMap, techMap } from '../moreData';

function MoreAboutMe() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = React.useState('');

  const handleClick = (content, description) => {
    setModalContent({ content: content, description: description });
    onOpen();
  };

  const renderGridItem = (icon, label, description, content) => (
    <Button
      key={label}
      height="auto"
      background="transparent"
      _hover={{
        background: colorMode === 'light' ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
        textDecoration: "none",
      }}
      p="10"
      onClick={() => handleClick(content, description)}
    >
      <VStack spacing={2} w="10px">
        <Icon
          color={colorMode === 'light' ? 'white' : 'orange'}
          backgroundColor={colorMode === 'light' ? 'orange' : 'none'}
          aria-label={label}
          as={icon}
          boxSize={20}
          borderRadius="10px"
          borderWidth="2px"
          borderColor="orange"
        />
        <Text
          fontSize="lg"
          fontWeight="bold"
          pt={2}
        >
          {label}
        </Text>
      </VStack>
    </Button>
  );

  const gridItems = [
    { icon: MdSchool, label: 'Classes', content: classMap, description: 'Computer science classes with completion status.' },
  ];

  return (
    <Box
      w={"100%"}
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
      {gridItems.map((item) => renderGridItem(item.icon, item.label, item.description, item.content))}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='xl'
        motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent py={{ xl: '10', md: '7', base: '4' }} px={{ xl: '10', md: '7', base: '4' }}>
          <ModalHeader>{modalContent.description}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} alignItems="stretch">
              {modalContent.content}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default MoreAboutMe;
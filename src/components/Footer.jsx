import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
  
export default function Footer() {
  const [lastEditDate, setLastEditDate] = useState('');

  useEffect(() => {
    async function fetchLastEditDate() {
      try {
        const response = await axios.get('https://api.github.com/repos/Ononymous/gen-s-portfolio-website/branches/main');
        const lastCommitDate = new Date(response.data.commit.commit.author.date);
        setLastEditDate(lastCommitDate.toLocaleDateString());
      } catch (error) {
        console.error('Error fetching the last edit date:', error);
      }
    }

    fetchLastEditDate();
  }, []);
  
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 Created by Gen Tamada with React.js and Chakra UI. All rights reserved. Last edit: {lastEditDate}</Text>
      </Container>
    </Box>
  );
}
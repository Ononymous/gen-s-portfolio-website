import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";

function Future(){
    const { colorMode } = useColorMode();
    return (
        <Box 
        w={{xl:"55%", lg:"68%" , md:"82%", base:"95%"}}
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}} 
        boxShadow="dark-lg" 
        rounded={"2xl"}
        className={colorMode==="light"?"future":"future-dark"}>
            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                Educational Goals
                </Text>
            </Heading>
            <Text>
                I am currently a student at the University of California, Irvine, pursuing a Bachelor of Science in Computer Science. I am expected to graduate in June 2022.
            </Text>
            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                Interests
                </Text>
            </Heading>
            <Text>
                I am currently working on a project called "The Daily Grind", which is a web application that allows users to create and share their own coffee recipes. I am also working on a project called "The Daily Grind", which is a web application that allows users to create and share their own coffee recipes. I am also working on a project called "The Daily Grind", which is a web application that allows users to create and share their own coffee recipes.
            </Text>
            <Heading
            lineHeight={1.5}
            fontWeight={600}
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                Work
                </Text>
            </Heading>
            <Text>
                I enjoy playing video games, watching movies, and playing sports. I also enjoy reading books and listening to music.
            </Text>
        </Box>
    )
}

export default Future
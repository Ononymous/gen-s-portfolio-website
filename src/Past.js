import React from 'react';
import { Text, Heading, Box } from "@chakra-ui/react";
import "./App.css"
import { useColorMode } from "@chakra-ui/react";

function Past(){
    const { colorMode } = useColorMode();
    return(
        <Box 
        w={{xl:"60%", md:"70%", base:"90%"}} 
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}} 
        boxShadow="dark-lg" 
        rounded={"2xl"}
        className={colorMode==="light"?"past":"past-dark"}>
            <Box className="normal">
                <Heading
                lineHeight={1.5}
                fontWeight={600}
                marginTop={{xl:"4", md:"3", base:"2"}}
                marginBottom={{xl:"7", md:"4", base:"2"}}
                fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                    <Text
                    as={'span'}
                    position={'relative'}>
                    Experiences
                    </Text>
                </Heading>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight={500} marginBottom={3}>
                Internship Experience
                </Text>
                <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight={500} marginBottom={3}>
                Other Experiences
                </Text>
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
                    Projects
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
                    Skills
                    </Text>
                </Heading>
                <Text>
                    I enjoy playing video games, watching movies, and playing sports. I also enjoy reading books and listening to music.
                </Text>
            </Box>
        </Box>
    )
}

export default Past;
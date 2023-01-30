

import React from "react"; 
import { Flex, Text, Heading, Box, Spacer } from "@chakra-ui/react";

function About() {
    // an about stack, placed under the photo stack, with a heading "About Me" in large text, center of the page.
    // below the heading, there should be different sections of text, starting with "Now", "Past", and "Future"
    // under the "Now" section, there should be subsections of text, starting with "Education", "Projects", and "Hobbies"
    // under the "Past" section, there should be subsections of text, starting with "Experiences", "Projects", and "Skills"
    // under the "Future" section, there should be subsections of text, starting with "Educational Plans", "Interest", and "Work"
    // this section should mostly use Chakra UI's Text component, with some headings and links
    return (
        <Flex justifyContent={"center"} alignItems={"center"} direction="column">
            <Heading
            lineHeight={1.5}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
                <Text
                as={'span'}
                position={'relative'}>
                About Me
                </Text>
            </Heading>
            <Box w={{xl:"60%", md:"70%", base:"90%"}} py="5" boxShadow="dark-lg" rounded={"2xl"}>
                <Flex justifyContent={"center"} alignItems={"center"} direction="row">
                    <Heading
                    lineHeight={1.5}
                    fontWeight={600}
                    fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                        <Text
                        as={'span'}
                        position={'relative'}>
                        Now
                        </Text>
                    </Heading>
                    <Spacer />
                    <Box>
                        <Heading
                        lineHeight={1.5}
                        fontWeight={600}
                        fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
                            <Text
                            as={'span'}
                            position={'relative'}>
                            Education
                            </Text>
                        </Heading>
                        <Text>
                            I am currently a student at the University of California, Irvine, pursuing a Bachelor of Science in Computer Science. I am expected to graduate in June 2022.
                        </Text>
                        <Heading
                        lineHeight={1.5}
                        fontWeight={600}
                        fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
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
                        fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
                            <Text
                            as={'span'}
                            position={'relative'}>
                            Hobbies
                            </Text>
                        </Heading>
                        <Text>
                            I enjoy playing video games, watching movies, and playing sports. I also enjoy reading books and listening to music.
                        </Text>
                    </Box>
                </Flex>
                <Heading
                lineHeight={1.5}
                fontWeight={600}
                fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                    <Text
                    as={'span'}
                    position={'relative'}>
                    Past
                    </Text>
                </Heading>
                <Heading
                lineHeight={1.5}
                fontWeight={600}
                fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                    <Text
                    as={'span'}
                    position={'relative'}>
                    Future
                    </Text>
                </Heading>
            </Box>
        </Flex>
    );
}

export default About;
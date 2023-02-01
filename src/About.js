
import React from "react"; 
import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import "./App.css"
import { useColorMode } from "@chakra-ui/react";

function About() {
    // an about stack, placed under the photo stack, with a heading "About Me" in large text, center of the page.
    // below the heading, there should be different sections of text, starting with "Now", "Past", and "Future"
    // under the "Now" section, there should be subsections of text, starting with "Education", "Projects", and "Hobbies"
    // under the "Past" section, there should be subsections of text, starting with "Experiences", "Projects", and "Skills"
    // under the "Future" section, there should be subsections of text, starting with "Educational Plans", "Interest", and "Work"
    // this section should mostly use Chakra UI's Text component, with some headings and links
    const { colorMode } = useColorMode();
    return (
        <Flex justifyContent={"center"} alignItems={"center"} direction="column" marginBottom="10">
            <Box className="spacer"></Box>
            <Box 
            w={{xl:"60%", md:"70%", base:"90%"}} 
            py={{xl:"10", md:"7", base:"4"}}
            px={{xl:"10", md:"7", base:"4"}} 
            boxShadow="dark-lg"
            rounded={"2xl"}
            className={colorMode==="light"?"now":"now-dark"}>
                <Box className="normal">
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
            </Box>
            <Box className="spacer"></Box>
            <Box className="spacer"></Box>
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
                    fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
                        <Text
                        as={'span'}
                        position={'relative'}>
                        Experiences
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
                        Skills
                        </Text>
                    </Heading>
                    <Text>
                        I enjoy playing video games, watching movies, and playing sports. I also enjoy reading books and listening to music.
                    </Text>
                </Box>
            </Box>
            <Box className="spacer"></Box>
            <Box className="spacer"></Box>
            <Box 
            w={{xl:"60%", md:"70%", base:"90%"}} 
            py={{xl:"10", md:"7", base:"4"}}
            px={{xl:"10", md:"7", base:"4"}} 
            boxShadow="dark-lg" 
            rounded={"2xl"}
            className={colorMode==="light"?"future":"future-dark"}>
                <Box className="normal">
                    <Heading
                    lineHeight={1.5}
                    fontWeight={600}
                    fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
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
                    fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
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
                    fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
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
            </Box>
        </Flex>
    );
}

export default About;
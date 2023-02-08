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
                I am planning an gaining experiences while as an undergraduate, and applying to a full-time job after graduation. If I gain interest in a certain field that can use my skills, I might consider pursuing higher degrees.
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
                My current interest lies within software development, machine learning, and applying those technologies to aid people in their daily lives.
            </Text>
        </Box>
    )
}

export default Future
import React from 'react';
import { Text, Heading, Box, Tabs, Tab, TabList } from "@chakra-ui/react";
import "../App.css"
import ExpCards from '../components/ExpCards';
import projects from '../data/projects.json'
import { useState } from 'react';


function Experiences(){
    const [type, setType] = useState('all');

    const filteredData = projects.filter((data) => {
        if(type !== "all"){
            if(!data.type.includes(type)){
                return false;
            }
        }
        return true;
    })

    const cards = filteredData.map((card, index) => 
        <ExpCards 
        key={index} 
        {...card}
        />
    )

    return(
        <Box 
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}}
        maxW={"100%"}
        boxShadow="dark-lg" 
        rounded={"2xl"}>
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
            <Box 
            boxShadow="inner" 
            rounded={"2xl"} 
            w="fill" 
            border='1px' 
            borderColor='gray.200'
            p="4">
                <Tabs variant='enclosed'>
                    <TabList mb='1em' 
                    overflowX="scroll" 
                    sx={{
                        scrollbarWidth: 'none',
                        '::-webkit-scrollbar': {
                        display: 'none',
                        },
                    }}>
                        <Tab onClick={() => setType("all")}>All</Tab>
                        <Tab onClick={() => setType("ai")}>Machine Learning</Tab>
                        <Tab onClick={() => setType("front")}>Frontend</Tab>
                        <Tab onClick={() => setType("back")}>Backend</Tab>
                        <Tab onClick={() => setType("system")}>System</Tab>
                        <Tab onClick={() => setType("mobile")}>Mobile</Tab>
                    </TabList>
                </Tabs>
                <Box w="100%" minHeight={"40vh"} maxHeight={"78vh"} rounded="2xl" mt="5" overflow="auto">
                    {cards}
                </Box>
            </Box>
        </Box>
    )
}

export default Experiences;
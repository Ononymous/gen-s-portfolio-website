import React from 'react'
import { Heading, Text, SimpleGrid, Card, CardBody, CardHeader, Box } from '@chakra-ui/react'

function Skills(){
    const skillData = [
        {
            name: 'Java',
            level: 'Somewhat experienced'
        },
        {
            name: 'Python',
            level: 'Experienced'
        },
        {
            name: 'C++',
            level: 'Proficient'
        },
        {
            name: 'JavaScript',
            level: 'Proficient'
        },
        {
            name: 'HTML/CSS',
            level: 'Experienced'
        },
        {
            name: 'Solidity',
            level: 'Familiar'
        },
        {
            name: 'Unix',
            level: 'Somewhat experienced'
        },
    ]
    const skillMap = skillData.map((skill, index) =>
        <Card
        key={index}
        >
            <CardHeader>
                <Heading size='md'>{skill.name}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{skill.level}</Text>
            </CardBody>
        </Card>
    )
    const techData = [
        {
            name: 'React.js',
            level: 'Proficient'
        },
        {
            name: 'Node.js',
            level: 'Somewhat experienced'
        },
        {
            name: 'Wix',
            level: 'Experienced'
        },
        {
            name: 'Firebase',
            level: 'Experienced'
        },
        {
            name: 'Anaconda',
            level: 'Somewhat experienced'
        },
        {
            name: 'Git',
            level: 'Experienced'
        },
        {
            name: 'Fusion 360',
            level: 'Somewhat experienced'
        },
    ]
    const techMap = techData.map((tech, index) =>
        <Card
        key={index}
        >
            <CardHeader>
                <Heading size='md'>{tech.name}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{tech.level}</Text>
            </CardBody>
        </Card>
    )



    return(
        <Box 
        w={{xl:"55%", lg:"68%" , md:"82%", base:"95%"}} 
        py={{xl:"10", md:"7", base:"4"}}
        px={{xl:"10", md:"7", base:"4"}} 
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
                Skills
                </Text>
            </Heading>
            <Heading
            lineHeight={1.5}
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontWeight={500} 
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}>
                <Text
                as={'span'}
                position={'relative'}>
                Languages
                </Text>
            </Heading>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(130px, 1fr))'>
                {skillMap}
            </SimpleGrid>


            <Heading
            lineHeight={1.5}
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontWeight={500} 
            marginTop={{xl:"4", md:"3", base:"2"}}
            marginBottom={{xl:"7", md:"4", base:"2"}}>
                <Text
                as={'span'}
                position={'relative'}>
                Technologies
                </Text>
            </Heading>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(130px, 1fr))'>
                {techMap}
            </SimpleGrid>
        </Box>
    )
}

export default Skills
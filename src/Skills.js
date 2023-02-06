import React from 'react'
import { Heading, Text, SimpleGrid, Card, CardBody, CardHeader, Box, useColorMode } from '@chakra-ui/react'

function Skills(){
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
                    Skills
                    </Text>
                </Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Skills
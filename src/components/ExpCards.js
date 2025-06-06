import React from 'react';
import { Card, Code, CardBody, Heading, Text, Image, Link, Stack } from '@chakra-ui/react';

function ExpCards({ title, description, image, links, tags }){
    const linkMap = links.map((link, index) =>
        <div key={index}>
        {'['}<Link 
        key={index}
        isExternal
        color='teal.300'
        href={link.url}>{link.text}</Link>{'] '}
        </div>
    )

    const tagMap = tags.map((tag, index) =>
        <Code
        key={index}
        ml="2">{tag}</Code>
    )

    const textMap = description.map((text, index) =>
        <Text key={index} pt='1'>{text}</Text>
    )
    
    return(
        <Card
        direction={{ base: 'column', md: 'row' }}
        overflow='hidden'
        variant='outline'
        rounded={"2xl"}
        mb='10'
        mr="2"
        ml="2"
        >
            <Image
            objectFit='cover'
            w={{ base: '100%', md: '40%' }}
            maxH={{ base: '30vh', md: '100%' }}
            src={"/projects/"+image}
            alt='card image'
            />

            <Stack flex={1}>
                <CardBody>
                    <Heading size='md'>{title}</Heading>
                    {textMap}
                    {linkMap}
                    
                    <Text py='1' fontSize="sm">Tags: {tagMap}</Text>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default ExpCards;
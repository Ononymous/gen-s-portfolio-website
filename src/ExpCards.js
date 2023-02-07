import React from 'react';
import { Card, Code, CardBody, Heading, Text, Image, Link, Stack } from '@chakra-ui/react';

function ExpCards({ title, description, image, links, tags }){
    const linkMap = links.map((link, index) =>
        <>
        <Link 
        id={index}
        border={1}
        isExternal
        color='teal.300'
        href={link.url}>{link.text}</Link><br/>
        </>
    )
    const tagMap = tags.map((tag, index) =>
        <Code
        id={index}
        ml="2">{tag}</Code>
    )
    return(
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        rounded={"2xl"}
        mb='3'
        mr="2"
        ml="2"
        >
            <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={image}
            alt='card image'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{title}</Heading>

                    <Text py='2'>{description}</Text>
                    {linkMap}
                    <br/>
                    <Text fontSize="sm">Tech Stack: {tagMap}</Text>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default ExpCards;
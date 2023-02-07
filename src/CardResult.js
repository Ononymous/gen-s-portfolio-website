import React from 'react';
import { Card, Code, CardBody, CardFooter, Heading, Text, Image, Link, Stack } from '@chakra-ui/react';

function CardResult(){
    return(
        <Card
        direction={{ base: 'column', sm: 'row' }}
        // overflow='hidden'
        variant='outline'
        >
            <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>The perfect latte</Heading>

                    <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                    </Text>
                    <Link 
                    isExternal
                    color='teal.300'
                    href="https://gen8009.wixsite.com/soar-foundation">new website</Link>
                </CardBody>

                <CardFooter>
                    <Code mr="2">Hello</Code>
                    <Code mr="2">Hello</Code>
                    <Code mr="2">Hello</Code>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default CardResult;
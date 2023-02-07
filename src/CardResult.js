import React from 'react';
import ExpCards from './ExpCards';

function CardResult(){
    const exampleData = [
        {
            title: 'The perfect latte',
            description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
            image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
            links: [
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
            ],
            tags: ['Hello', 'Hello', 'React.js']
        },
        {
            title: 'The perfect latte',
            description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
            image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
            links: [
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
            ],
            tags: ['Hello', 'Hello', 'Hello']
        },
        {
            title: 'The perfect latte',
            description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
            image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
            links: [
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'new website'
                },
            ],
            tags: ['Hello', 'Hello', 'Hello']
        },
    ]
    const cards = exampleData.map((card, index) => 
        <ExpCards 
        id={index} 
        {...card}
        />
    )

    return(
        <>{cards}</>
    )
}

export default CardResult;
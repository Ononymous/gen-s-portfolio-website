import React from 'react';
import ExpCards from './ExpCards';

function CardResult(){
    const exampleData = [
        {
            title: 'Prototype Website for SOAR Foundation',
            description: [
                'Software Developer Intern at SOAR Foundation',
                'Developed a prototype website for SOAR Foundation using Wix.',
                'The SOAR Foundation was created to distribute scholarships to students.',
            ],
            image: 'https://i.ibb.co/mCZQ2pF/SOARGREENLogo.jpg',
            links: [
                {
                    url: 'https://soarfoundation.net/en/home/',
                    text: 'SOAR Foundation'
                },
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'Wix Prototype'
                },
            ],
            tags: ['Internship', '2021-22', 'Wix']
        },
        {
            title: 'Cryptaid',
            description: [
                'Spring quarter Coders SB project series (collab with UCSB Blockchain club)',
                'Used Moralis.io blockchain to allow users to anonymously gather or send donations to the causes they are supporting.',
            ],
            image: 'https://i.ibb.co/L50pgyn/284461361-336177578482005-7239578205407661108-n.png',
            links: [
                {
                    url: 'https://cryptaid-calee14.vercel.app/',
                    text: 'website'
                },
                {
                    url: 'https://github.com/calee14/cryptaid',
                    text: 'github'
                },
            ],
            tags: ['Small Team', '2021-22', 'React.js', 'Solidity', 'JavaScript', 'HTML/CSS']
        },
        {
            title: '30 Seconds',
            description: [
                'Major League Hacking: SB Hacks VIII',
                'Used a speech-to-text API, Assembly AI, to help users in job interview practices.',
                'Learned and integrated the API into our React.js frontend in 2 days.',
            ],
            image: 'https://i.ibb.co/nPpYrbJ/Screenshot-20230207-121238.png',
            links: [
                {
                    url: 'https://seconds-ef259.web.app/interview',
                    text: 'website'
                },
                {
                    url: 'https://github.com/Ononymous/SBHacks_InterviewPrep',
                    text: 'github'
                },
                {
                    url: 'https://www.assemblyai.com/',
                    text: 'Assembly AI'
                },
            ],
            tags: ['Small Team', '2021-22', 'React.js', 'JavaScript', 'HTML/CSS']
        },
        {
            title: 'Fiesta',
            description: [
                'Fall quarter Coders SB project series',
                'Created an app that helped students at Santa Barbara to find events happening nearby safely and more efficiently.',
                'Learning React.js and API integration for the first time (Google Map).',
            ],
            image: 'https://i.ibb.co/ssxp8XS/Screenshot-20230207-121415.png',
            links: [
                {
                    url: 'https://fiesta-5caa1.web.app/',
                    text: 'website'
                },
                {
                    url: 'https://github.com/Ononymous/fiesta',
                    text: 'github'
                },
            ],
            tags: ['Small Team', '2021-22', 'React.js', 'JavaScript', 'HTML/CSS']
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
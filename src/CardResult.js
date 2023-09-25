import React from 'react';
import ExpCards from './ExpCards';

function CardResult({type, year, lang, frame, send}) {
    const exampleData = [
        // {AirNet}
        // {GauchoCourses}
        {
            title: 'Aquimo LightShow',
            description: [
                'Collaborated with mentor in creating an entertainment app for Aquimo.',
                'Users can scan the QR code on the jumbotron and join the lightshow of their particular section.',
                'Host DJ can use the UI designed with Cocos Creator to broadcast shows for the users\' device.',
            ],
            image: 'https://i.ibb.co/rbzV3Qb/Light-Show-presented-by-Coca-Cola.png',
            links: [
                {
                    url: 'https://lightshow.dev.aquimo.com/?demo=1&product=resume',
                    text: 'demo'
                },
                {
                    url: 'https://aquimo.com/',
                    text: 'Aquimo LLC.'
                },
            ],
            tags: ['Internship', '2022-23', 'JavaScript', 'Cocos Creator', 'HTML/CSS']
        },
        {
            title: 'Noteblock.it',
            description: [
                'Invented a solution that allows an accurate conversion music file into noteblock systems in Minecraft',
                'Implemented a recurrent neural network in PyTorch.',
                'Hosted the demo app on Streamlit Community Cloud.',
            ],
            // image: 'https://lh3.googleusercontent.com/drAPMHPmJ1yAEYmcp5hkg08g08cK1jLgthiN8nCmXxKmtzOrCHmVFVtfA9uOzuHTqRvZWAq6n_PpNSbmiir1uCk=s400',
            image: "https://storage.googleapis.com/s4a-prod-share-preview/default/st_app_screenshot_image/8383528e-3555-4d5c-a612-b43e9eefe609/Raw_App_Screenshot.png",
            links: [
                {
                    url: 'https://ononymous-noteblockit-openunmixcli-54v27e.streamlit.app/',
                    text: 'demo'
                },
                {
                    url: 'https://github.com/Ononymous/Noteblockit',
                    text: 'Github'
                },
                {
                    url: 'https://github.com/sigsep/open-unmix-pytorch',
                    text: 'Open Unmix (reference)'
                },
                {
                    url: 'https://datascienceucsb.org',
                    text: 'UCSB Data Science Club'
                },
            ],
            tags: ['Small Team', '2022-23', 'PyTorch', 'Python', 'Streamlit']
        },
        {
            title: 'Prototype Website for SOAR Foundation',
            description: [
                'Software Developer Intern at SOAR Foundation',
                'Developed a prototype website for SOAR Foundation using Wix.',
                'The SOAR Foundation was created to distribute scholarships to students.',
            ],
            // image: 'https://i.ibb.co/mCZQ2pF/SOARGREENLogo.jpg',
            image: 'https://i.ibb.co/7yb11gk/Home-Soar-Foundation.png',
            links: [
                {
                    url: 'https://gen8009.wixsite.com/soar-foundation',
                    text: 'prototype website'
                },
                {
                    url: 'https://soarfoundation.net/en/home/',
                    text: 'SOAR foundation'
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
            // image: 'https://i.ibb.co/L50pgyn/284461361-336177578482005-7239578205407661108-n.png',
            image: 'https://i.ibb.co/Y8V8tpd/Cryptaid.png',
            links: [
                {
                    url: 'https://cryptaid-calee14.vercel.app/',
                    text: 'website'
                },
                {
                    url: 'https://github.com/calee14/cryptaid',
                    text: 'Github'
                },
                {
                    url: 'https://coderssb.com/',
                    text: 'Coders SB'
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
            // image: 'https://i.ibb.co/nPpYrbJ/Screenshot-20230207-121238.png',
            image: 'https://i.ibb.co/JFRhhq0/30-Seconds.png',
            links: [
                {
                    url: 'https://seconds-ef259.web.app/interview',
                    text: 'website'
                },
                {
                    url: 'https://github.com/Ononymous/SBHacks_InterviewPrep',
                    text: 'Github'
                },
                {
                    url: 'https://www.assemblyai.com/',
                    text: 'Assembly AI'
                },
                {
                    url: 'https://sb-hacks-viii.devpost.com/',
                    text: 'SB Hacks VIII'
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
            // image: 'https://i.ibb.co/ssxp8XS/Screenshot-20230207-121415.png',
            image: 'https://i.ibb.co/sgDGmNc/Fiesta.png',
            links: [
                {
                    url: 'https://fiesta-5caa1.web.app/',
                    text: 'website'
                },
                {
                    url: 'https://github.com/Ononymous/fiesta',
                    text: 'Github'
                },
                {
                    url: 'https://coderssb.com/',
                    text: 'Coders SB'
                },
            ],
            tags: ['Small Team', '2021-22', 'React.js', 'JavaScript', 'HTML/CSS']
        },
    ]
    const filteredData = exampleData.filter((data) => {
        if(type !== "all"){
            if(data.tags[0] !== type){
                return false;
            }
        }
        if(year !== "all"){
            if(data.tags[1] !== year){
                return false;
            }
        }
        if(frame.length !== 0){
            for(let i = 0; i < frame.length; i++){
                if(!data.tags.includes(frame[i])){
                    return false;
                }
            }
        }
        if(lang.length !== 0){
            for(let i = 0; i < lang.length; i++){
                if(!data.tags.includes(lang[i])){
                    return false;
                }
            }
        }
        if(send !== ""){
            if(![data.title, data.description.join(' '), data.tags.join(' ')].join(' ').toLowerCase().includes(send)){
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
        // lang.length !== 0 ? <>{cards}</> : <h1>No entry found</h1>
        <>{cards}</>
    )
}

export default CardResult;
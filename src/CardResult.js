import React from 'react';
import ExpCards from './ExpCards';

function CardResult({type, year, lang, frame, send}) {
    const exampleData = [
        {
            title: 'Refract: Cloaking Photos for Privacy',
            description: [
                'Developed a model that cloaks photos of individuals to protect against unauthorized training for deepfakes, facial recognition, and other harmful forms of identity theft.',
                'Introduced subtle details in the original image to make it appear like the target photo.',
                'Successfully disrupted the feature-identifying capabilities of image-processing models.',
            ],
            image: 'https://i.ibb.co/NTxSY0F/Refract-Poster.png',
            links: [
                {
                    url: 'https://refract-two.vercel.app/',
                    text: 'demo'
                },
                {
                    url: 'https://github.com/heyyysus/refract',
                    text: 'Github'
                },
                {
                    url: 'https://datascienceucsb.org',
                    text: 'UCSB Data Science Club'
                }
            ],
            tags: ['Small Team', '2023-24', 'Python', 'PyTorch', 'React.js', 'JavaScript', 'AWS'],
            type: ['ai', 'front']
        },
        /*
        PROJECTS
        GauchoRide, UCSB Advanced Application Programming Course (tinyurl.com/gauchoride) March 2024 - June 2024
        Full-Stack Developer
        ● Improved upon legacy code for GauchoRide, an application intended for students in need to schedule rides within UCSB
        ● Implemented scheduler page for weekly recurring events, and created Storybook documentation for all new components
        ● Created tests that passes coverage and mutation testing for both frontend and backend
        Created integration and end-to-end tests for the application
        */
        {
            title: 'GauchoRide: UCSB Ride Scheduler',
            description: [
                'Improved upon legacy code for GauchoRide, an application intended for students in need to schedule rides within UCSB.',
                'Implemented scheduler page for weekly recurring events, and created Storybook documentation for all new components.',
                'Created tests that passes coverage and mutation testing for both frontend and backend.',
            ],
            image: 'https://i.ibb.co/F67fNr8/Screenshot-2024-07-02-at-4-50-48-PM.png',
            links: [
                {
                    url: 'https://gauchoride.dokku-00.cs.ucsb.edu/',
                    text: 'Production'
                },
                {
                    url: 'https://gauchoride.dokku-13.cs.ucsb.edu/',
                    text: 'Development'
                },
                {
                    url: 'https://github.com/ucsb-cs156-s24/proj-gauchoride-s24-5pm-5?tab=readme-ov-file',
                    text: 'Github'
                },
            ],
            tags: ['Large Team', '2023-24', 'React.js', 'Spring Boot', 'JavaScript', 'Java'],
            type: ['front', 'back']
        },
        {
            title: 'KOS: Kernel Operating System',
            description: [
                'Developed an operating system in C that can run on a MIPS R3000 32-bit processor simulator.',
                'Supports basic Linux commands like fork, exec, pipe, dup, etc.',
                'For CS170 Operating System class at UCSB.',
            ],
            image: 'https://i.ibb.co/GphpNWS/image.png',
            links: [
                {
                    url: 'https://sites.cs.ucsb.edu/~rich/class/cs170/labs/kos_start/index.html',
                    text: 'lab website'
                },
                {
                    url: 'https://sites.cs.ucsb.edu/~rich/class/cs170/labs/kos_pipe/simulator_lab2.h',
                    text: 'simulator header file'
                },
            ],
            tags: ['Small Team', '2023-24', 'C', 'Linux'],
            type: ['system']
        },
        {
            title: 'AirNet: AR Plane Tracker',
            description: [
                'Developed a plane tracker that lists nearby planes, shows detailed information, and visualizes the plane on the map using AR.',
                'Used React Native, Expo, and Flightradar24 API.',
            ],
            image: 'https://i.ibb.co/zPD5dTs/Screenshot-2024-05-11-at-10-54-40-PM.png',
            links: [
                {
                    url: 'https://github.com/Ononymous/AirNet',
                    text: 'Github'
                },
                {
                    url: 'https://coderssb.com/',
                    text: 'Coders SB'
                },
                {
                    url: 'https://www.flightradar24.com/',
                    text: 'Flightradar24'
                }
            ],
            tags: ['Small Team', '2023-24', 'React Native', 'JavaScript', 'Linear Algebra'],
            type: ['mobile']
        },
        {
            title: 'GauchoCourses: a Better Schedule Planner',
            description: [
                'A quarterly course planner that allows students to see possible schedule combinations for the classes they want to take, and save them for when their pass times come around.',
                'Created with Vue.js on Frontend, Spring Boot on backend',
                'Leagacy code from UCSB Data Science Club alumni',
                'Sponsored by UCSB',
            ],
            image: 'https://i.ibb.co/xHSVwMS/image.png',
            links: [
                {
                    url: 'https://gauchocourses.datascienceucsb.org/#/',
                    text: 'website'
                },
                {
                    url: 'https://github.com/data-science-ucsb/gauchocourses',
                    text: 'Github'
                },
                {
                    url: 'https://datascienceucsb.org',
                    text: 'UCSB Data Science Club'
                }
            ],
            tags: ['Large Team', '2022-23', 'Vue.js', 'Spring Boot', 'JavaScript'],
            type: ['front', 'back']
        },
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
            tags: ['Internship', '2022-23', 'JavaScript', 'Cocos Creator', 'HTML/CSS'],
            type: ['front', 'back']
        },
        {
            title: 'Noteblock.it: Music to Minecraft',
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
            tags: ['Small Team', '2022-23', 'PyTorch', 'Python', 'Streamlit'],
            type: ['ai']
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
            tags: ['Internship', '2021-22', 'Wix'],
            type: ['front']
        },
        {
            title: 'Cryptaid: Decentralized donation platform',
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
            tags: ['Small Team', '2021-22', 'React.js', 'Solidity', 'JavaScript', 'HTML/CSS'],
            type: ['front']
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
            tags: ['Small Team', '2021-22', 'React.js', 'JavaScript', 'HTML/CSS'],
            type: ['front']
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
            tags: ['Small Team', '2021-22', 'React.js', 'JavaScript', 'HTML/CSS'],
            type: ['front']
        },
    ]
    const filteredData = exampleData.filter((data) => {
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
        // lang.length !== 0 ? <>{cards}</> : <h1>No entry found</h1>
        <>{cards}</>
    )
}

export default CardResult;
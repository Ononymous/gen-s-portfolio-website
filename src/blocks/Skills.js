import React from 'react';
import {
    Box,
    Text,
    Heading,
    Flex,
    Icon,
    Progress,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    useColorMode,
    AccordionIcon,
} from '@chakra-ui/react';
import skills from '../data/skills.json';

import { IoLanguage, IoLogoJavascript } from "react-icons/io5";
import { TbLanguageHiragana } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { SiCplusplus, SiC, SiSolidity } from "react-icons/si";
import { FaPython, FaHtml5, FaJava, FaLinux } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaGit } from "react-icons/fa6";


export default function Skills() {
    // [
    //     {
    //         "name": "English",
    //         "label": "Native",
    //         "level": 97
    //     },
    //     {
    //         "name": "Japanese",
    //         "label": "Native",
    //         "level": 95
    //     },
    //     {
    //         "name": "Mandarin",
    //         "label": "Native",
    //         "level": 95
    //     },
    //     {
    //         "name": "Python",
    //         "level": 90,
    //         "subclass": [
    //             {
    //                 "name": "collections",
    //                 "level": 90
    //             },
    //             {
    //                 "name": "PyTorch",
    //                 "level": 80
    //             },
    //             {
    //                 "name": "Pandas",
    //                 "level": 80
    //             },
    //             {
    //                 "name": "NumPy",
    //                 "level": 80
    //             },
    //             {
    //                 "name": "Librosa",
    //                 "level": 75
    //             },
    //             {
    //                 "name": "Streamlit",
    //                 "level": 70
    //             },
    //             {
    //                 "name": "Matplotlib",
    //                 "level": 68
    //             },
    //             {
    //                 "name": "Anaconda",
    //                 "level": 68
    //             },
    //             {
    //                 "name": "TorchVision",
    //                 "level": 65
    //             },
    //             {
    //                 "name": "TensorFlow",
    //                 "level": 60
    //             },
    //             {
    //                 "name": "Scipy",
    //                 "level": 60
    //             }
    //         ]
    //     },
    //     {
    //         "name": "C++",
    //         "level": 90
    //     },
    //     {
    //         "name": "C",
    //         "level": 85
    //     },
    //     {
    //         "name": "JavaScript",
    //         "level": 85,
    //         "subclass": [
    //             {
    //                 "name": "Node.js",
    //                 "level": 90
    //             },
    //             {
    //                 "name": "React.js",
    //                 "level": 90
    //             },
    //             {
    //                 "name": "Expo Mobile Development",
    //                 "level": 85
    //             },
    //             {
    //                 "name": "React Native",
    //                 "level": 80
    //             },
    //             {
    //                 "name": "Chakra UI",
    //                 "level": 80
    //             },
    //             {
    //                 "name": "Tailwind CSS",
    //                 "level": 75
    //             },
    //             {
    //                 "name": "Axios",
    //                 "level": 75
    //             },
    //             {
    //                 "name": "React Navigation",
    //                 "level": 75
    //             },
    //             {
    //                 "name": "Firebase",
    //                 "level": 75
    //             }
    //         ]
    //     },
    //     {
    //         "name": "Linux",
    //         "level": 80
    //     },
    //     {
    //         "name": "HTML/CSS",
    //         "level": 70
    //     },
    //     {
    //         "name": "Java",
    //         "level": 68,
    //         "subclass": [
    //             {
    //                 "name": "Spring Boot",
    //                 "level": 68
    //             }
    //         ]
    //     },
    //     {
    //         "name": "Solidity",
    //         "level": 65
    //     },
    //     {
    //         "name": "SQL",
    //         "level": 60
    //     }
    // ]
    // i want to map the skills data to a list of components, each with its title, progress bar from chakra, and a label depending on the level (if provided, use the specific label)
    // instead of using box, use accordion for each skill, and for each subskill, use a box
    // if skill has no subclass, just render the skill with no button to expand

    const LabelFromLevel = (level) => {
        switch (Math.ceil(level / 10)) {
            case 10:
                return "Expert"
            case 9:
                return "Experienced"
            case 8:
                return "Advanced"
            case 7:
                return "Skilled"
            case 6:
                return "Proficient"
            case 5:
                return "Competent"
            case 4:
                return "Intermediate"
            case 3:
                return "Familiar"
            case 2:
                return "Beginner"
            default:
                return "Novice"
        }
    }

    const renderSubSkills = (subskills) => {
        return subskills.map((subskill, index) => {
            return (
                <Flex direction="row" justify="center" align="center" key={index} py={2} w="100%">
                    <Text ml="5%" w="10%">{subskill.name}</Text>
                    <Progress value={subskill.level} w="60%" mx="5%" />
                    <Text w="15%">{subskill.label ? subskill.label : LabelFromLevel(subskill.level)}</Text>
                </Flex>
            )
        })
    }

    const IconMap = {
        "Mandarin": IoLanguage,
        "Japanese": TbLanguageHiragana,
        "English": RiEnglishInput,
        "Python": FaPython,
        "C++": SiCplusplus,
        "C": SiC,
        "JavaScript": IoLogoJavascript,
        "Linux": FaLinux,
        "HTML/CSS": FaHtml5,
        "Java": FaJava,
        "Solidity": SiSolidity,
        "SQL": PiFileSqlDuotone,
        "Git": FaGit
    }

    const { colorMode } = useColorMode();

    // 
    const skillList = skills.map((skill, index) => {
        return (
            <AccordionItem key={index}>
                <AccordionButton>
                    <Icon 
                        as={IconMap[skill.name]} 
                        boxSize={"4.5%"}
                        p="0.25%"
                        color={colorMode === 'light' ? 'white' : 'orange'}
                        backgroundColor={colorMode === 'light' ? 'orange' : 'none'}
                        aria-label={skill.name}
                        borderRadius="10px"
                        borderWidth="2px"
                        borderColor="orange" />
                    <Box w="8%" ml="2%" textAlign="left">
                        <Text fontWeight={"semibold"}>{skill.name}</Text>
                    </Box>
                    <Progress value={skill.level} w="60%" mx="5%"/>
                    <Text justify="right" align="start" fontWeight={"semibold"} w="10%">{skill.label ? skill.label : LabelFromLevel(skill.level)}</Text>
                    {skill.subclass && <AccordionIcon w="5%" />}
                </AccordionButton>
                {
                    skill.subclass && <AccordionPanel pb={4}>
                        {renderSubSkills(skill.subclass)}
                    </AccordionPanel>
                }
            </AccordionItem>
        )
    })
    return (
        <Box
            py={{ xl: "10", md: "7", base: "4" }}
            px={{ xl: "10", md: "7", base: "4" }}
            boxShadow="dark-lg"
            rounded={"2xl"}
            w="100%"
        >
            <Heading
                lineHeight={1.5}
                fontWeight={600}
                marginTop={{ xl: "4", md: "3", base: "2" }}
                marginBottom={{ xl: "7", md: "4", base: "2" }}
                fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                <Text
                    as={'span'}
                    position={'relative'}>
                    Skills
                </Text>
            </Heading>
            <Accordion allowToggle>{skillList}</Accordion>
        </Box>
    )
}
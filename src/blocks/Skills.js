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
    Stack,
    Grid,
    GridItem
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

    const renderSubSkills = (subskills) => {
        return subskills.map((subskill, index) => {
            return (
                <GridItem key={index}>{subskill}</GridItem>
            )
        })
    }

    const skillList = skills.map((skill, index) => {
        return (
            <AccordionItem key={index}>
                <AccordionButton>
                    <Box direction="column" w="100%">
                        <Stack direction="row" w="100%" justify="start" align="center">
                            <Stack direction="row" w="95%" justify="start" align="center">
                                <Icon 
                                    as={IconMap[skill.name]} 
                                    boxSize={"8%"}
                                    p="1%"
                                    color={'gray.500'}
                                    aria-label={skill.name} />
                                <Box w="20%" textAlign="left">
                                    <Text fontWeight={"semibold"}>{skill.name}</Text>
                                </Box>
                                <Box w="42%"/>
                                <Text justify="center" align="end" w="30%">{skill.label ? skill.label : LabelFromLevel(skill.level)}</Text>
                            </Stack>
                            {skill.subclass && <AccordionIcon boxSize={"5%"} />}
                        </Stack>
                        <Progress value={skill.level} w="87%" ml="7.6%"/>
                    </Box>
                </AccordionButton>
                {skill.subclass && <AccordionPanel pb={4}>
                    <Grid templateColumns='repeat(3, 1fr)' gap={4} p="3" bg="gray.100">
                        {renderSubSkills(skill.subclass)}
                    </Grid>
                </AccordionPanel>}
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
            flex={1}
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
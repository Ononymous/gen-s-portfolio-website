import {
  Box,
  Text,
  Heading,
  Icon,
  Progress,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import { IoLanguage, IoLogoJavascript } from 'react-icons/io5';
import { TbLanguageHiragana } from 'react-icons/tb';
import { RiEnglishInput } from 'react-icons/ri';
import { SiCplusplus } from 'react-icons/si';
import { FaPython, FaJava, FaLinux } from 'react-icons/fa';
import { PiFileSqlDuotone } from 'react-icons/pi';

import skills from '../data/skills.json';

interface Skill {
  name: string;
  label?: string;
  level: number;
  subclass?: string[];
}

const skillsData = skills as Skill[];

const iconMap: Record<string, IconType> = {
  Mandarin: IoLanguage,
  Japanese: TbLanguageHiragana,
  English: RiEnglishInput,
  Python: FaPython,
  'C/C++': SiCplusplus,
  JavaScript: IoLogoJavascript,
  Linux: FaLinux,
  Java: FaJava,
  SQL: PiFileSqlDuotone,
};

const labelFromLevel = (level: number): string => {
  switch (Math.ceil(level / 10)) {
    case 10:
      return 'Expert';
    case 9:
      return 'Experienced';
    case 8:
      return 'Advanced';
    case 7:
      return 'Skilled';
    case 6:
      return 'Proficient';
    case 5:
      return 'Competent';
    case 4:
      return 'Intermediate';
    case 3:
      return 'Familiar';
    case 2:
      return 'Beginner';
    default:
      return 'Novice';
  }
};

const Skills = () => {
  return (
    <Box
      py={{ xl: '10', md: '7', base: '4' }}
      px={{ xl: '10', md: '7', base: '4' }}
      boxShadow="dark-lg"
      rounded="2xl"
      w="100%"
      flex={1}
    >
      <Heading
        lineHeight={1.5}
        fontWeight={600}
        marginTop={{ xl: '4', md: '3', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
      >
        <Text as="span" position="relative">
          Skills
        </Text>
      </Heading>
      <Accordion allowToggle>
        {skillsData.map((skill) => {
          const iconComponent = iconMap[skill.name];
          const displayLabel = skill.label ?? labelFromLevel(skill.level);

          return (
            <AccordionItem key={skill.name}>
              <AccordionButton>
                <Box w="100%">
                  <Stack direction="row" w="100%" align="center" spacing={4}>
                    {iconComponent && (
                      <Icon as={iconComponent} boxSize={8} color="gray.500" aria-label={skill.name} />
                    )}
                    <Text flexBasis="20%" textAlign="left" fontWeight="semibold">
                      {skill.name}
                    </Text>
                    <Box flex="1" />
                    <Text textAlign="right" flexBasis="30%">
                      {displayLabel}
                    </Text>
                    {skill.subclass && <AccordionIcon />}
                  </Stack>
                  <Progress value={skill.level} w="87%" ml="7.6%" mt={2} />
                </Box>
              </AccordionButton>
              {skill.subclass && (
                <AccordionPanel pb={4}>
                  <Grid templateColumns="repeat(3, 1fr)" gap={4} p="3" bg="gray.100">
                    {skill.subclass.map((subskill) => (
                      <GridItem key={subskill}>{subskill}</GridItem>
                    ))}
                  </Grid>
                </AccordionPanel>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Skills;

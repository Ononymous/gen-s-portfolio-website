import { useMemo, useState } from 'react';
import { Box, Tabs, Tab, TabList, Text, Heading } from '@chakra-ui/react';

import '../App.css';
import ExpCards from '../components/ExpCards';
import projects from '../data/projects.json';

interface ProjectLink {
  text: string;
  url: string;
}

interface Project {
  title: string;
  description: string[];
  image: string;
  links: ProjectLink[];
  tags: string[];
  type: string[];
}

type ProjectFilter = 'all' | 'ai' | 'front' | 'back' | 'system' | 'mobile';

const projectData = projects as Project[];

const Experiences = () => {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projectData;
    }

    return projectData.filter((project) => project.type.includes(filter));
  }, [filter]);

  return (
    <Box
      py={{ xl: '10', md: '7', base: '4' }}
      px={{ xl: '10', md: '7', base: '4' }}
      maxW="100%"
      boxShadow="dark-lg"
      rounded="2xl"
    >
      <Heading
        lineHeight={1.5}
        fontWeight={600}
        marginTop={{ xl: '4', md: '3', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
      >
        <Text as="span" position="relative">
          Experiences
        </Text>
      </Heading>
      <Box
        boxShadow="inner"
        rounded="2xl"
        w="full"
        border="1px"
        borderColor="gray.200"
        p="4"
      >
        <Tabs variant="enclosed">
          <TabList
            mb="1em"
            overflowX="scroll"
            sx={{
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Tab onClick={() => setFilter('all')}>All</Tab>
            <Tab onClick={() => setFilter('ai')}>Machine Learning</Tab>
            <Tab onClick={() => setFilter('front')}>Frontend</Tab>
            <Tab onClick={() => setFilter('back')}>Backend</Tab>
            <Tab onClick={() => setFilter('system')}>System</Tab>
            <Tab onClick={() => setFilter('mobile')}>Mobile</Tab>
          </TabList>
        </Tabs>
        <Box w="100%" minHeight="40vh" maxHeight="78vh" rounded="2xl" mt="5" overflow="auto">
          {filteredProjects.map((project) => (
            <ExpCards key={project.title} {...project} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experiences;

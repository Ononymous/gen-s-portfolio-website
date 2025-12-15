import { useMemo, useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  TabList,
  Text,
  Heading,
  HStack,
  Switch,
  FormControl,
  FormLabel,
  VStack,
  Checkbox,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

import '../App.css';
import ExpCards from '../components/ExpCards';
import NetworkGraph from '../components/NetworkGraph';
import projects from '../data/projects.json';
import { transformProjectsToGraph, type Project, type ViewMode } from '../utils/graphUtils';

type ProjectFilter = 'all' | 'ai' | 'front' | 'back' | 'system' | 'mobile';

const projectData = projects as Project[];

const Experiences = () => {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [isNetworkView, setIsNetworkView] = useState(false);
  const [viewModes, setViewModes] = useState<ViewMode[]>(['category']);

  const toggleViewMode = (mode: ViewMode) => {
    setViewModes(prev => 
      prev.includes(mode) 
        ? prev.filter(m => m !== mode)
        : [...prev, mode]
    );
  };

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projectData;
    }

    return projectData.filter((project) => project.type.includes(filter));
  }, [filter]);

  const graphData = useMemo(() => {
    return transformProjectsToGraph(filteredProjects, viewModes);
  }, [filteredProjects, viewModes]);

  return (
    <Box
      py={{ xl: '10', md: '7', base: '4' }}
      px={{ xl: '10', md: '7', base: '4' }}
      maxW="100%"
      w={isNetworkView ? "calc(100vw - 4%)" : "100%"}
      ml={isNetworkView ? { xl: "calc(-16% + 2%)", lg: "calc(-11% + 2%)", md: "calc(-7% + 2%)", base: "0" } : "0"}
      mr={isNetworkView ? { xl: "calc(-16% + 2%)", lg: "calc(-11% + 2%)", md: "calc(-7% + 2%)", base: "0" } : "0"}
      boxShadow="dark-lg"
      rounded="2xl"
    >
      <HStack
        justify="space-between"
        align="center"
        marginTop={{ xl: '4', md: '3', base: '2' }}
        marginBottom={{ xl: '7', md: '4', base: '2' }}
        flexWrap="wrap"
        gap={4}
      >
        <Heading
          lineHeight={1.5}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
        >
          <Text as="span" position="relative">
            Experiences
          </Text>
        </Heading>
        
        <FormControl display="flex" alignItems="center" w="auto">
          <FormLabel htmlFor="network-view" mb="0" fontSize={{ base: 'sm', md: 'md' }}>
            Network View (Prototype)
          </FormLabel>
          <Switch
            id="network-view"
            isChecked={isNetworkView}
            onChange={(e) => setIsNetworkView(e.target.checked)}
            colorScheme="teal"
          />
        </FormControl>
      </HStack>
      <Box
        boxShadow="inner"
        rounded="2xl"
        w="full"
        border="1px"
        borderColor="gray.200"
        p="4"
      >
        {isNetworkView ? (
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel fontSize="sm" mb={2}>
                Group by:
              </FormLabel>
              <Wrap spacing={4}>
                <WrapItem>
                  <Checkbox
                    isChecked={viewModes.includes('category')}
                    onChange={() => toggleViewMode('category')}
                    colorScheme="teal"
                  >
                    Category
                  </Checkbox>
                </WrapItem>
                <WrapItem>
                  <Checkbox
                    isChecked={viewModes.includes('date')}
                    onChange={() => toggleViewMode('date')}
                    colorScheme="teal"
                  >
                    Year
                  </Checkbox>
                </WrapItem>
                <WrapItem>
                  <Checkbox
                    isChecked={viewModes.includes('workType')}
                    onChange={() => toggleViewMode('workType')}
                    colorScheme="teal"
                  >
                    Work Type
                  </Checkbox>
                </WrapItem>
                <WrapItem>
                  <Checkbox
                    isChecked={viewModes.includes('library')}
                    onChange={() => toggleViewMode('library')}
                    colorScheme="teal"
                  >
                    Library/Language
                  </Checkbox>
                </WrapItem>
              </Wrap>
            </FormControl>
            
            <NetworkGraph data={graphData} viewModes={viewModes} />
          </VStack>
        ) : (
          <>
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
                <Tab onClick={() => setFilter('system')}>System</Tab>
                <Tab onClick={() => setFilter('back')}>Backend</Tab>
                <Tab onClick={() => setFilter('front')}>Frontend</Tab>
                <Tab onClick={() => setFilter('mobile')}>Mobile</Tab>
              </TabList>
            </Tabs>
            <Box w="100%" minHeight="40vh" maxHeight="78vh" rounded="2xl" mt="5" overflow="auto">
              {filteredProjects.map((project) => (
                <ExpCards key={project.title} {...project} />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Experiences;

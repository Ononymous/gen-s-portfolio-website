import { Text, Flex } from "@chakra-ui/react"

const classData = [
    {
        name: 'Data Structures and Algorithms I (CMPSC 130A)',
        level: 'A'
    },
    {
        name: 'Computer Architecture (CMPSC 154)',
        level: 'A'
    },
    {
        name: 'Introduction to Computational Science (CMPSC 111)',
        level: 'A'
    },
    {
        name: 'Data Structures and Algorithms II (CMPSC 130B)',
        level: 'A'
    },
    {
        name: 'Automata and Formal Languages (CMPSC 138)',
        level: 'A+'
    },
]
export const classMap = classData.map((data, index) =>
    <Flex key={index} justify="space-between" wrap="nowrap">
        <Text flex={1} minWidth="60%">{data.name}</Text>
        <Text flex={1} minWidth="40%" textAlign="right">{data.level}</Text>
    </Flex>
)


const nodeData = [
    {
        name: 'React.js',
        level: 'Proficient'
    },
    {
        name: 'React Native',
        level: 'Experienced'
    },
    {
        name: 'Expo',
        level: 'Proficient'
    },
    {
        name: 'Chakra UI',
        level: 'Proficient'
    },
    {
        name: 'Material UI',
        level: 'Experienced'
    },
    {
        name: 'Axios',
        level: 'Experienced'
    },
    {
        name: 'Moralis',
        level: 'Somewhat experienced'
    },
    {
        name: 'React Navigation',
        level: 'Experienced'
    },
    {
        name: 'Firebase (Google Cloud Platform)',
        level: 'Experienced'
    },
]
export const nodeMap = nodeData.map((data, index) =>
    <Flex key={index} justify="space-between" wrap="nowrap">
        <Text flex={1} minWidth="60%">{data.name}</Text>
        <Text flex={1} minWidth="40%" textAlign="right">{data.level}</Text>
    </Flex>
)


const pyData = [
    {
        name: 'Anaconda',
        level: 'Somewhat experienced'
    },
    {
        name: 'Streamlit',
        level: 'Experienced'
    },
    {
        name: 'PyTorch',
        level: 'Somewhat experienced'
    },
    {
        name: 'TensorFlow',
        level: 'Familiar'
    },
    {
        name: 'Pandas',
        level: 'Experienced'
    },
    {
        name: 'NumPy',
        level: 'Experienced'
    },
    {
        name: 'Matplotlib',
        level: 'Experienced'
    },
    {
        name: 'Scipy',
        level: 'Familiar'
    },
    {
        name: 'Librosa',
        level: 'Experienced'
    },
]
export const pyMap = pyData.map((data, index) =>
    <Flex key={index} justify="space-between" wrap="nowrap">
        <Text flex={1} minWidth="60%">{data.name}</Text>
        <Text flex={1} minWidth="40%" textAlign="right">{data.level}</Text>
    </Flex>
)


const clubData = [
    {
        name: 'Coders SB Club',
        level: 'Member (3 projects)'
    },
    {
        name: 'Data Science Club',
        level: 'Member (1 project)'
    },
    {
        name: 'SB Hacks',
        level: 'Former participant and current organizor (2 project)'
    }
]
export const clubMap = clubData.map((data, index) =>
    <Flex key={index} justify="space-between" wrap="nowrap">
        <Text flex={1} minWidth="60%">{data.name}</Text>
        <Text flex={1} minWidth="40%" textAlign="right">{data.level}</Text>
    </Flex>
)


const langData = [
    {
        name: 'Java',
        level: 'Somewhat experienced'
    },
    {
        name: 'Python',
        level: 'Proficient'
    },
    {
        name: 'C++',
        level: 'Proficient'
    },
    {
        name: 'JavaScript',
        level: 'Proficient'
    },
    {
        name: 'HTML/CSS',
        level: 'Experienced'
    },
    {
        name: 'Solidity',
        level: 'Familiar'
    },
    {
        name: 'Unix',
        level: 'Somewhat experienced'
    },
]
export const langMap = langData.map((data, index) =>
    <Flex key={index} justify="space-between" wrap="nowrap">
        <Text flex={1} minWidth="60%">{data.name}</Text>
        <Text flex={1} minWidth="40%" textAlign="right">{data.level}</Text>
    </Flex>
)


const techData = [
    {
        name: 'Wix',
        level: 'Experienced'
    },
    {
        name: 'Git (Version Control)',
        level: 'Experienced'
    },
    {
        name: 'Fusion 360 (3D modeling)',
        level: 'Somewhat experienced'
    },
    {
        name: 'Cocos Creator (Game Engine)',
        level: 'Experienced'
    }
]
export const techMap = techData.map((data, index) =>
    <Flex key={index} justify="space-between" wrap="nowrap">
        <Text flex={1} minWidth="60%">{data.name}</Text>
        <Text flex={1} minWidth="40%" textAlign="right">{data.level}</Text>
    </Flex>
)
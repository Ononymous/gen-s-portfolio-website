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
        name: 'Data Structures and Algorithms II (CMPSC 130B)',
        level: 'A'
    },
    {
        name: "Special Topics: Internet of Things (CMPSC 190B)",
        level: 'A'
    },
    {
        name: "Computer Communication Networks (CMPSC 176A)",
        level: 'A'
    },
    {
        name: "Operating Systems (CMPSC 170)",
        level: 'A'
    },
    {
        name: "Special Topics: Data Structure and Algorithms (CMPSC 190A)",
        level: 'A'
    },
    {
        name: "Compilers (CMPSC 160)",
        level: 'A+'
    },
    {
        name: "Computer Security (CMPSC 177)",
        level: 'A'
    },
    {
        name: "Advanced Application Development (CMPSC 156)",
        level: 'A+'
    },
]
export const classMap = classData.reverse().map((data, index) =>
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
        level: 'Proficient'
    },
    {
        name: 'Expo Mobile Development',
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
        name: 'Chakra UI',
        level: 'Experienced'
    },
    {
        name: 'Tailwind CSS',
        level: 'Experienced'
    },
    {
        name: 'Axios',
        level: 'Experienced'
    },
    {
        name: 'React Navigation',
        level: 'Experienced'
    },
    {
        name: 'Firebase (Google Cloud Platform)',
        level: 'Experienced'
    },
    {
        name: 'Moralis',
        level: 'Somewhat experienced'
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
        name: 'PyTorch',
        level: 'Experienced'
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
        name: 'Librosa',
        level: 'Experienced'
    },
    {
        name: 'Streamlit',
        level: 'Experienced'
    },
    {
        name: 'Matplotlib',
        level: 'Experienced'
    },
    {
        name: 'Anaconda',
        level: 'Somewhat experienced'
    },
    {
        name: 'TorchVision',
        level: 'Familiar'
    },
    {
        name: 'TensorFlow',
        level: 'Familiar'
    },
    {
        name: 'Scipy',
        level: 'Familiar'
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
        name: 'UCSB Theta Tau Professional Engineering Fraternity',
        level: 'Active (Profession Development Head)'
    },
    {
        name: 'Coders SB Club',
        level: 'Member (3 projects)'
    },
    {
        name: 'Data Science Club',
        level: 'Member/Organizor (2 project)'
    },
    {
        name: 'SB Hacks',
        level: 'Participant (2 project)'
    },
]
export const clubMap = clubData.map((data, index) =>
    <Flex key={index} justify="space-between" wrap="nowrap">
        <Text flex={1} minWidth="60%">{data.name}</Text>
        <Text flex={1} minWidth="40%" textAlign="right">{data.level}</Text>
    </Flex>
)


const langData = [
    {
        name: 'Japanese',
        level: 'Native'
    },
    {
        name: 'English',
        level: 'Native'
    },
    {
        name: 'Mandarin',
        level: 'Native'
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
        name: 'C',
        level: 'Proficient'
    },
    {
        name: 'Linux',
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
        name: 'Java',
        level: 'Experienced'
    },
    {
        name: 'Solidity',
        level: 'Familiar'
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
        name: 'Linux',
        level: 'Proficient'
    },
    {
        name: 'Git',
        level: 'Proficient'
    },
    {
        name: 'Wix',
        level: 'Experienced'
    },
    {
        name: 'Cocos Creator (Game Engine)',
        level: 'Experienced'
    },
    {
        name: 'Fusion 360 (3D modeling)',
        level: 'Somewhat experienced'
    },
]
export const techMap = techData.map((data, index) =>
    <Flex key={index} justify="space-between" wrap="nowrap">
        <Text flex={1} minWidth="60%">{data.name}</Text>
        <Text flex={1} minWidth="40%" textAlign="right">{data.level}</Text>
    </Flex>
)
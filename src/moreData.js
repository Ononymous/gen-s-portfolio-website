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
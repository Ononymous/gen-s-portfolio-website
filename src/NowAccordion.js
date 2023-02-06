import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Link, UnorderedList, ListItem } from "@chakra-ui/react"

function NowAccordion({name, link, linkText, listText}) {
    const itemList = listText.map((text) =>
    <ListItem>{text}</ListItem>
    )

    return(
        <AccordionItem>
            <AccordionButton>
                <Box as="span"
                fontSize={{ base: 'lg', lg: 'xl' }}
                fontWeight={500} 
                flex='1' 
                textAlign='left'>
                {name}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                <Link 
                isExternal
                color='teal.300' 
                fontSize={{ base: 'md', lg: 'lg' }}
                href={link}>
                {linkText}
                </Link>
                <UnorderedList spacing={1} fontSize={{ base: 'md', lg: 'lg' }} marginBottom={{xl:"5", md:"3", base:"2"}}>
                    {itemList}
                </UnorderedList>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default NowAccordion
import React from 'react';
import { Flex, Text, Box, Divider, Heading,
         Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
       } from "@chakra-ui/react";


const folderList = ["Neuroscience", "Computer Science", "English"];
const neuroscienceList = ["Neuropharmacology", "Neural Development"];
const csList = ["Discrete Structures", "Data Structures"];
const englishList = ["Grammar", "Books"]; 



export default function SideBar() {
    return (
    <Box
        w = "100%"
        align = "right"
    > 

{/* flex within the box to create a side bar area */}
        <Flex
            pos="sitcky"
            left="5"
            h="100vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w="200px"
            flexDir="column"
            justifyContent="space-between"
            bg = "purple"
        >
{/* flex within the flex allows us to seperate our flex into 2 areas (2 more flexes) */}
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems="flex-start"
                mb={4}
            >
{/* area 1 is for the username stuff */}
                <Flex mt={1} mb={3} align="center">
                    <Flex flexDir="column">
                        <Heading as="h3" size="sm" color="gray"> Flashcard App</Heading>
                        <Text as="h3" size ="xs" color = "gray"> Username </Text>
                    </Flex>
                </Flex>

{/* area 2 is for the folders and decks */}
                <Divider /> 
                <Flex mt={3} align="center">
                    <Flex flexDir="column">
                        <Heading as="h3" size="sm" color="gray"> Folders & Decks </Heading>
                        {folderList.map(txt => <Text color = "blue">{txt}</Text>)}


                        <Accordion defaultIndex={[0]} allowMultiple>

                        {/* while we have something in our array, we create these accordion items */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Folder Name
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Decks within the corresponding folder name
                                </AccordionPanel>
                            </AccordionItem>
                            </Accordion>



                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </Box>
    )
}



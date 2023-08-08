import React from 'react';
import { Flex, Text, Box, Divider, Heading, Button,
         Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
         Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider
       } from "@chakra-ui/react";
import backgroundImage from'./backgroundImage.png';



const folderData = {
    "Neuroscience": ["Neuropharmacology", "Neural Development"],
    "Computer Science": ["Discrete Structures", "Data Structures"],
    "English":["Grammar", "Books"],
};

export default function SideBar() {
    return (

        
    <Box
        w = "100%"
        align = "right"
        bgImage= {backgroundImage}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
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
            bg = "sideBarColor"
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

                        <Menu>
                            <MenuButton as={Button}>
                                Username
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>Log Out</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

{/* area 2 is for the folders and decks */}
                <Divider /> 
                <Flex mt={3} align="center">
                    <Flex flexDir="column">
                        <Heading as="h3" size="sm" color="gray"> Folders & Decks </Heading>

{/* accordion for all the folders and decks */}
                        <Accordion defaultIndex={[0]} allowMultiple>
                            {Object.keys(folderData).map((folderName, index) => (
                                <AccordionItem key={index}>
                                <h2>
                                    <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {folderName}
                                    </Box>
                                    <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <ul>
                                    {folderData[folderName].map((uniqueName, uniqueIndex) => (
                                        <li key={uniqueIndex}>{uniqueName}</li>
                                    ))}
                                    </ul>
                                </AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Flex>
                </Flex>
            </Flex>
            <Menu display="flex" flexDirection="column" alignItems="center">
                <MenuButton as={Button} m="10px auto" mb="10" w="100px" bg="addButtonColor" _hover={{ bg: 'hoverButtonColor' }}>
                    Add New
                </MenuButton>
                <MenuList>
                    <MenuItem>New Deck</MenuItem>
                    <MenuItem>New Folder</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    </Box>
    )
}



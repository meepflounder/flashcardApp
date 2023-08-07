import React from 'react';
import { Flex, Text, Box, Divider, Heading } from "@chakra-ui/react";

const folderList = ["Neuroscience", "Computer Science", "English"];



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
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </Box>
    )
}
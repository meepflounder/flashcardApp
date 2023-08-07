import React, {useState} from 'react';
import { Flex, Text, Box, IconButton, Divider, Avatar, Heading } from "@chakra-ui/react";

const folderList = ["Neuroscience", "Computer Science", "English"];



export default function SideBar() {
    return (
    <Box
        w = "100%"
        align = "right"
    > 
        <Flex
            pos="sitcky"
            left="5"
            h="100vh"
            //marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w="200px"
            flexDir="column"
            justifyContent="space-between"
            bg = "purple"
        >
            
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems="flex-start"
                mb={4}
            >

                <Flex mt={1} mb={3} align="center">
                    {/* <Avatar size="sm" src = "___.jpg" /> */}
                    <Flex flexDir="column">
                        <Heading as="h3" size="sm" color="gray"> Flashcard App</Heading>
                        <Text as="h3" size ="xs" color = "gray"> Username </Text>
                    </Flex>
                </Flex>
                <Divider /> 

                <Flex mt={3} align="center">
                    {/* <Avatar size="sm" src = "___.jpg" /> */}
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
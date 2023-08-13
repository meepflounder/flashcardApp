import React from 'react';
import { Flex, Box, Divider, Heading, Button,
         Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
         Menu, MenuButton, MenuList, MenuItem,
         Card, Stack, Text, CardBody, HStack, IconButton,
        Input, FormLabel, FormControl, useDisclosure, 
        Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton, ModalHeader,
       } from "@chakra-ui/react";
import backgroundImage from'./backgroundImage.png';
import {CurvedButton, PracticeButton} from './CurvedButton';



const folderData = {
    "Neuroscience": ["Neuropharmacology", "Neural Development"],
    "Computer Science": ["Discrete Structures", "Data Structures"],
    "English":["Grammar", "Books"],
};

export default function SideBar() {

    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  
    return (

        <>
        
    <Box
        // w = "100%"
        // align = "right"
        // bgImage= {backgroundImage}
        // bgPosition="center"
        // bgRepeat="no-repeat"
        // bgSize="cover"
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
                        <Heading color="white" fontSize='2xl'>Flashcard App</Heading>

                        {/* <Menu>
                            <MenuButton as={Button} mt="2px" w="90px" h="20px"color="white" bg="sideBarColor" fontSize="sm">
                                Username
                            </MenuButton>

                            <MenuList>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>Log Out</MenuItem>
                            </MenuList>
                        </Menu> */}
                    </Flex>
                </Flex>

{/* area 2 is for the folders and decks */}
                <Divider /> 
                <Flex mt={3} align="center">
                    <Flex flexDir="column">
                        <Heading fontSize="m" color = "white"> Folders & Decks </Heading>

{/* accordion for all the folders and decks */}
                        <Accordion defaultIndex={[0]} allowMultiple>
                            {Object.keys(folderData).map((folderName, index) => (
                                <AccordionItem key={index} sx={{ border: "none" }}>
                                <h2>
                                    <AccordionButton sx={{justifyContent: "flex-start", pl: 0, pr: "20px",}}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {folderName}
                                    </Box>
                                    <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <ul>
                                    {folderData[folderName].map((uniqueName, uniqueIndex) => (
                                        <Text key={uniqueIndex} fontSize="sm" color = "white">{uniqueName}</Text>
                                    ))}
                                    </ul>
                                </AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Flex>
                </Flex>
            </Flex>

   <Stack align="center" pb="22px" spacing="10px">
      <CurvedButton onClick={onOpen}>New Folder</CurvedButton>
      <CurvedButton onClick={onOpen}> New Deck</CurvedButton>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pt="30px" pb="10px">
            <FormControl>
              {/* <FormLabel color="black">Name</FormLabel> */}
              <Input ref={initialRef} placeholder='Name' />
            </FormControl>

            
          </ModalBody>

          <ModalFooter>
            <Button bg='addButtonColor' color ="white" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

</Stack>
        </Flex>
    </Box>

    </>
    )
}



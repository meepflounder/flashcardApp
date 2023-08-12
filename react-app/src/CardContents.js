import React from 'react';
import {Box, Card, Stack, Text, CardBody, Button,
        Input, FormLabel, FormControl, useDisclosure, 
        Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
       } from "@chakra-ui/react";
import backgroundImage from'./backgroundImage.png';
import {CurvedButton, PracticeButton} from './CurvedButton';


const termData = [
    {
      term: 'What does S stand for in the SOLID Principles?',
      definition: 'Single Responsibility Rule',
    },
    {
      term: 'Term 2',
      definition: 'Definition 2 for Term 2',
    },{
        term: 'Term 2',
        definition: 'Definition 2 for Term 2',
      },{
        term: 'Term 2',
        definition: 'Definition 2 for Term 2',
      },{
        term: 'Term 2',
        definition: 'Definition 2 for Term 2',
      },{
        term: 'Term 2',
        definition: 'Definition 2 for Term 2',
      },
    // Add more term data objects as needed
  ];

  export default function CardContents() {


    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

    return (

    <>
               <PracticeButton onClick={onOpen}>Practice Mode</PracticeButton>

       
        <Box
            w="100%"
            h="100%"
            bgImage={backgroundImage}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            pt="136px"
            pb="134px"
            pr="165px"
            pl="292px"
            css={{ scrollBehavior: 'smooth', overflowY: 'scroll' }}
            
        >

            <div>
                {termData.map((item, index) => (
                    <Card
                        key={index}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        bg="cardColor"
                        w="748px"
                        h="144px"
                        mb="31px"
                        borderColor="cardColor"
                    >
                        <Stack position="relative"> {/* Add position:relative */}
                            <Text
                                objectFit='cover'
                                w="225px"
                                textAlign="left"
                                fontSize="sm"
                                fontWeight="bold"
                                p={4}
                                pt="21px"
                                color="sideBarColor"
                            >
                                {item.term}
                            </Text>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '100%',
                                    transform: 'translateX(-50%)',
                                    width: '1px',     // Adjust the width of the line
                                    height: '100%',
                                    backgroundColor: "lineColor", // Line color
                                    content: "''",
                                }}
                            ></div>
                        </Stack>
            
                        <Stack>
                            <CardBody>
                                <Text
                                    //maxW={{ base: '100%', sm: '200px' }}
                                    textAlign="left"
                                    fontSize="sm"
                                    //fontWeight="bold"
                                    color="sideBarColor"
                                    
                                >
                                    {item.definition}
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                ))}
            </div>


<Button onClick={onOpen}>Add New</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Term</FormLabel>
              <Input ref={initialRef} placeholder='Term' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Definition</FormLabel>
              <Input placeholder='Definition' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>




        </Box>
        </>
    )
}

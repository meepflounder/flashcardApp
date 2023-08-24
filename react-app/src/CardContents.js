import React, {useState, useEffect} from 'react';
import {Box, Card, Stack, Text, CardBody, Button, HStack, IconButton,
        Input, FormLabel, FormControl, useDisclosure, 
        Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton,
       } from "@chakra-ui/react";
import backgroundImage from'./backgroundImage.png';
import {CurvedButton, PracticeButton} from './CurvedButton';
import { EditIcon, DeleteIcon,} from '@chakra-ui/icons'

export default function CardContents({flashcardData, setFlashcardData}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [newTerm, setNewTerm] = useState();
  const [newDefinition, setNewDefinition] = useState();
  const [lastUsedId, setLastUsedId] = useState(0);


  const handleDelete = (id) => {
    const updatedFlashcardData = flashcardData.filter(item => item.id !== id);
    setFlashcardData(updatedFlashcardData);
  
    // Update the IDs of the remaining cards
    const updatedDataWithNewIDs = updatedFlashcardData.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    setFlashcardData(updatedDataWithNewIDs);
  };
  
  
  const handleSave = () => {
    const newFlashcard = {
      id: lastUsedId + 1,
      term: newTerm,
      definition: newDefinition,
    };

    setFlashcardData(prevData => [...prevData, newFlashcard]);
    setLastUsedId(lastUsedId + 1);
    onClose(); // Close the modal
  };

  useEffect(() => {
    console.log('Flashcard data updated:', flashcardData);
  }, [flashcardData]);

    return (

    <>

      <PracticeButton to="/new-page">Practice Mode</PracticeButton>
  

        <Box
            w="100%"
            h="100%"
            bgImage={backgroundImage}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            pt="40px"
            pb="134px"
            pr="165px"
            pl="292px"
            css={{ scrollBehavior: 'smooth', overflowY: 'scroll' }}
            
        >

            <div>
                {flashcardData.map((item, index) => (
                    <Card
                        key={item.id}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        bg="cardColor"
                        w="748px"
                        h="144px"
                        mb="31px"
                        borderColor="cardColor"
                        rounded="xl"
                        boxShadow="dark-lg"
                    >
                        <Stack position="relative"> {/* Add position:relative */}
                            <Text
                                objectFit='cover'
                                w="225px"
                                textAlign="left"
                                fontSize="sm"
                                fontWeight="bold"
                                pl={4}
                                pb={4}
                                pr="10px"
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
                                    width: '2px',     // Adjust the width of the line
                                    height: '100%',
                                    backgroundColor:"rgba(170, 157, 149, 0.96)",
                                    content: "''",
                                }}
                            ></div>
                        </Stack>
                        <Stack>
                            <CardBody>
                                <Text
                                    //maxW={{ base: '100%', sm: '200px' }}
                                    w="405px"
                                    textAlign="left"
                                    fontSize="sm"
                                    //fontWeight="bold"
                                    color="sideBarColor"
                                    
                                >
                                    {item.definition}
                                </Text>
                            </CardBody>
                        </Stack>
                        <Stack>
                            <HStack 
                              spacing="0px" 
                              pt="12px">
                            <IconButton 
                              fontSize="xl" 
                              size="sm" 
                              colorScheme="cardColor" 
                              color="addButtonColor" 
                              aria-label='Delete Card' 
                              icon={<DeleteIcon />} 
                              onClick={() => handleDelete(item.id)}/>
                            <IconButton 
                              fontSize="xl" 
                              size="sm" 
                              colorScheme="cardColor" 
                              color="addButtonColor" 
                              aria-label='Edit Card' 
                              icon={<EditIcon />}/>
                            </HStack>
                        </Stack>
                    </Card>
                ))}
            </div>

<Stack>
    <CurvedButton 
      onClick={onOpen} 
      ml="300px" 
      mt="10px" 
      mb="10px">
        Add New Card
    </CurvedButton>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
      >
        <ModalOverlay />
        <ModalContent 
          w="50%" 
          bg="modalColor" 
          color="sideBarColor">
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl 
              mt = "25px">
              <FormLabel 
                fontSize="xl" 
                fontWeight="bold">
                  Term
              </FormLabel>
              <Input ref={initialRef} placeholder='Term' onChange={(e) => setNewTerm(e.target.value)}/>
            </FormControl>

            <FormControl 
              mt="25px">
              <FormLabel 
                fontSize="xl" 
                fontWeight="bold">
                  Definition
              </FormLabel>
              <Input placeholder='Definition' onChange={(e) => setNewDefinition(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button 
              bg='addButtonColor' 
              color ="white" 
              mr={3} 
              onClick={handleSave}>
                Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Stack>



        </Box>
        </>
    )
}

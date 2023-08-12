import React from 'react';
import {Box, Card, Stack, Text, CardBody, Divider
       } from "@chakra-ui/react";
import backgroundImage from'./backgroundImage.png';

const termData = [
    {
      term: 'Term 1',
      definition: 'Definition 1 for Term 1',
    },
    {
      term: 'Term 2',
      definition: 'Definition 2 for Term 2',
    },
    // Add more term data objects as needed
  ];

  export default function CardContents() {
    return (
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
                                maxW={{ base: '100%', sm: '200px' }}
                                textAlign="center"
                                fontSize="sm"
                                fontWeight="bold"
                                p={4}
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
                                    backgroundColor: 'black', // Line color
                                    content: "''",
                                }}
                            ></div>
                        </Stack>
            
                        <Stack>
                            <CardBody>
                                <Text
                                    maxW={{ base: '100%', sm: '200px' }}
                                    textAlign="center"
                                    fontSize="sm"
                                    fontWeight="bold"
                                >
                                    {item.definition}
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                ))}
            </div>
        </Box>
    )
}

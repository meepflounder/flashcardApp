import React from 'react';
import { Card, Stack, Text, CardBody, Heading 
       } from '@chakra-ui/react'; // Import your UI library components

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

export default function mainPageCards() {
  return (
    <div>
      {termData.map((item, index) => (
        <Card
          key={index}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Stack>
            <Text
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              textAlign="center"
              fontSize="sm"
              fontWeight="bold"
              p={4}
            >
              Term
            </Text>

            <Text>
              {item.term} {/* Display the unique term */}
            </Text>
          </Stack>

          <Stack>
            <CardBody>
              <Heading size='sm'>Definition</Heading>
              <Text py='2'>
                {item.definition} {/* Display the unique definition */}
              </Text>
            </CardBody>
          </Stack>
        </Card>
      ))}
    </div>
  );
}

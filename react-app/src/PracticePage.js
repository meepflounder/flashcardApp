import React from 'react';
import { Box } from '@chakra-ui/react';
import backgroundImage from './backgroundImage.png';
import { PracticeButton } from './CurvedButton';
import Flashcard from './Flashcard'; // Import the Flashcard component

const PracticePage = () => {
  return (
    <>
      <PracticeButton to="/">Exit Practice</PracticeButton>
      <Box
        w="100wh"
        h="100vh"
        bgImage={backgroundImage}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flashcard
          frontContent={<div>Front of the Card</div>} // Customize the front content
          backContent={<div>Back of the Card</div>}   // Customize the back content
        />
      </Box>
    </>
  );
};

export default PracticePage;

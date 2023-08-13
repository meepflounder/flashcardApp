import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

const Flashcard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      w="774px"
      h="492px"
      border="1px solid #ccc"
      borderRadius="10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      cursor="pointer"
      onClick={handleFlip}
      bg="cardColor"
      fontWeight="bold"
      fontSize="4xl"
    >
      {isFlipped ? backContent : frontContent}
    </Box>
  );
};

export default Flashcard;

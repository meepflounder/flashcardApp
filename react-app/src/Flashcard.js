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
      borderColor="cardColor"
      borderRadius="40px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      cursor="pointer"
      onClick={handleFlip}
      bg="cardColor"
      fontWeight="medium"
      fontSize="4xl"
      textAlign={"center"}
      rounded="3xl"
      boxShadow="dark-lg"
      color="sideBarColor"
    >
      {isFlipped ? backContent : frontContent}
    </Box>
  );
};

export default Flashcard;

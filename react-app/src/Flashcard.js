import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

const Flashcard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      w="300px"
      h="200px"
      border="1px solid #ccc"
      borderRadius="10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      cursor="pointer"
      onClick={handleFlip}
    >
      {isFlipped ? backContent : frontContent}
    </Box>
  );
};

export default Flashcard;





// import React, { useState } from 'react';
// import { Box, Button } from '@chakra-ui/react';

// const Flashcard = ({ frontContent, backContent }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const toggleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <Box
//       w="774px"
//       h="492px"
//       border="1px solid #ccc"
//       borderRadius="10px"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       flexDirection="column"
//       cursor="pointer"
//       onClick={toggleFlip}
//       bg="cardColor"
//       fontWeight="bold"
//       fontSize="2xl"
//     >
//       {isFlipped ? backContent : frontContent}
//     </Box>
//   );
// };

// export default Flashcard;

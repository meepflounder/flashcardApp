import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import backgroundImage from './backgroundImage.png';

const PracticePage = () => {
  const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <Box
        w="500px"
        h="300px"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        perspective="1000px"
        transformStyle="preserve-3d"
        cursor="pointer"
        onClick={handleFlip}
      >
        <Box
          w="100%"
          h="100%"
          position="relative"
          transform={`rotateX(${isFlipped ? '180deg' : '0deg'})`}
        >
          <Box
            w="100%"
            h="100%"
            position="absolute"
            backfaceVisibility="hidden"
            transform={`rotateX(${isFlipped ? '180deg' : '0deg'})`}
          >
            <Box
              w="100%"
              h="100%"
              position="absolute"
              bg="blue.500"
              color="white"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transform={`rotateX(${isFlipped ? '180deg' : '0deg'})`}
              transition="transform 0.5s"
            >
              {frontContent}
            </Box>
            <Box
              w="100%"
              h="100%"
              position="absolute"
              bg="green.500"
              color="white"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transform={`rotateX(${isFlipped ? '0deg' : '-180deg'})`}
              transition="transform 0.5s"
            >
              {backContent}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      w="100wh"
      h="100vh"
      backgroundImage={`url(${backgroundImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <FlipCard
        frontContent={<h2>Front Side</h2>} // Customize the content
        backContent={<p>Back Side</p>}    // Customize the content
      />
    </Box>
  );
};

export default PracticePage;

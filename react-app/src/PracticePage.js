import React from 'react';
import { Box } from "@chakra-ui/react";
import backgroundImage from'./backgroundImage.png';




const PracticePage = () => {
  return (
    <Box
            w="100wh"
            h="100vh"
            bgImage={backgroundImage}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"   
    >
    
    
    </Box>
  );
};

export default PracticePage;
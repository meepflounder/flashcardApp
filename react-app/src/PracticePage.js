import React, {useState} from 'react';
import { Box, Button } from "@chakra-ui/react";
import backgroundImage from'./backgroundImage.png';
import {PracticeButton} from './CurvedButton';


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
    >
    </Box>
    </>
  );
};

export default PracticePage;
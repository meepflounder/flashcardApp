import React from 'react';
import { Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

// CurvedButton Component
export const CurvedButton = ({ children, ...rest }) => {
  return (
    <Button
      variant="solid"
      borderRadius="20px"
      //m="10px auto"
     // mb="10"
      w="143px"
      h="40px"
      bg="addButtonColor"
      boxShadow="dark-lg"
      _hover={{ bg: 'hoverButtonColor' }}

      fontFamily="quattrocento-sans, sans-serif"
      color="white"

      {...rest} // Pass any additional props to the underlying Chakra Button component
    >
      {children}
    </Button>
  );
};

// PracticeButton Component
export const PracticeButton = ({ children, to, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <Button
      variant="solid"
      borderRadius="20px"
      m="-20px"
      //mb="10"
      w="244px"
      h="55px"
      bg="sideBarColor"
      boxShadow="dark-lg"
      _hover={{ bg: 'hoverBlueButtonColor' }}

      fontFamily="quattrocento-sans, sans-serif"
      color="white"
      fontSize="xl"
      fontWeight="normal"
      style={{ position: 'absolute', top: '100px', left: '0px', zIndex: '100' }}
      onClick={handleClick}
      {...rest} // Pass any additional props to the underlying Chakra Button component
    >
      {children}
    </Button>
  );
};

import { Button } from "@chakra-ui/react";

const CurvedButton = ({ children, ...rest }) => {
  return (
    <Button
      variant="solid"
      borderRadius="20px"
      m="10px auto"
      mb="10"
      w="143px"
      h="40px"
      bg="addButtonColor"
      _hover={{ bg: 'hoverButtonColor' }}

      fontFamily="quattrocento-sans, sans-serif"
      color = "white"

      {...rest} // Pass any additional props to the underlying Chakra Button component
    >
      {children}
    </Button>
  );
};

export default CurvedButton;


import { Button } from "@chakra-ui/react";

const CurvedButton = ({ children, ...rest }) => {
  return (
    <Button
      variant="solid"
      borderRadius="full"
      m="10px auto"
      mb="10"
      w="100px"
      bg="addButtonColor"
      _hover={{ bg: 'hoverButtonColor' }}

      {...rest} // Pass any additional props to the underlying Chakra Button component
    >
      {children}
    </Button>
  );
};

export default CurvedButton;


import React from 'react';
import { Text, Icon, HStack, } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, WarningIcon } from '@chakra-ui/icons'


const PracticePage = () => {
  return (
    <HStack>
  <Icon as={DeleteIcon} boxSize={6} color="black"/>
  <Icon as={EditIcon} boxSize={6} color="black"/>
</HStack>
  );
};

export default PracticePage;
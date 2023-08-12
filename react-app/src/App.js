import React from 'react';
import {
HStack, ChakraProvider,
} from '@chakra-ui/react';

import chakraTheme from './styling/chakraTheme';
//import TicTacToeApp from './TicTacToe';
import SideBar from './SideBar';
import CardContents from './CardContents';
import PracticePage from './PracticePage';


function App() {

    return (
        <ChakraProvider theme={chakraTheme}>
            <HStack spacing="0px" h="100vh">
                {/* <PracticePage /> */}
                <CardContents /> 
                <SideBar />
            </HStack>
        </ChakraProvider>
    );
}

export default App;
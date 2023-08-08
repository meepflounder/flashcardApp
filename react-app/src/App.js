import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';

import chakraTheme from './styling/chakraTheme';
//import TicTacToeApp from './TicTacToe';
import SideBar from './SideBar';


function App() {

    return (
        <ChakraProvider theme={chakraTheme}>
            <SideBar />
        </ChakraProvider>
    );
}

export default App;
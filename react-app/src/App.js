import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';

import chakraTheme from './styling/chakraTheme';
//import GroceryListApp from './GroceryList';
import TicTacToeApp from './TicTacToe';

function App() {

    return (
        <ChakraProvider theme={chakraTheme}>
            <TicTacToeApp />
        </ChakraProvider>
    );
}

export default App;
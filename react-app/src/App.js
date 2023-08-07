import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';

import chakraTheme from './styling/chakraTheme';
//import GroceryListApp from './GroceryList';
//import TicTacToeApp from './TicTacToe';
import HomePageSideBar from './HomePageSideBar';

function App() {

    return (
        <ChakraProvider theme={chakraTheme}>
            <HomePageSideBar />
        </ChakraProvider>
    );
}

export default App;
import React from 'react';
import { HStack, ChakraProvider } from '@chakra-ui/react';
import chakraTheme from './styling/chakraTheme';
import SideBar from './SideBar';
import CardContents from './CardContents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PracticePage from './PracticePage';

function App() {
  return (
    <Router>
      <ChakraProvider theme={chakraTheme}>
        {/* This is your home page */}
        <HStack spacing="0px" h="100vh">
          <CardContents />
          <SideBar />
        </HStack>
        {/* Define your other routes here */}
        <Routes>
          <Route path="/new-page" element={<PracticePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;

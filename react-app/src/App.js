import React from 'react';
import { HStack, ChakraProvider } from '@chakra-ui/react';
import chakraTheme from './styling/chakraTheme';
import SideBar from './SideBar';
import CardContents from './CardContents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PracticePage from './PracticePage';

function Home(){
    return (
            <HStack spacing="0px" h="100vh">
            <CardContents />
            <SideBar />
            </HStack>

    );
}

function App() {
  return (
    <Router>
      <ChakraProvider theme={chakraTheme}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new-page" element={<PracticePage />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;

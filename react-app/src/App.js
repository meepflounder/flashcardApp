import React, { useState } from 'react';
import { HStack, ChakraProvider } from '@chakra-ui/react';
import chakraTheme from './styling/chakraTheme';
import SideBar from './SideBar';
import CardContents from './CardContents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {FlashcardDataProvider} from './FlashcardDataContext'
import PracticePage from './PracticePage';


function Home({ flashcardData, setFlashcardData }) {
  return (
    <HStack 
    spacing="0px"
    h="100vh">

      <CardContents flashcardData={flashcardData} setFlashcardData={setFlashcardData} />
      <SideBar />
      
    </HStack>
  );
}

function App() {
  const [flashcardData, setFlashcardData] = useState([]); // was previously useState(initialFlashcardData)

  return (
    <Router>
      <ChakraProvider theme={chakraTheme}>
        <FlashcardDataProvider>
        <Routes>
          <Route path="/" element={<Home flashcardData={flashcardData} setFlashcardData={setFlashcardData} />} />
          <Route path="/new-page" element={<PracticePage flashcardData={flashcardData} setFlashcardData={setFlashcardData}/>} />
        </Routes>
        </FlashcardDataProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;

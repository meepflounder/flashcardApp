import React, { createContext, useContext, useState } from 'react';

const FlashcardDataContext = createContext();

export const useFlashcardData = () => useContext(FlashcardDataContext);

export const FlashcardDataProvider = ({ children }) => {
  const [flashcardData, setFlashcardData] = useState([]); // Initial empty array

  return (
    <FlashcardDataContext.Provider value={{ flashcardData, setFlashcardData }}>
      {children}
    </FlashcardDataContext.Provider>
  );
};

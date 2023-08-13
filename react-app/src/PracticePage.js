import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import backgroundImage from './backgroundImage.png';
import { PracticeButton } from './CurvedButton';
import Flashcard from './Flashcard';

const PracticePage = () => {
  const cards = [
    {
      id: 1,
      frontContent: <div>Front of Card 1</div>,
      backContent: <div>Back of Card 1</div>,
    },
    {
      id: 2,
      frontContent: <div>Front of Card 2</div>,
      backContent: <div>Back of Card 2</div>,
    },
    // Add more cards as needed
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [flippedCardIds, setFlippedCardIds] = useState([]);

  const handleCardFlip = (cardId) => {
    if (!flippedCardIds.includes(cardId)) {
      setFlippedCardIds([...flippedCardIds, cardId]);
    }
  };

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setFlippedCardIds([]);
  };

  return (
    <>
      <PracticeButton to="/">Exit Practice</PracticeButton>
      <Box
        w="100wh"
        h="100vh"
        bgImage={`url(${backgroundImage})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flashcard
          frontContent={cards[activeCardIndex].frontContent}
          backContent={cards[activeCardIndex].backContent}
          isFlipped={flippedCardIds.includes(cards[activeCardIndex].id)}
          onFlip={() => handleCardFlip(cards[activeCardIndex].id)}
        />
        <Button onClick={handleNextCard}>Next Card</Button>
      </Box>
    </>
  );
};

export default PracticePage;

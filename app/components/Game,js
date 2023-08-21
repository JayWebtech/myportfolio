import React, { useState, useEffect } from "react";

const cardData = [
  { id: 1, value: "A" },
  { id: 2, value: "B" },
  { id: 3, value: "C" },
  { id: 4, value: "D" },
  { id: 5, value: "E" },
  { id: 6, value: "F" },
  { id: 7, value: "G" },
  { id: 8, value: "H" },
  { id: 9, value: "A" },
  { id: 10, value: "B" },
  { id: 11, value: "C" },
  { id: 12, value: "D" },
  { id: 13, value: "E" },
  { id: 14, value: "F" },
  { id: 15, value: "G" },
  { id: 16, value: "H" },
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    // Initialize the game
    const shuffledCards = shuffleArray([...cardData, ...cardData]);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      // Check for a match
      if (cards[flipped[0]].value === cards[flipped[1]].value) {
        setSolved([...solved, cards[flipped[0]].id, cards[flipped[1]].id]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped]);

  const handleCardClick = (index) => {
    if (
      flipped.length < 2 &&
      !flipped.includes(index) &&
      !solved.includes(cards[index].id)
    ) {
      setFlipped([...flipped, index]);
    }
  };

  const renderCard = (card, index) => {
    const isFlipped = flipped.includes(index) || solved.includes(card.id);
    return (
      <div
        key={index}
        className={`memory-card ${isFlipped ? "flipped" : ""}`}
        onClick={() => handleCardClick(index)}
      >
        {isFlipped ? card.value : "?"}
      </div>
    );
  };

  return (
    <div className="memory-match-game">
      <div className="card-grid">
        {cards.map((card, index) => renderCard(card, index))}
      </div>
    </div>
  );
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default Game;

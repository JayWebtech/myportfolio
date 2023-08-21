import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import AnimatedItem from "../components/AnimatedItem";
import Image from "next/image";

const cardData = [
  { id: 1, value: "A", imageUrl: "g1.svg" },
  { id: 2, value: "B", imageUrl: "g2.svg" },
  { id: 3, value: "C", imageUrl: "g3.svg" },
  { id: 4, value: "D", imageUrl: "g4.svg" },
  { id: 5, value: "E", imageUrl: "g5.svg" },
  { id: 6, value: "F", imageUrl: "g6.svg" },
  { id: 7, value: "A", imageUrl: "g1.svg" },
  { id: 8, value: "B", imageUrl: "g2.svg" },
  { id: 9, value: "C", imageUrl: "g3.svg" },
  { id: 10, value: "D", imageUrl: "g4.svg" },
  { id: 11, value: "E", imageUrl: "g5.svg" },
  { id: 12, value: "F", imageUrl: "g6.svg" },
];

const Game = ({ game, setGame }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [moveCount, setMoveCount] = useState(0);

  useEffect(() => {
    const shuffledCards = shuffleArray([...cardData, ...cardData]);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
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
      setMoveCount(moveCount + 1);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const renderCard = (card, index) => {
    const isFlipped = flipped.includes(index) || solved.includes(card.id);

    return (
      <div
        key={index}
        className={`basis-2/12 flex items-center justify-center w-[100px] h-[100px] text-center font-Rubik font-medium text-3xl cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-4 rounded-xl memory-card ${
          isFlipped ? "flipped" : ""
        }`}
        onClick={() => {
          const audio = new Audio("click.wav");
          audio.play();
          handleCardClick(index);
        }}
      >
        {isFlipped ? (
          <Image
            src={`../../${card.imageUrl}`}
            alt={card.value}
            width={80}
            height={80}
            className="object-contain"
          />
        ) : (
          <span>?</span>
        )}
      </div>
    );
  };
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${
        game ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-opacity-100 backdrop-blur-3xl border border-gray-400 overflow-y-scroll  w-[1000px] h-auto p-1 rounded-lg shadow-xl  border-opacity-10">
        <div className="flex">
          <MdOutlineClose
            className="text-white text-4xl ml-auto p-1  hover:bg-red-600 rounded-tr-md rounded-br-md"
            onClick={() => {
              const audio = new Audio("click.wav");
              audio.play();
              setGame(false);
            }}
          />
        </div>

        <div className="flex flex-col items-start justify-start  p-5">
          <AnimatedItem animationConfig={{ delay: 0.1 }}>
            <div className="flex flex-col w-full">
              <h1 className="text-white">Moves: {moveCount}</h1>
              <section className="mt-2 text-white">
                <div className="flex justify-center items-center">
                  <div className="memory-match-game">
                    <div className="flex flex-row flex-wrap card-grid ">
                      {cards.map((card, index) => renderCard(card, index))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </div>
  );
};

export default Game;

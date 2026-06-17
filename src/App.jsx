import { useState } from "react";
import './App.css'


function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const cards = [
    {
      question: "Capital of France",
      answer: "Paris",
    },
    {
      question: "Capital of Japan",
      answer: "Tokyo",
    },
    {
      question: "Capital of India",
      answer: "New Delhi",
    },
    {
      question: "Capital of United States",
      answer: "Washington D.C",
    },
    {
      question: "Capital of South Korea",
      answer: "Seoul",
    },
    {
      question: "Capital of Egypt",
      answer: "Cairo",
    },
    {
      question: "Capital of Kenya",
      answer: "Nairobi",
    },
    {
      question: "Capital of Australia",
      answer: "Canberra",
    },
    {
      question: "Capital of New Zealand",
      answer: "Wellington",
    },
    {
      question: "Capital of Germany",
      answer: "Berlin",
    },
  ];

  function nextCard() {
    setCurrentCard((prev) => {
      if (prev === cards.length - 1) {
        return 0;
      }
      return prev + 1;
    });

    setIsFlipped(false);
  }
  
  function prevCard() {
    setCurrentCard((prev) => {
      if (prev === 0) {
        return cards.length - 1;
      }
      return prev - 1;
    });

    setIsFlipped(false);
  }

  function flipCard() {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="content">

      <h1>Flashcards</h1>
      <p>Flip through flashcards, test your knowledge, and reinforce what you learn!</p>
      <p>Total Cards: 10</p>
      
      <p
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={flipCard}
      >
        {isFlipped
          ? cards[currentCard].answer
          : cards[currentCard].question}
      </p>

      <div className="btn-divs content" style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button className="button" onClick={prevCard}>Previous</button>
        <button className="button" onClick={nextCard}>Next</button>
      </div>

    </div>
  )

}

export default App

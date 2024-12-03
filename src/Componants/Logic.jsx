import React, { useState } from "react";
import { useEffect } from "react";

const useLogic = () => {
  const [round, setRound] = useState(1);
  const [randomnumber, setRandomnumber] = useState(0);
  const [player1Number, setPlayer1Number] = useState("");
  const [player2Number, setPlayer2Number] = useState("");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (round <= 5) {
      GeneratesNumber();
    } else {
      setGameOver(true);
    }
  }, [round]);

  const GeneratesNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setRandomnumber(randomNum);
  };

  const handleGuess = () => {
    if (player1Number && player2Number) {
      const player1Correct = parseInt(player1Number) === randomnumber;
      const player2Correct = parseInt(player2Number) === randomnumber;

      if (player1Correct) setPlayer1Score((prev) => prev + 1);
      if (player2Correct) setPlayer2Score((prev) => prev + 1);

      setRound((prev) => prev + 1);
      setPlayer1Number("");
      setPlayer2Number("");
    }
  };

  const resetGame = () => {
    setRound(1);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setGameOver(false);
  };

  return {
    resetGame,
    round,
    handleGuess,
    gameOver,
    setPlayer1Number,
    setPlayer2Number,
    player1Number,
    player2Number,
    randomnumber,
    player1Score,
    player2Score,
  };
};

export default useLogic;
